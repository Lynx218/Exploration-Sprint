# Luồng khoảnh khắc "Nhận kết quả" (dùng để test app và phỏng vấn)

> Luồng này do AI dựng từ tài liệu công khai ([nghien-cuu-MyVinmec.md](nghien-cuu-MyVinmec.md)). Cột "Theo tài liệu" là giả định cần kiểm chứng; cột "Hỏi khi phỏng vấn" và "Test trên app" là công cụ để bạn thu bằng chứng thật. **Không điền cảm xúc hay điểm đau vào đây khi chưa có dữ liệu thật.**

**Phạm vi khoảnh khắc:** từ lúc rời cơ sở y tế sau khi khám cho đến lúc người bệnh biết kết quả đã có, tìm và xem được nó, và biết việc cần làm tiếp theo. Chỉ nghiên cứu **thủ tục** (kết quả có chưa, ở đâu, làm gì tiếp), **không nghiên cứu nội dung kết quả**.

## Sơ đồ luồng
```
[0] Điều kiện: đã kết nối hồ sơ (mã y tế + OTP)
        │
[1] Rời viện: biết khi nào / bằng kênh nào sẽ có kết quả?
        │
[2] Chờ kết quả (không có thông báo nào được công bố trong lúc chờ)
        │
[3] Có thông báo (SMS / thông báo trong app) ──► hoặc tự vào kiểm tra / gọi hỏi
        │
[4] Mở app → Hồ sơ → (mã bảo mật / vân tay) → chọn ngày / hồ sơ khám
        │
[5] Xem kết quả (văn bản / hình ảnh)
        │
[6] Hiểu và làm tiếp: bản cứng? hỏi bác sĩ? đơn thuốc? đặt tái khám?
        │
[X] Nhánh lỗi: không thấy kết quả / không đăng nhập được / OTP không về → gọi hotline
```

## Bảng các bước
| Bước | Người bệnh làm gì (theo tài liệu) | Điều cần kiểm chứng | Test trên app | Hỏi khi phỏng vấn (neo "lần gần nhất") |
|---|---|---|---|---|
| 0. Kết nối hồ sơ | Nhập mã y tế (hoặc "Quên mã y tế") → OTP gửi về SĐT gắn hồ sơ tại viện → "Kết nối hồ sơ ngay!" | OTP có chậm / gửi về SĐT cũ không; mã y tế tìm ở đâu | Làm tới màn hình nhập mã y tế (dừng nếu không có mã); ghi số bước, văn bản hướng dẫn, lỗi nếu có | Lần đầu bạn liên kết hồ sơ trên app thế nào? Bạn tìm mã ở đâu? Có lần nào không nhận được mã không? |
| 1. Rời viện | Biết (hoặc không biết) khi nào có kết quả | Nhân viên có nói thời gian và kênh nhận không | (không test được trên app) | Khi rời viện, bạn được nói gì về lúc nào và bằng cách nào sẽ có kết quả? |
| 2. Chờ | Chờ, có thể tự kiểm tra | Trong app có chỗ nào cho biết "kết quả đã có chưa / dự kiến khi nào" không (tài liệu: không thấy) | Tìm trong app mục nào cho biết tình trạng kết quả; ghi "không có" nếu không thấy | Trong lúc chưa biết kết quả đã có chưa, bạn đã làm gì? Bạn mở app / gọi hỏi bao nhiêu lần? |
| 3. Thông báo | SMS (khám sức khỏe tổng quát) hoặc thông báo trong app (chẩn đoán hình ảnh) | Thông báo có đến không, đến lúc nào, nội dung nói gì; tắt thông báo thì sao | Kiểm tra cài đặt thông báo, xem có mục thông báo trong app không | Bạn biết kết quả đã có bằng cách nào? Cách đó đến sau khám bao lâu? Có lần nào bạn không biết là đã có không? |
| 4. Mở app và tìm | Hồ sơ → mã bảo mật / vân tay → chọn ngày khám | Số chạm tới màn hình kết quả; có nhầm giữa các mục; có phải chọn đúng hồ sơ / ngày | Đếm số chạm từ trang chủ tới danh sách lần khám; ghi tên các mục và chỗ dễ nhầm | Kể mình nghe bạn tìm kết quả thế nào, bạn bấm vào đâu đầu tiên? Chỗ nào bạn phải thử nhiều lần? |
| 5. Xem kết quả | Xem văn bản hoặc "Xem hình ảnh"; app ghi rõ không thay thế bản cứng | Dạng hiển thị; có chú thích gì; có tải / chia sẻ được không | **Chỉ xem cấu trúc màn hình, không mở nội dung kết quả thật của người khác**; ghi bố cục, nhãn, ghi chú pháp lý | Bạn xem kết quả ở đâu (app, giấy, nơi khác)? Bạn coi bản nào là bản chính? Vì sao? *(không hỏi nội dung)* |
| 6. Làm tiếp | Gọi / hỏi bác sĩ, lấy đơn thuốc (đơn trong 5 ngày), đặt tái khám | App có dẫn tiếp tới việc cần làm không; luồng tái khám nằm đâu | Tìm trong màn hình kết quả có gợi ý bước tiếp theo, nút đặt lịch, mục đơn thuốc không | Sau khi nhận kết quả, bạn làm gì tiếp theo? Bạn biết việc đó bằng cách nào? Có phải gọi hoặc hỏi ai không? |
| X. Nhánh lỗi | Gọi hotline (hướng dẫn chính thức chỉ nêu cách này khi kết nối thất bại) | Hotline phản hồi thế nào; app có kênh hỗ trợ không | Tìm mục "hỗ trợ / liên hệ" trong app | Lần gần nhất bạn gặp lỗi khi lấy kết quả, bạn xử lý thế nào? Mất bao lâu? |

## Cách test khi bạn chưa có hồ sơ Vinmec
1. **Test cấu trúc app** (bước 0, 2, 4–6): chỉ làm tới màn hình kết nối hồ sơ nếu không có mã y tế; ghi rõ "chưa thử được" cho phần sau, không mượn hồ sơ người khác để xem kết quả.
2. **Test cùng người từng khám tại Vinmec (có đồng ý):** nhờ họ chia sẻ màn hình hoặc tự thao tác, **bạn chỉ quan sát bước đi, số chạm và chỗ lúng túng, không nhìn nội dung kết quả**; đề nghị họ che hoặc không mở phần nội dung. Ẩn danh thành T1/T2.
3. **Phỏng vấn người dùng app y tế khác** vẫn hợp lệ cho khoảnh khắc này (bằng chứng về hành vi nhận kết quả), ghi rõ cơ sở y tế nào là kênh nào, không định danh.

## Thứ tự làm tối nay (gợi ý)
1. 20 phút: dùng thử app theo bảng trên, quay màn hình (che thông tin cá nhân).
2. 3 cuộc gọi × 15 phút: phỏng vấn theo guide.
3. 30 phút: điền journey map bằng bằng chứng thật, rồi viết need statement.
