# Yêu cầu prototype v2

> Bản nháp do Claude điền ngày 20/10/2026 theo mẫu yêu cầu của Linh, từ các quyết định đã có ([need statement](../03-need-statement/README.md), [kế hoạch](ke-hoach-xay-dung.md), [rủi ro](../06-rui-ro-dao-duc/README.md)). Mục đánh dấu **[GIẢ ĐỊNH]** là Claude tự điền, Linh xác nhận hoặc sửa trước khi làm.

## 1. Mục tiêu và bối cảnh
- **Là gì:** web app chạy trong trình duyệt (mobile-first), thay phần "AI mô phỏng" của v1 bằng **mô hình ngôn ngữ thật** ở hai chỗ: (a) trợ lý thủ tục, (b) soạn nháp cho bác sĩ chỉ từ lời dặn đã ghi. Bác sĩ vẫn do người thật đóng vai (Wizard-of-Oz).
- **Giải quyết vấn đề:** người nhận kết quả khám từ xa không hỏi được ngay về nguyên nhân và cách điều chỉnh sinh hoạt ([need statement](../03-need-statement/README.md)). Đối tượng dùng: người bệnh nhận kết quả qua tin nhắn / ứng dụng; người đóng vai bác sĩ khi thử.
- **Mục đích:** nộp bài tập Exploration Sprint (phần "prototype có AI thật") và **test ý tưởng** với 2–3 người. Không dùng cho người bệnh thật, không đưa lên môi trường thật của Vinmec.
- **Câu hỏi v2 phải trả lời:** mô hình thật có bám đúng lời dặn, không bịa, và dừng đúng lúc khi khẩn cấp không? Người thử có hiểu hơn và làm đúng bước tiếp theo không?

## 2. Chức năng chính
**Bắt buộc (must-have)**
1. Giữ nguyên toàn bộ luồng v1 (tin nhắn → kết quả → đặt lịch → hỏi → bác sĩ duyệt → trả lời).
2. Trợ lý thủ tục gọi mô hình thật theo [prompt 1](prompts.md); chỉ trả lời thủ tục, câu y khoa → chuyển bác sĩ.
3. Soạn nháp gọi mô hình thật theo [prompt 2](prompts.md); chỉ diễn đạt lại lời dặn; phần thiếu → "[BÁC SĨ BỔ SUNG]".
4. **Lớp chặn khẩn cấp xác định (không phụ thuộc mô hình)** chạy trước khi gọi mô hình; mở rộng từ khóa, có cả không dấu.
5. Nếu gọi mô hình lỗi, chậm hoặc không có khóa: tự quay về kịch bản v1 và báo rõ "đang dùng chế độ mô phỏng".
6. Nhãn minh bạch: "Trợ lý AI" và "Bản nháp AI, bác sĩ đã duyệt"; banner "dữ liệu giả".
7. 3 kịch bản người bệnh giả (lời dặn khác nhau) để kiểm tra bám lời dặn.
8. Nhật ký thao tác có giờ (để đo thời gian và điền test-log).

**Có thì tốt (nice-to-have)**
- Tùy chọn "bác sĩ gọi trước khi xem kết quả" (BP1).
- Xuất nhật ký ra file để điền test-log.
- Bộ test tự động chạy bộ ~30 câu thử đối kháng.
- Chấm điểm bản nháp bằng một mô hình thứ hai (chỉ phụ trợ, không thay người đọc).

**Không làm ở v2**
- Đăng nhập, kết nối hồ sơ thật, OTP, SMS / Zalo thật, thanh toán, đặt lịch thật.
- Dữ liệu thật của bất kỳ ai; lưu hội thoại; tài khoản người dùng.
- AI trả lời y khoa trực tiếp cho người bệnh; AI đọc ảnh hay giấy tờ.
- Đa ngôn ngữ ngoài tiếng Việt; ứng dụng di động riêng.

## 3. Giao diện và trải nghiệm
- **Màn hình:** giữ 4 màn của v1 (tin nhắn; kết quả; hỏi bác sĩ; bác sĩ duyệt). Thêm: màn "chế độ" nhỏ hiển thị đang dùng AI thật hay mô phỏng.
- **Phong cách:** tối giản, tông xanh lục dịu, chữ lớn dễ đọc, hỗ trợ chế độ tối như v1; không sao chép logo hay giao diện Vinmec.
- **Thiết bị:** điện thoại là chính (người thử dùng điện thoại), máy tính phụ (màn hình bác sĩ).
- **Ngôn ngữ:** tiếng Việt (có dấu); chấp nhận câu hỏi không dấu.

## 4. Dữ liệu
- **Vào:** câu hỏi người bệnh (văn bản tự do); lời dặn bác sĩ giả (có cấu trúc: sinh hoạt, tái khám, mục khác); chỉ số giả.
- **Ra:** câu trả lời thủ tục; tóm tắt câu hỏi; bản nháp; log thao tác.
- **Giả lập hoàn toàn.** Nhắc người thử không gõ thông tin sức khỏe thật.
- **Lưu trữ:** không lưu hội thoại, không cơ sở dữ liệu. Chỉ giữ trong bộ nhớ trình duyệt; máy chủ không ghi log nội dung. Nhật ký thao tác nằm ở trình duyệt, người quan sát tự sao chép.
- Gửi dữ liệu ra bên ngoài chỉ là văn bản **giả** tới nhà cung cấp mô hình.

## 5. Ràng buộc kỹ thuật
- **[GIẢ ĐỊNH] Công nghệ:** một trang HTML + JavaScript (như v1) và **một máy chủ Node.js nhỏ** (một file, không framework) làm cầu nối gọi mô hình; khóa API đặt trong biến môi trường của máy chủ, **không bao giờ nằm trong HTML**.
- **[GIẢ ĐỊNH] Mô hình:** một mô hình Claude loại cân bằng giữa chất lượng và chi phí, tên mô hình đặt trong biến môi trường để đổi được; giới hạn độ dài đầu ra; giới hạn số lượt gọi mỗi phiên để khống chế chi phí.
- **Cần mạng** cho phần AI thật (không offline). v1 vẫn chạy offline và là phương án dự phòng.
- **Cần Linh xác nhận:** có khóa API và ngân sách thử chưa; máy chạy máy chủ (máy Linh hay máy chủ ngoài).
- Không cần phần cứng, vi điều khiển hay RTOS.

## 6. Phạm vi và tiêu chí hoàn thành
- **Mức hoàn thiện:** chạy được thật với logic hoạt động cho phần AI; bác sĩ vẫn là người đóng vai; không có hệ thống nền thật.
- **Nguồn lực:** Linh làm một mình **[GIẢ ĐỊNH]**, có Claude hỗ trợ viết mã. **Thời hạn:** README ghi hạn nộp 19/10/2026; Linh cho biết hạn hiện tại.
- **"Xong" khi demo được:**
  - Kịch bản A: câu thủ tục ("kết quả xem ở đâu", "đặt tái khám thế nào") được trả lời đúng bằng mô hình thật.
  - Kịch bản B: câu y khoa → không trả lời → gửi bác sĩ → bản nháp chỉ chứa ý có trong lời dặn, phần thiếu đánh dấu "[BÁC SĨ BỔ SUNG]" → bác sĩ duyệt → người bệnh thấy.
  - Kịch bản C: câu khẩn cấp (kể cả không dấu) → dừng, hiển thị 115, mô hình không được gọi.
  - Kịch bản D: tắt mạng / sai khóa → tự quay về kịch bản v1 và báo rõ.
- **Tiêu chí an toàn (cần Linh chốt con số):** trong bộ ~30 câu thử, trợ lý trả lời 0 nội dung y khoa; 100% câu khẩn cấp bị chặn; 0 ý ngoài lời dặn trong các bản nháp; mọi bản nháp có dòng khẩn cấp cố định.
- **Tiêu chí thử người dùng:** 2–3 người; đo mức hiểu (1–5), nói đúng bước tiếp theo, thời gian chờ bác sĩ. Quy tắc tiếp tục / điều chỉnh / dừng đã viết trong [kế hoạch](ke-hoach-xay-dung.md#9-dấu-hiệu-thành-công-và-thất-bại).

## 7. Định dạng kết quả
- **Nhận:** `prototype-v2.html` + `server.js` + `README` hướng dẫn chạy (vài lệnh, cách đặt khóa), cập nhật `prompts.md` (phiên bản prompt thật), bộ câu thử + kết quả chạy, cập nhật bảng rủi ro; phần giải thích **ngắn gọn**, chi tiết chỉ ở README chạy.
- Không cần sơ đồ riêng; nếu cần, một sơ đồ luồng nhỏ trong README.

## Điều cần Linh xác nhận trước khi làm
1. Có khóa API và ngân sách thử không; mô hình nào được dùng.
2. Hạn nộp hiện tại và thời gian còn lại.
3. Làm một mình hay nhóm (README ghi một người nộp).
4. Tiêu chí an toàn ở mục 6 (các con số) và ai rà soát (mentor / bác sĩ đầu mối).
5. Có đưa "bác sĩ gọi trước khi xem kết quả" vào v2 hay để sau.
