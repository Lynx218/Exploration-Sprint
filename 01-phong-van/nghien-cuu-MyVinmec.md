# Nghiên cứu bàn giấy: MyVinmec đang vận hành thế nào (truy cập 19/10/2026)

> **Do AI (Claude) tổng hợp từ nguồn công khai, chưa phải kết quả tự dùng thử.** Đây là tài liệu tham khảo; các mục "chưa xác minh" ở cuối phải được kiểm chứng khi tự dùng app (xem `ghi-chep-dung-thu-MyVinmec.md`). Nguồn video YouTube rất ít; nguồn đáng tin nhất là bài hướng dẫn chính thức trên vinmec.com và trang App Store / Google Play.

## 1. Tóm tắt
MyVinmec vận hành như một "cổng hồ sơ + lịch hẹn". Nút thắt chính: **kết nối hồ sơ y tế (mã y tế / PID) bằng OTP gửi về số điện thoại đã đăng ký tại viện, và thông tin phải khớp**. Gần như mọi bước sau đặt lịch (khai báo trước khám / QR, xem kết quả, đơn thuốc, sổ tiêm) phụ thuộc bước này.

## 2. Bản đồ tính năng
| Tính năng | Trạng thái | Nguồn |
|---|---|---|
| Đặt lịch cho bản thân / người thân | Có thật | Mô tả App Store VN / Google Play |
| Chọn cơ sở / bác sĩ / khung giờ | Nhiều khả năng có (cần tự kiểm chứng có chọn chuyên khoa) | vinmec.com; apphay.vn (bên thứ ba, bản cũ) |
| Chăm sóc sức khỏe từ xa (telehealth), có thu phí | Có thật (trang nguồn đã chuyển hướng, thông tin có thể cũ) | i.vinmec.com/telehealth |
| Hồ sơ sức khỏe (lịch sử khám, SKTQ, xét nghiệm, sổ tiêm) | Có thật, chỉ sau khi kết nối mã y tế | App Store VN; bài hướng dẫn kết nối hồ sơ |
| Xem kết quả chẩn đoán hình ảnh | Có thật | Bài "số hóa phim y tế" của Vinmec; changelog 2.8.0 |
| Khai báo trước khám / mã QR check-in | Có thật | App Store; bài hướng dẫn khai báo (từ 10/1/2022) |
| Đơn thuốc + giao thuốc tại nhà (đơn trong 5 ngày) | Có thật | Bài "Mua thuốc tại nhà" (24-07-2025) |
| Hỏi đáp bác sĩ, cẩm nang mẹ và bé | Có thật | App Store VN |
| Nhắc lịch hẹn | Không chắc (chỉ thấy ở bài giới thiệu bản 1.0) | — |
| Thanh toán viện phí ngoại trú | Không chắc cho MyVinmec (bài Vinmec mô tả qua Mini-app V-App) | vinmec.com (14-04-2026) |
| Lấy số thứ tự / xem hàng chờ / ước thời gian chờ | **Không tìm thấy** | — |
| Nhắc / đặt tái khám chủ động | **Không tìm thấy** | — |
| AI / chatbot | **Không tìm thấy** | — |

## 3. Các kênh số song song (nguồn gây rối tiềm năng)
MyVinmec; website đặt lịch online.vinmec.com; Mini-app Vinmec trên V-App (có bước kết nối hồ sơ riêng); Zalo Mini App do Bookie triển khai. Tài khoản MyVinmec là riêng biệt với các tài khoản trên hệ thống khác của Vinmec.

## 4. Luồng theo khoảnh khắc (theo tài liệu chính thức; chưa tự kiểm chứng)
**A. Đăng ký / kết nối hồ sơ (khoảng 6–7 bước nếu đã từng khám):** tải app → đăng ký bằng SĐT/email, OTP → Trang chủ → Hồ sơ → "Đã từng khám, nhập mã y tế" (hoặc "Quên mã y tế" nhập họ tên, ngày sinh, SĐT, giới tính) → OTP gửi về SĐT gắn với hồ sơ tại viện → kiểm tra thông tin → "Kết nối hồ sơ ngay!" → thành công khi hiện "Mã y tế". Nếu thất bại, hướng dẫn chính thức chỉ nêu: tắt mở lại app, cập nhật, gọi hotline.

**B. Đặt lịch:** chọn người khám → chọn cơ sở, bác sĩ, ngày giờ → xác nhận. *Chưa có hướng dẫn chính thức từng bước; chưa rõ xác nhận tức thì hay tổng đài gọi lại* (các bài bên thứ ba nói đặt qua website thì tổng đài gọi lại xác nhận).

**C. Telehealth:** Trang chủ → "Chăm sóc sức khỏe từ xa" → chọn địa điểm, giờ, vấn đề → thanh toán trong 15 phút (nguồn ghi 300.000 vnđ) → nhân viên gọi lại xác nhận.

**D. Trước khám / check-in:** Lịch hẹn → "Khai báo bắt buộc trước khám" → điền mẫu (kèm ảnh giấy tờ) → lưu mã QR → đưa nhân viên quét. Nếu chưa thấy lịch hẹn phải quay lại kết nối hồ sơ. **Khoảnh khắc "chờ" sau check-in: không có tính năng nào được công bố.** Vinmec khuyên đến sớm 10–15 phút.

**E. Nhận kết quả:** SMS báo đã hoàn thiện (SKTQ) → Hồ sơ → chọn ngày khám; chẩn đoán hình ảnh: bấm thông báo → chọn hồ sơ → "Xem hình ảnh"; kết quả trên app ghi rõ không thay thế bản cứng.

**F. Sau khám:** Trang chủ → "Đơn thuốc" → chọn đơn → "Yêu cầu giao thuốc tại nhà" (đơn trong 5 ngày; quá hạn gửi yêu cầu cho dược sĩ). Tái khám: không thấy luồng riêng, giả định đặt lịch mới (cần kiểm chứng).

## 5. Điểm đau có nguồn (ý kiến người dùng, định tính, không phải tỷ lệ)
| Điểm đau | Nguồn | Khoảnh khắc |
|---|---|---|
| OTP gửi chậm | App Store VN, 17/08/2023 | Đăng ký |
| Đăng nhập lại bị quay mãi | Google Play, 12/08/2025 | Đăng nhập |
| Không đổi được SĐT đã đăng ký, hỗ trợ kém | Google Play, 23/01/2026 | Tài khoản / kết nối hồ sơ |
| Gửi yêu cầu qua app không được phản hồi | Google Play, 29/06/2026 | Hỗ trợ |
| Kết nối hồ sơ thất bại dù thông tin đúng → gọi hotline | **Chính thức** (Vinmec tự nêu) | Kết nối hồ sơ |

Số liệu store (19/10/2026): App Store VN 4,9/5 (khoảng 16 N đánh giá), phiên bản 3.0.1; Google Play 4,3 sao, 100K+ lượt tải. Mâu thuẫn chưa giải quyết: Google Play khai "No data collected" còn App Store liệt kê thu thập dữ liệu sức khỏe và thông tin liên hệ.

## 6. Chưa xác minh được (tự kiểm chứng khi dùng thử)
1. Đặt lịch có chọn chuyên khoa không; số bước thực tế.
2. Đặt lịch qua app xác nhận tức thì hay tổng đài gọi lại.
3. Có nhắc lịch / nhắc tái khám không.
4. Có thanh toán viện phí ngoại trú trong MyVinmec không.
5. Có lấy số / xem hàng chờ không.
6. Tên màn hình "QR check-in" hiện nay.
7. Phí telehealth và quy tắc thanh toán 15 phút còn hiệu lực không.
8. Đăng ký hiện bằng SĐT hay email; có đổi SĐT trong app không.
9. Kết quả xét nghiệm thường hiển thị dạng nào, có giải thích chỉ số không.
10. Nội dung video YouTube duy nhất tìm được (chưa xem được nội dung).

## 7. Nguồn
- [Hướng dẫn kết nối hồ sơ y tế và sổ tiêm chủng trên MyVinmec](https://www.vinmec.com/vie/bai-viet/huong-dan-ket-noi-ho-so-y-te-va-so-tiem-chung-tren-ung-dung-myvinmec-vi) (Vinmec, cập nhật 22-07-2024)
- [Hướng dẫn khai báo trước khám tại MyVinmec](https://www.vinmec.com/vie/bai-viet/huong-dan-khai-bao-truoc-kham-tai-ung-dung-myvinmec-vi)
- [Hướng dẫn theo dõi kết quả khám sức khỏe tổng quát](https://www.vinmec.com/vie/bai-viet/huong-dan-theo-doi-ket-qua-kham-suc-khoe-tong-quat-tai-ung-dung-myvinmec-vi)
- [Theo dõi kết quả xét nghiệm Covid-19 trên MyVinmec](https://www.vinmec.com/vie/bai-viet/theo-doi-ket-qua-xet-nghiem-covid-19-tai-vinmec-tren-ung-dung-myvinmec-vi)
- [Số hóa phim y tế](https://www.vinmec.com/vie/bai-viet/he-thong-y-te-vinmec-so-hoa-phim-y-te-dung-phim-cung-de-bao-ve-moi-truong-vi)
- [Mua thuốc tại nhà trên MyVinmec](https://www.vinmec.com/vie/bai-viet/mua-thuoc-tai-nha-tien-loi-cung-tinh-nang-moi-tren-ung-dung-myvinmec-vi)
- [Hướng dẫn đặt lịch khám tại Vinmec](https://www.vinmec.com/vie/bai-viet/huong-dan-dat-lich-kham-tai-vinmec-vi)
- [Thanh toán phí khám qua Mini-app Vinmec trên V-App](https://www.vinmec.com/vie/bai-viet/thanh-toan-phi-kham-qua-mini-app-vinmec-tren-v-app-nhan-thuong-vpoint-hap-dan)
- [App Store VN – MyVinmec](https://apps.apple.com/vn/app/myvinmec/id1494832536?l=vi) | [Google Play – MyVinmec](https://play.google.com/store/apps/details?id=com.vinmec.onevinmec)
- [Telehealth Vinmec](https://i.vinmec.com/telehealth) (đã chuyển hướng khi truy cập)
- Video: [Hướng dẫn khai báo thông tin trên MyVinmec](https://www.youtube.com/watch?v=geuW-7eUYTw) (kênh Vinmec, 01/08/2022; chưa xem được nội dung) | kênh chính thức: https://www.youtube.com/@VinmecHospital
- Bên thứ ba (độ tin cậy thấp hơn): [apphay.vn](https://apphay.vn/app/1494832536/myvinmec/), [urbox.vn](https://urbox.vn/thu-vien/blog/vinmec)
