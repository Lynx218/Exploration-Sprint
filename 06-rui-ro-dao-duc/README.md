# Rủi ro an toàn và đạo đức

> **Bản nháp do Claude điền ngày 20/10/2026** dựa trên [prototype v1](../05-prototype/prototype-v1.html), [deep research](../04-best-practice/deep-research/bao-cao-deep-research.md) và phỏng vấn P1–P3. Điểm xác suất / tác động (1–5) là **ước lượng của Claude, Linh chỉnh lại**. Logic likelihood × impact (Day 5). Mức: ≥15 cao, 8–14 trung bình, <8 thấp.

| # | Rủi ro | Ví dụ cụ thể trong prototype | Xác suất (1–5) | Tác động (1–5) | Điểm | Cách giảm thiểu |
|---|---|---|---|---|---|---|
| 1 | AI trả lời sai / bịa (hallucination) | Trợ lý thủ tục nói sai nơi xem kết quả hoặc cách đặt lịch; v1 dùng câu soạn sẵn nên thấp, v2 dùng mô hình thật sẽ cao hơn | 2 (v1) / 3 (v2) | 3 | 6 / 9 | Giới hạn phạm vi; v1 chỉ câu soạn sẵn; v2: chỉ dựa trên nội dung thủ tục được cung cấp, nói rõ khi không chắc; ghi "(nội dung giả)" cho quy trình giả định |
| 2 | AI vô tình diễn giải kết quả / đưa lời khuyên y khoa | Người bệnh hỏi "vì sao đường huyết tôi cao?"; một nghiên cứu ghi nhận 7,1% bản nháp GPT-4 có nguy cơ gây hại nghiêm trọng nếu không sửa (cần kiểm lại nguồn) | 3 | 5 | 15 | Câu hỏi y khoa chỉ được chuyển bác sĩ, trợ lý không trả lời; bản nháp chỉ diễn đạt lại lời dặn bác sĩ đã ghi, phần ngoài lời dặn để "[BÁC SĨ BỔ SUNG]"; thẻ "chỉ số này là gì" là nội dung chung do bác sĩ duyệt |
| 3 | Bỏ sót tình huống khẩn cấp | Người dùng gõ "tôi bị đau ngực" hoặc diễn đạt khẩn cấp mà không trùng từ khóa | 3 | 5 | 15 | Từ khóa dừng + 115; dải khẩn cấp luôn hiện ở màn hình kết quả và hỏi bác sĩ; không dựa riêng từ khóa trong bản thật (dùng mô hình phân loại, rà soát với bác sĩ); giữ bản nháp bác sĩ luôn kết thúc bằng dòng khẩn cấp |
| 4 | Lộ dữ liệu cá nhân / sức khỏe | Tin nhắn thông báo gửi nhầm số (P3 nêu, chưa xác nhận); người thử gõ thông tin sức khỏe thật vào ô hỏi | 3 | 4 | 12 | Tin nhắn chỉ báo "đã có kết quả", không chứa nội dung; prototype chỉ dùng dữ liệu giả, không lưu hội thoại, nhắc người thử không gõ thông tin thật; bản thật cần đánh giá tác động theo Luật 91/2025/QH15 và xin đồng ý khi gửi dữ liệu cho mô hình bên thứ ba. App Store / Google Play khai báo thu thập dữ liệu khác nhau, cần thận trọng |
| 5 | Thông tin sai về quy trình do app thay đổi liên tục | Quy trình "yêu cầu bản giấy tại quầy", mã hotline, SLA 24–48 giờ trong prototype là **giả định**, không phải quy trình Vinmec | 3 | 3 | 9 | Ghi rõ "nội dung giả / giả định"; ghi ngày kiểm tra nguồn; xác nhận với hotline / bác sĩ đầu mối trước khi dùng thật |
| 6 | Nhầm lẫn giữa nhiều kênh (MyVinmec, website, V-App, Zalo) | Người thử không biết thông báo đến từ kênh nào hay hỏi bác sĩ ở đâu | 2 | 3 | 6 | v1 chỉ có một luồng (tin nhắn → app); khi mở rộng, hỏi người dùng đang dùng kênh nào trước khi hướng dẫn |
| 7 | Thiên lệch (ngôn ngữ, tuổi, thiết bị, người ít quen công nghệ) | Mô phỏng chỉ nhận ra từ khóa tiếng Việt chuẩn, bỏ sót tiếng lóng / không dấu; chưa thử người lớn tuổi (HINTS: hiểu kết quả 77% ở người kỹ năng số cao so với 53% ở người thấp) | 4 | 3 | 12 | Có đường tới người thật; thử với nhiều nhóm tuổi và kỹ năng số; chấp nhận không dấu trong bản thật |
| 8 | Người dùng phụ thuộc; bác sĩ "đóng dấu" không đọc kỹ | Bác sĩ bấm "Duyệt và gửi" mà không đọc bản nháp (nghiên cứu cho thấy bác sĩ có xu hướng chấp nhận đánh giá của AI) | 3 | 4 | 12 | Bản nháp có phần [BÁC SĨ BỔ SUNG] chặn gửi nếu chưa xử lý; hiển thị lời dặn gốc cạnh bản nháp; bác sĩ luôn có quyền quyết định cuối; giám sát mẫu chất lượng |
| 9 | Chi phí / vận hành | Cam kết bác sĩ trả lời trong 24–48 giờ tốn thời gian bác sĩ; v2 tốn chi phí gọi mô hình | 4 | 3 | 12 | Giới hạn phạm vi câu hỏi; AI soạn nháp để giảm thời gian; đo thời gian trả lời thật trong lần thử; chưa có dữ liệu chi phí: cần số liệu của Vinmec |
| 10 | Quy trình nghiên cứu (phỏng vấn, thử) | Transcript P2 có chi tiết nội dung khám người tham gia tự kể; ghi âm lưu trong thư mục `records/` | 3 | 3 | 9 | Xin đồng ý, ẩn danh, không hỏi bệnh án; che hoặc xóa chi tiết sức khỏe trong transcript gốc trước khi nộp; không ghi âm khi chưa được phép |
| 11 | Hứa phản hồi mà không thực hiện được (SLA) | Prototype hiển thị "bác sĩ trả lời trong 24–48 giờ"; nếu không giữ được, người bệnh mất tin | 3 | 3 | 9 | Ghi rõ là cam kết giả định; trong bản thật chỉ hứa mức đã được khoa / bác sĩ đồng ý; có thông báo khi quá hạn |
| 12 | Nhắc thừa / nhắc nhầm (bài học SureNet) | Nhắc tái khám cho người đã đặt lịch hoặc đã làm xét nghiệm ở nơi khác | 3 | 2 | 6 | Tắt nhắc khi đã đặt lịch (v1 đã làm); cho người dùng tắt / bật nhắc; thông báo không chứa nội dung kết quả |
| 13 | Người dùng xem mình bị "bất thường" mà không có bác sĩ đi cùng và lo lắng | Chỉ số ⚠ hiện ngay trên màn hình; nghiên cứu cho thấy 16,5% lo hơn khi kết quả bất thường | 3 | 3 | 9 | Hiển thị cùng dòng "chưa cho biết nguyên nhân hay mức độ", thẻ việc cần làm tiếp và đường hỏi bác sĩ ngay bên dưới; cho người bệnh chọn "bác sĩ gọi trước khi xem" ở bản sau (chưa làm trong v1) |

## Rủi ro cao (≥15) cần xử lý trước khi thử với người thật
- **#2 và #3**: v1 đã giảm bằng câu soạn sẵn, từ khóa khẩn cấp và dải 115, nhưng bộ từ khóa còn thô và chưa được bác sĩ rà soát. Trước khi dùng mô hình thật phải thử đối kháng (câu hỏi lẩn tránh, không dấu, mơ hồ) và nhờ mentor / bác sĩ đầu mối kiểm tra.

## Đường chuyển tuyến khẩn cấp
Khi người dùng nhắc tới dấu hiệu nguy cấp hoặc yêu cầu tư vấn y khoa:
1. Prototype dừng trả lời nội dung y khoa (đã làm trong v1: màn "Dừng lại" khi trùng từ khóa khẩn cấp).
2. Hiển thị thông báo: "Nếu bạn đang có tình trạng khẩn cấp, hãy gọi 115 hoặc đến cơ sở y tế gần nhất ngay." (**kiểm tra lại số điện thoại và quy trình của Vinmec trước khi nộp**).
3. Chuyển sang kênh người thật (hotline cơ sở / lễ tân). **v1 chưa có nút gọi thật;** chỉ có chỉ dẫn bằng chữ.
4. Với câu hỏi y khoa không khẩn: chuyển bác sĩ có cam kết phản hồi, không để trợ lý trả lời.
- **Hạn chế đã biết:** với ý định tự làm hại, v1 chỉ hiển thị 115 và lời nhắc nói với người ở gần, chưa có nguồn hỗ trợ chuyên biệt. Bản thật cần bổ sung nguồn hỗ trợ phù hợp, đã được xác nhận với Vinmec.

## Quyền kiểm soát của người dùng
- Người dùng luôn có thể bỏ qua trợ lý, không gửi câu hỏi ("Không gửi"), tắt nhắc, hoặc gặp người thật.
- Người dùng thấy rõ phần nào do trợ lý soạn và bác sĩ đã duyệt; không có câu trả lời y khoa nào hiện ra khi bác sĩ chưa duyệt.
