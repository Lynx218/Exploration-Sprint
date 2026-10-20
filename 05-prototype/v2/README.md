# Prototype v2: AI thật (Gemini) cho khoảnh khắc "Nhận kết quả"

> Bản nháp do Claude viết ngày 20/10/2026. **Chưa chạy với khóa Gemini thật** (chưa có khóa). Đã kiểm: lớp luật, kịch bản dự phòng, toàn bộ luồng giao diện, và xử lý của server bằng một **Gemini giả lập** (mock). Chất lượng mô hình thật **chưa được đánh giá**: chạy bộ câu thử với khóa thật trước khi cho người thử (xem dưới).

Giữ nguyên luồng v1: tin nhắn → kết quả → đặt lịch → hỏi bác sĩ → bác sĩ (người thật) duyệt → trả lời. Khác v1: trợ lý thủ tục và bản nháp cho bác sĩ gọi **Gemini thật**; có 3 kịch bản người bệnh giả; có lớp luật chặn khẩn cấp chạy **trước** mô hình; có kiểm tra bản nháp sau mô hình.

## Chạy

Cần Node.js 18 trở lên. Không cần cài thư viện.

```
cd 05-prototype/v2
copy .env.example .env      (Windows)   hoặc   cp .env.example .env
# mở .env, dán khóa vào GEMINI_API_KEY=
node server.js
```

Mở http://localhost:3000 (trên điện thoại cùng mạng: dùng IP máy chạy server). Đầu trang cho biết đang ở chế độ **mô hình thật** hay **mô phỏng**. Không có khóa hoặc gọi lỗi thì tự về mô phỏng, prototype vẫn dùng được.

Lấy khóa: tạo tại Google AI Studio, chỉ dán vào `.env` (đã có trong `.gitignore`), không dán vào HTML hay chat.

## Cách hoạt động (an toàn nhiều lớp)

1. **Luật xác định** (`rules.js`, nhận cả không dấu): từ khóa khẩn cấp → dừng, hiển thị 115, **không gọi mô hình**; từ khóa y khoa → chuyển bác sĩ, **không gọi mô hình**.
2. Câu còn lại → Gemini phân loại (THỦ_TỤC / Y_KHOA / KHẨN_CẤP / NGOÀI_PHẠM_VI). Mô hình chỉ được trả lời thủ tục từ danh sách thông tin cho sẵn. Nếu mô hình báo Y_KHOA hoặc KHẨN_CẤP thì đi nhánh tương ứng; nếu câu trả lời của mô hình chạm từ y khoa thì chuyển bác sĩ.
3. Bản nháp cho bác sĩ: Gemini chỉ được diễn đạt lại lời dặn đã ghi. Sau đó server **kiểm tra**: con số / từ y khoa không có trong lời dặn → cảnh báo bác sĩ; câu hỏi vượt lời dặn → tự thêm dòng `[BÁC SĨ BỔ SUNG]`; luôn có dòng khẩn cấp cố định. Bác sĩ không gửi được nếu còn `[BÁC SĨ BỔ SUNG]`.
4. Lỗi, hết thời gian, hết lượt (`MAX_CALLS`) → kịch bản mô phỏng.
5. Máy chủ **không lưu** nội dung; chỉ ghi lỗi ra màn hình. Chỉ dữ liệu giả được gửi tới Gemini.

## Bộ câu thử (làm trước khi cho người thử)

```
node tests/run-tests.js              # có khóa: chạy với Gemini thật; không khóa: chỉ luật + kịch bản
node tests/run-tests.js --mock       # Gemini giả lập: kiểm xử lý của server (không đánh giá mô hình)
node tests/run-tests.js --out=tests/ket-qua-gemini.md
```

33 câu cho trợ lý (khẩn cấp, y khoa, thủ tục, ngoài phạm vi, cố lách prompt; có dấu và không dấu) và 8 câu cho bản nháp. Có 4 câu cần mô hình thật (diễn đạt khẩn cấp không dùng từ khóa, yêu cầu ngoài phạm vi); không khóa thì bị bỏ qua.

- Kết quả đã chạy: [không khóa](tests/ket-qua-khong-khoa.md) (37 đạt, 0 trượt, 4 bỏ qua); [mock](tests/ket-qua-mock.md) (41 đạt, 0 trượt).
- **Việc cần làm:** chạy với khóa thật, lưu kết quả, và **tự đọc** các bản nháp (kiểm tra bằng máy không thay được việc đọc). Tiêu chí đã đề xuất: 0 nội dung y khoa do trợ lý trả lời; 100% câu khẩn cấp trong bộ bị chặn; 0 ý ngoài lời dặn trong bản nháp.

## Các file

| File                  | Việc                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| `server.js`         | Máy chủ, prompt hệ thống, gọi Gemini, kiểm tra đầu ra                                         |
| `rules.js`          | Từ khóa khẩn cấp / y khoa, thông tin thủ tục giả, kịch bản dự phòng, kiểm tra bản nháp |
| `scenarios.json`    | 3 kịch bản người bệnh giả và lời dặn bác sĩ giả                                           |
| `prototype-v2.html` | Giao diện                                                                                            |
| `tests/`            | Bộ câu thử, bộ chạy, Gemini giả lập, kết quả                                                 |

## Giới hạn

- Chưa thử với Gemini thật; định dạng gọi API dựa trên tài liệu `generateContent` của Gemini API. Nếu API báo lỗi (tên mô hình, định dạng), cửa sổ chạy server in lỗi và prototype tự về chế độ mô phỏng.
- Luật từ khóa còn thô (cố ý thiên về an toàn: có thể chặn nhầm, ví dụ "ngạt mũi"). Chưa được bác sĩ rà soát.
- Với ý định tự làm hại, chỉ hiển thị 115 và lời nhắc nói với người ở gần; chưa có nguồn hỗ trợ chuyên biệt (cần xác nhận với Vinmec).
- Thông tin thủ tục (bản giấy tại quầy, hotline, 24–48 giờ) là **giả định**.
- Gửi văn bản tới Gemini là gửi tới bên thứ ba; chỉ chấp nhận được vì dữ liệu giả. Dùng dữ liệu thật cần xin đồng ý và đánh giá pháp lý riêng.
