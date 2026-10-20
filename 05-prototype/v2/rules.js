// Luật xác định (không phụ thuộc mô hình) dùng chung cho server.
// Dùng cả chữ có dấu và không dấu. Cố ý "thiên về an toàn": thà chặn nhầm còn hơn bỏ sót.
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[đĐ]/g, 'd').toLowerCase();

const URGENT = ['đau ngực','khó thở','thở không được','ngất','bất tỉnh','co giật','bị liệt','liệt nửa','liệt tay','liệt chân','méo miệng','tê nửa người','đau tim','nôn ra máu','ho ra máu','chảy máu nhiều','chảy máu không','tự tử','muốn chết','không muốn sống','tự làm hại','tự hại'];
const MEDICAL = ['vì sao','tại sao','nguyên nhân','ăn gì','ăn uống','kiêng','sinh hoạt','tập thể dục','vận động','nghiêm trọng','nguy hiểm','có sao','bệnh gì','bị bệnh','uống thuốc','dùng thuốc','thuốc gì','kháng sinh','liều','điều trị','khắc phục','chẩn đoán','thực phẩm chức năng','vitamin','tiểu đường','ung thư'];
// Câu hỏi mà lời dặn không thể trả lời -> bắt buộc có dòng [BÁC SĨ BỔ SUNG] trong bản nháp
const OTHER = ['vì sao','tại sao','nguyên nhân','nghiêm trọng','nguy hiểm','có sao','bệnh gì','bị bệnh','thuốc','liều','điều trị','chẩn đoán','tiểu đường','ung thư'];
const LIFESTYLE = ['ăn','kiêng','sinh hoạt','tập','vận động','khắc phục','nên làm gì'];

// Khớp theo từ nguyên vẹn (tránh "ban giay" khớp nhầm "an gi")
const wordRe = t => new RegExp('(?<![\\p{L}\\p{N}])' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}\\p{N}])', 'u');
function has(terms, text) {
  const lower = String(text).toLowerCase(), n = norm(text);
  return terms.some(t => wordRe(t).test(lower) || wordRe(norm(t)).test(n));
}
function matchRe(re, text) {
  const lower = String(text).toLowerCase(), n = norm(text);
  const reN = new RegExp(norm(re.source), 'i');
  return re.test(lower) || reN.test(n);
}

const SLA = '24–48 giờ (cam kết giả định cho prototype)';
const EMERG_LINE = 'Nếu có dấu hiệu bất thường hoặc khẩn cấp, anh/chị gọi 115 hoặc đến cơ sở y tế gần nhất ngay.';
const PLACEHOLDER = '[BÁC SĨ BỔ SUNG: phần này chưa có trong lời dặn đã ghi (nguyên nhân / mức độ / thuốc). Trợ lý không tự trả lời.]';

// Thông tin thủ tục (GIẢ ĐỊNH cho prototype). Dùng cả cho kịch bản dự phòng và làm "sự thật" cung cấp cho mô hình.
const FACTS = [
  'Kết quả nằm ở mục "Kết quả của bạn" trong ứng dụng. Muốn bản giấy, yêu cầu tại quầy của cơ sở khám.',
  'Tái khám: bấm nút "Đặt lịch tái khám" ở thẻ "Việc cần làm tiếp". Thời điểm tái khám lấy từ chỉ định của bác sĩ đã ghi trong hồ sơ.',
  'Đơn thuốc (nếu bác sĩ có kê) nằm ở mục "Đơn thuốc"; người bệnh tự chọn nơi mua. Trợ lý không tư vấn về thuốc.',
  'Bác sĩ cam kết trả lời câu hỏi về kết quả trong ' + SLA + '.',
  'Tin nhắn thông báo chỉ báo "đã có kết quả", không chứa nội dung. Nếu nghi tin gửi nhầm số hoặc không nhận được tin, báo người thật tại quầy hoặc hotline ghi trên phiếu khám.'
];
const PROC = [
  { re: /(xem|ở đâu|mục nào).*(kết quả)|kết quả.*(ở đâu|mục nào)/, a: FACTS[0] },
  { re: /(bản giấy|giấy)/, a: 'Bạn có thể yêu cầu bản giấy tại quầy của cơ sở khám. (Nội dung giả cho prototype.)' },
  { re: /(làm gì tiếp|bước tiếp|việc cần làm tiếp|tiếp theo)/, a: 'Việc cần làm tiếp nằm ở thẻ "Việc cần làm tiếp" ở màn hình kết quả; nội dung lấy từ chỉ định của bác sĩ.' },
  { re: /(tái khám|đặt lịch|hẹn)/, a: FACTS[1] },
  { re: /(đơn thuốc|mua thuốc|nhà thuốc)/, a: FACTS[2] },
  { re: /(bao lâu|khi nào|mất bao|bao giờ).*(trả lời|phản hồi)|(trả lời|phản hồi).*(bao lâu|khi nào)/, a: FACTS[3] },
  { re: /(nhầm số|sai số|số điện thoại|không nhận được tin|tin nhắn)/, a: FACTS[4] }
];
function scriptedProc(text) { for (const p of PROC) if (matchRe(p.re, text)) return p.a; return null; }

function makeSummary(text, scn) {
  const parts = [];
  if (has(['vì sao','tại sao','nguyên nhân'], text)) parts.push('hỏi nguyên nhân');
  if (has(LIFESTYLE, text)) parts.push('hỏi cách điều chỉnh sinh hoạt');
  if (has(['nghiêm trọng','nguy hiểm','có sao'], text)) parts.push('hỏi mức độ nghiêm trọng');
  if (has(['thuốc','liều','điều trị','kháng sinh'], text)) parts.push('hỏi về thuốc / điều trị');
  if (has(['thực phẩm chức năng','vitamin'], text)) parts.push('hỏi về thực phẩm chức năng');
  if (!parts.length) parts.push('có câu hỏi về kết quả');
  return 'Chỉ số liên quan: ' + scn.relatedItem + ' (ngoài khoảng tham chiếu). Người bệnh ' + parts.join('; ') + '.';
}
function makeDraft(text, scn) {
  const n = scn.doctorNote, L = [];
  L.push('Chào anh/chị, bác sĩ trả lời câu hỏi của anh/chị về kết quả khám.');
  const asksOther = has(OTHER, text);
  if (has(LIFESTYLE, text) || !asksOther) L.push('Theo lời dặn bác sĩ đã ghi trong hồ sơ: ' + n.lifestyle);
  if (n.other && has(['thực phẩm chức năng','vitamin'], text)) L.push('Lời dặn bác sĩ đã ghi: ' + n.other);
  L.push('Bước tiếp theo bác sĩ đã chỉ định: ' + n.followup);
  if (asksOther) L.push(PLACEHOLDER);
  L.push(EMERG_LINE);
  return L.join('\n\n');
}

// Kiểm tra bản nháp (do mô hình soạn): trả về danh sách cảnh báo cho bác sĩ và đảm bảo các dòng bắt buộc.
const FORBID = ['thuốc','liều','mg','kháng sinh','insulin','chẩn đoán','ung thư','tiểu đường','đái tháo đường','điều trị','bệnh gan','suy'];
function checkDraft(draftIn, text, scn) {
  let draft = String(draftIn || '').trim();
  const warnings = [];
  const n = scn.doctorNote;
  const allowed = [n.lifestyle, n.followup, n.other || '', EMERG_LINE].join(' ').toLowerCase();
  const body = draft.replace(/\[BÁC SĨ BỔ SUNG[^\]]*\]/g, '');
  const nums = (body.match(/\d+([.,]\d+)?/g) || []).filter(x => !allowed.includes(x));
  if (nums.length) warnings.push('Có con số không có trong lời dặn: ' + [...new Set(nums)].join(', ') + '. Kiểm tra hoặc xóa.');
  const lower = body.toLowerCase();
  FORBID.forEach(w => { if (lower.includes(w) && !allowed.includes(w)) warnings.push('Có từ "' + w + '" không xuất hiện trong lời dặn. Kiểm tra hoặc xóa.'); });
  if (has(OTHER, text) && !/\[BÁC SĨ BỔ SUNG/.test(draft)) { draft += '\n\n' + PLACEHOLDER; warnings.push('Câu hỏi có phần lời dặn chưa trả lời; hệ thống đã thêm dòng [BÁC SĨ BỔ SUNG].'); }
  if (!draft.includes(EMERG_LINE)) { draft += '\n\n' + EMERG_LINE; }
  return { draft, warnings };
}
module.exports = { norm, has, matchRe, URGENT, MEDICAL, OTHER, LIFESTYLE, SLA, EMERG_LINE, PLACEHOLDER, FACTS, scriptedProc, makeSummary, makeDraft, checkDraft };
