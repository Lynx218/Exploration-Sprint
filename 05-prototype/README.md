# Prototype có AI

> **v1 đã dựng (20/10/2026), do Claude viết code theo quyết định của Linh.** Là prototype click được trong một file HTML. **Phần "AI" trong v1 là mô phỏng bằng kịch bản, không gọi mô hình thật; bác sĩ do người thật đóng vai (Wizard-of-Oz).** Kế hoạch gốc: [ke-hoach-xay-dung.md](ke-hoach-xay-dung.md). Chưa thử với người dùng thật.

## Hướng AI an toàn
AI chỉ hỗ trợ **thủ tục** và **soạn nháp cho bác sĩ duyệt**, không diễn giải y khoa:
- Trả lời câu hỏi thủ tục / hậu cần (kết quả xem ở đâu, đặt tái khám, đơn thuốc).
- Giúp người bệnh diễn đạt câu hỏi gửi bác sĩ; soạn bản nháp trả lời chỉ từ lời dặn bác sĩ đã có, bác sĩ duyệt rồi mới gửi.
- **Không làm:** diễn giải chỉ số xét nghiệm của người bệnh, gợi ý chẩn đoán, thuốc hay chuyên khoa; trả lời y khoa trực tiếp; tiếp tục khi có dấu hiệu khẩn cấp (chuyển 115 / người thật).

## Giải pháp đề xuất (1 đoạn)
Giải quyết need statement: màn hình "Kết quả của bạn" cho người nhận kết quả từ xa, gồm thẻ ngữ cảnh do bác sĩ duyệt, thẻ "Việc cần làm tiếp" lấy từ chỉ định của bác sĩ, và đường "Hỏi bác sĩ về kết quả này" có hẹn thời gian phản hồi.
AI làm gì: trả lời câu hỏi thủ tục; hỗ trợ soạn câu hỏi; soạn nháp trả lời từ lời dặn có sẵn của bác sĩ | AI **không** làm gì: diễn giải y khoa, chẩn đoán, khuyên thuốc, trả lời y khoa không qua bác sĩ.
*(v1: "AI" là kịch bản cố định (từ khóa → câu trả lời soạn sẵn; bản nháp cho bác sĩ ghép từ lời dặn giả trong hồ sơ giả). Bác sĩ do người thật đóng vai. Prompt cho phiên bản dùng mô hình thật (v2) nằm trong `prompts.md`.)*

## Cách chạy
- Mã nguồn: [`prototype-v1.html`](prototype-v1.html) (một file, không cần cài đặt)
- Chạy: mở file bằng trình duyệt (Chrome/Edge/Safari), điện thoại hoặc máy tính. Không cần mạng, không lưu dữ liệu.
- Cách thử: vai "Người bệnh": Mở ứng dụng → xem kết quả → đặt lịch → Hỏi bác sĩ. Sau khi gửi câu hỏi, bấm "Bác sĩ (demo)" để đóng vai bác sĩ sửa và duyệt, rồi quay lại vai người bệnh. "Đặt lại" để thử người tiếp theo; "Nhật ký thao tác" ở cuối trang ghi giờ từng bước (dùng cho test-log).

## Các file
- [`ke-hoach-xay-dung.md`](ke-hoach-xay-dung.md): kế hoạch xây dựng
- `prompts.md`: prompt hệ thống và prompt thử nghiệm đã dùng
- `test-log.md`: log thử với 2–3 người
- [`prototype-v1.html`](prototype-v1.html): prototype

## Dữ liệu trong prototype
Chỉ dùng dữ liệu giả (bệnh nhân, lịch hẹn, kết quả giả). Không dùng dữ liệu thật của ai. Không sao chép giao diện hay logo của Vinmec như thể sản phẩm chính thức; ghi rõ đây là prototype học tập.

## Giới hạn của v1
- AI mô phỏng: chỉ nhận ra các câu hỏi mẫu và một số từ khóa; câu ngoài kịch bản sẽ được chuyển người thật.
- Chỉ một kịch bản người bệnh giả; chưa có kết nối hồ sơ, OTP, thông báo thật, hay lưu trạng thái.
- Chưa kiểm tra tiếng Việt với mô hình thật, chưa đo chỉ số của need statement (cần chạy thử với 2–3 người).
- Đã tự kiểm tra bằng trình duyệt tự động: luồng chính (tin nhắn → kết quả → đặt lịch → hỏi → bác sĩ duyệt → trả lời) và nhánh từ khóa khẩn cấp chạy không lỗi.
