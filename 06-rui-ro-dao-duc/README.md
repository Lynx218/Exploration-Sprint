# Rủi ro an toàn và đạo đức

> Khung do AI soạn; bạn chỉnh theo prototype thật. Dùng logic likelihood × impact (Day 5).

| # | Rủi ro | Ví dụ cụ thể trong prototype | Xác suất (1–5) | Tác động (1–5) | Cách giảm thiểu |
|---|---|---|---|---|---|
| 1 | AI trả lời sai / bịa (hallucination) | | | | Giới hạn phạm vi, chỉ dựa trên hướng dẫn chính thức, hiển thị "chưa chắc" |
| 2 | AI vô tình diễn giải kết quả xét nghiệm / đưa lời khuyên y khoa | | | | Không nhận dữ liệu kết quả; từ chối và chuyển người thật |
| 3 | Bỏ sót tình huống khẩn cấp | | | | Phát hiện từ khóa nguy cấp → hiển thị đường chuyển tuyến khẩn cấp |
| 4 | Lộ dữ liệu cá nhân / sức khỏe (mã y tế, SĐT, ảnh giấy tờ) | | | | Không thu thập, không lưu hội thoại, chỉ dùng dữ liệu giả; ghi chú App Store / Google Play khai báo thu thập dữ liệu khác nhau, cần thận trọng |
| 5 | Thông tin sai về quy trình do app thay đổi liên tục (nhiều phiên bản trong 2025–2026) | | | | Ghi ngày kiểm tra nguồn, dẫn nguồn chính thức, có kênh xác nhận với hotline |
| 6 | Nhầm lẫn giữa nhiều kênh (MyVinmec, website, V-App, Zalo) | | | | Hỏi lại người dùng đang dùng kênh nào trước khi hướng dẫn |
| 7 | Thiên lệch (ngôn ngữ, tuổi, thiết bị, người ít quen công nghệ) | | | | Có kênh người thật; thử với nhiều nhóm |
| 8 | Người dùng phụ thuộc, nhân viên mất kỹ năng | | | | Con người luôn có quyền quyết định cuối |
| 9 | Chi phí / vận hành | | | | |
| 10 | Quy trình nghiên cứu (phỏng vấn) | | | | Xin đồng ý, ẩn danh, không hỏi bệnh án, không ghi âm khi chưa được phép |

## Đường chuyển tuyến khẩn cấp
Khi người dùng nhắc tới dấu hiệu nguy cấp hoặc yêu cầu tư vấn y khoa:
1. Prototype dừng trả lời nội dung y khoa.
2. Hiển thị thông báo: "Nếu bạn đang có tình trạng khẩn cấp, hãy gọi 115 hoặc đến cơ sở y tế gần nhất ngay." (kiểm tra lại số điện thoại và quy trình của Vinmec trước khi nộp)
3. Chuyển sang kênh người thật (hotline cơ sở / lễ tân).

## Quyền kiểm soát của người dùng
- Người dùng luôn có thể bỏ qua AI, sửa, hoặc gặp người thật.
