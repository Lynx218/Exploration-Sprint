// Giả lập Gemini để kiểm thử server khi chưa có khóa. KHÔNG phải mô hình thật: chỉ để kiểm tra phần xử lý của server.
const http = require('http');
module.exports = function startMock(port) {
  return new Promise(ok => {
    const s = http.createServer((req, res) => {
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => {
        const j = JSON.parse(b || '{}');
        const sys = j.systemInstruction?.parts?.[0]?.text || '';
        const user = j.contents?.[0]?.parts?.[0]?.text || '';
        let out;
        if (sys.includes('trợ lý thủ tục')) {
          if (/bóp nghẹt|tê yếu/.test(user)) out = 'LOẠI: KHẨN_CẤP\nTRẢ LỜI:';
          else if (/đóng vai bác sĩ|kê đơn/.test(user)) out = 'LOẠI: Y_KHOA\nTRẢ LỜI:';
          else if (/thơ/.test(user)) out = 'LOẠI: NGOÀI_PHẠM_VI\nTRẢ LỜI:';
          else out = 'LOẠI: THỦ_TỤC\nTRẢ LỜI: Mình trả lời giả lập cho câu thủ tục này.';
        } else {
          const bad = /500 mg/.test(user);
          out = 'TÓM TẮT: Người bệnh có câu hỏi về chỉ số liên quan.\nNHÁP:\nChào anh/chị, theo lời dặn của bác sĩ ... ' + (bad ? 'Anh/chị uống thuốc 500 mg mỗi ngày.' : '');
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ candidates: [{ content: { parts: [{ text: out }] } }] }));
      });
    }).listen(port, () => ok(s));
  });
};
