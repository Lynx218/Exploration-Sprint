# Mình sẽ coach một nhóm (K4) làm bài này thế nào

> Một trang. Khung do AI soạn; các cách gỡ và dấu hiệu can thiệp dựa trên chỗ mình tự gặp khi làm bài này (bản nháp 20/10/2026, Linh chỉnh lại).

## Nguyên tắc
Nhóm tự tìm ra vấn đề; mình hỏi để họ nhìn ra bằng chứng, không đưa đáp án. Mình chỉ chặn ba thứ: phá ràng buộc (đồng ý, ẩn danh, không hỏi bệnh án), giải pháp chạy trước bằng chứng, và dữ liệu bịa. Còn lại để nhóm quyết và chịu hậu quả của lựa chọn đó.

## Lịch gợi ý cho 1 tuần
| Ngày | Mục tiêu | Mình kiểm tra gì |
|---|---|---|
| 1 | Chọn khoảnh khắc, dùng thử MyVinmec, soạn guide | Guide có câu dẫn dắt ("bạn có thấy... không?") không? Có hỏi bệnh án không? Có câu xin đồng ý nguyên văn không? |
| 2–3 | Phỏng vấn ≥3 người, vẽ journey map | Ghi chép tách facts và diễn giải; có xin đồng ý, ẩn danh P1–P3; mỗi điểm đau trên journey map truy được về một câu trả lời |
| 4 | Need statement + 3 best practice | Need statement không chứa giải pháp, outcome đo được; best practice có nguồn và đã mở link kiểm lại |
| 5–6 | Prototype + thử với 2–3 người | Prototype chỉ kiểm một giả thuyết; dữ liệu giả; log thử có cột "mình sửa gì sau đó" |
| 7 | Rủi ro, coach plan, slides, README | Đủ cấu trúc repo; khai báo phần AI tạo; mỗi rủi ro có ví dụ cụ thể trong prototype |

## Khi nhóm bị kẹt
- **Không tìm được người phỏng vấn** → Mỗi thành viên nhắn 5 người quen từng khám trong 3 tháng, chỉ dùng một câu sàng lọc ("gần đây bạn có lần khám nào phải chờ kết quả không? Không cần nói khám gì"). Không bắt buộc cùng cơ sở, nhưng phải ghi rõ giới hạn mẫu (của mình: 3 người, chưa ai dùng MyVinmec). Hết ngày 2 vẫn thiếu thì mình giúp nối người.
- **Câu trả lời chỉ là ý kiến** → Nhờ nhóm nghe lại một đoạn ghi âm, gạch các câu "thường / thích / sẽ"; quay lại hỏi "lần gần nhất, lúc đó bạn làm gì?". Câu ý kiến vẫn ghi, nhưng không được dùng làm bằng chứng cho need statement.
- **Need statement dính giải pháp** → Gạch các từ "app, AI, chatbot, thông báo, kênh". Hỏi: "Nếu không có công nghệ nào, kết quả mong muốn này còn đúng không?" và "đo outcome bằng gì?". Cũng soi outcome có thực tế không (bản đầu của mình có vế "không phải hỏi lại bác sĩ", sau đó phải bỏ).
- **Prototype quá to** → Chỉ giữ một giả thuyết. Hỏi: "Màn hình nào bỏ đi mà không còn kiểm được giả thuyết?" rồi cắt phần còn lại. Dựng bản mô phỏng (Wizard-of-Oz) trước, gắn AI thật sau; ghi rõ AI làm gì và không làm gì.
- **Dữ liệu không ủng hộ giả thuyết ban đầu** → Nói với nhóm đây là kết quả tốt, không phải thất bại. Giả thuyết bàn giấy của mình (khó ở chỗ chờ kết quả, kết nối hồ sơ) bị 3 cuộc phỏng vấn bác bỏ, và hướng đi đổi sang bước sau khi nhận kết quả.

## Cách kiểm tra chất lượng
- **Checklist** (ba lớp, cuối mỗi ngày): (1) Bằng chứng: mỗi nhận định truy được về một trích dẫn có nguồn, chỗ nào chỉ một người nói thì ghi "1/3"; (2) An toàn: có đồng ý, ẩn danh, không bệnh án, không ảnh người hay giấy tờ, prototype không đưa lời khuyên y khoa; (3) Trung thực: khai báo phần AI tạo, phần do nhóm làm, nguồn đã kiểm lại hay chưa.
- **Họp ngắn (15 phút) mỗi ngày:** nhóm trả lời ba câu: hôm qua nghe hoặc thấy gì có bằng chứng? Điều gì làm đổi suy nghĩ? Hôm nay đang kẹt ở đâu? Mình chỉ hỏi thêm, kết thúc bằng một việc cụ thể cho hôm nay.
- **Dấu hiệu cần can thiệp:** (a) vi phạm ràng buộc như hỏi bệnh án, ghi âm không xin phép: dừng ngay trong ngày; (b) sang ngày 4 chưa đủ 3 cuộc phỏng vấn; (c) trích dẫn hoặc số liệu không truy được về ghi chép (nguy cơ bịa); (d) nhóm chọn công nghệ hoặc bắt đầu code trước khi có need statement; (e) nội dung AI tạo mà chưa khai báo; (f) prototype để AI trả lời y khoa.
