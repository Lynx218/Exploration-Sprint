// Chạy: node tests/run-tests.js            (dùng khóa thật trong .env nếu có; nếu không, chỉ kiểm lớp luật + kịch bản)
//       node tests/run-tests.js --mock     (dùng Gemini giả lập để kiểm xử lý của server, KHÔNG đánh giá chất lượng mô hình)
const path = require('path'), fs = require('fs');
(async () => {
  const mock = process.argv.includes('--mock');
  let mockServer;
  if (mock) {
    mockServer = await require('./mock-gemini.js')(4010);
    process.env.GEMINI_BASE_URL = 'http://localhost:4010/v1beta';
    process.env.GEMINI_API_KEY = 'mock-key';
  }
  const { assistant, draft } = require('../server.js');
  const R = require('../rules.js');
  const cases = JSON.parse(fs.readFileSync(path.join(__dirname, 'cases.json'), 'utf8'));
  const status = await assistant('kết quả xem ở đâu');
  const llm = status.source === 'llm';
  const mode = mock ? 'GIẢ LẬP (mock)' : llm ? 'MÔ HÌNH THẬT' : 'CHƯA có khóa: chỉ luật + kịch bản';
  const rows = []; let pass = 0, fail = 0, skip = 0;
  for (const c of cases.assistant) {
    if (c.needsModel && !llm) { skip++; rows.push(['SKIP', c.text, c.expect.join('|'), '(cần mô hình)']); continue; }
    const r = await assistant(c.text);
    const ok = c.expect.includes(r.type) && !(c.mustNotBe || []).includes(r.type);
    ok ? pass++ : fail++;
    rows.push([ok ? 'PASS' : 'FAIL', c.text, c.expect.join('|'), r.type + ' (' + r.source + ')']);
  }
  const drows = [];
  for (const c of cases.drafts) {
    const d = await draft(c.text, c.scenario);
    const s = JSON.parse(fs.readFileSync(path.join(__dirname, '../scenarios.json'), 'utf8')).find(x => x.id === c.scenario);
    const problems = [];
    if (d.type === 'urgent') problems.push('bị chặn khẩn cấp');
    else {
      if (!d.draft.includes(R.EMERG_LINE)) problems.push('thiếu dòng khẩn cấp');
      if (R.has(R.OTHER, c.text) && !/\[BÁC SĨ BỔ SUNG/.test(d.draft)) problems.push('thiếu [BÁC SĨ BỔ SUNG]');
      const chk = R.checkDraft(d.draft, c.text, s);
      const unresolved = chk.warnings.filter(w => /con số|Có từ/.test(w));
      if (unresolved.length && !(d.warnings || []).some(w => /con số|Có từ/.test(w))) problems.push('bản nháp có ý ngoài lời dặn mà không bị cảnh báo');
      if (c.adversarial && llm && !mock && unresolved.length) problems.push('(ghi nhận) mô hình thật sinh ý ngoài lời dặn: ' + unresolved.join(' '));
    }
    const ok = problems.filter(p => !p.startsWith('(ghi nhận)')).length === 0;
    ok ? pass++ : fail++;
    drows.push([ok ? 'PASS' : 'FAIL', c.scenario, c.text, (d.source || '') + (d.warnings && d.warnings.length ? ' | cảnh báo: ' + d.warnings.length : ''), problems.join('; ')]);
  }
  const lines = [];
  lines.push('# Kết quả chạy bộ câu thử', '', 'Chế độ: ' + mode + ' · ' + new Date().toLocaleString('vi-VN') + ' · Đạt ' + pass + ' · Trượt ' + fail + ' · Bỏ qua ' + skip, '');
  lines.push('## Trợ lý (phân loại câu hỏi)', '', '| KQ | Câu hỏi | Kỳ vọng | Thực tế |', '|---|---|---|---|');
  rows.forEach(r => lines.push('| ' + r.join(' | ') + ' |'));
  lines.push('', '## Bản nháp cho bác sĩ', '', '| KQ | Kịch bản | Câu hỏi | Nguồn | Vấn đề |', '|---|---|---|---|---|');
  drows.forEach(r => lines.push('| ' + r.join(' | ') + ' |'));
  const text = lines.join('\n');
  console.log(text);
  const out = process.argv.find(a => a.startsWith('--out='));
  if (out) fs.writeFileSync(out.slice(6), text + '\n');
  if (mockServer) mockServer.close();
  process.exit(fail ? 1 : 0);
})();
