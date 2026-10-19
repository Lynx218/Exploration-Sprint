# Kế hoạch xây dựng prototype

> Bản nháp do Claude lập ngày 20/10/2026, dựa trên [need statement](../03-need-statement/README.md), [journey map](../02-journey-map/README.md) và [deep research](../04-best-practice/deep-research/bao-cao-deep-research.md). Các điểm đánh dấu **[Linh quyết định]** cần bạn chốt trước khi làm.

## 1. Prototype cần chứng minh điều gì
Một giả thuyết duy nhất, kiểm tra được: **khi nhận kết quả từ xa, nếu người bệnh có (a) ngữ cảnh chung do bác sĩ duyệt, (b) thẻ "việc cần làm tiếp" lấy từ chỉ định của bác sĩ, và (c) đường hỏi bác sĩ có hẹn thời gian phản hồi, thì họ hiểu hơn và làm được bước tiếp theo.** Đo bằng 3 chỉ số của need statement: mức hiểu (1–5), nói/làm đúng bước tiếp theo, thời gian từ lúc hỏi đến lúc bác sĩ trả lời.

Không chứng minh: AI giải thích y khoa chính xác, tích hợp hồ sơ thật, hay hiệu quả lâm sàng.

## 2. Phạm vi (giữ nhỏ)
**Làm:** một prototype web click được, 4 màn hình, một kịch bản người bệnh giả.
**Không làm:** đăng nhập thật, kết nối hồ sơ / OTP, đọc dữ liệu thật, thanh toán, thông báo thật (Zalo/SMS), lưu hội thoại.

| # | Màn hình | Nội dung | Căn cứ |
|---|---|---|---|
| 1 | Thông báo "Đã có kết quả" | Màn hình tin nhắn giả: chỉ nói "đã có kết quả, mở app để xem", **không chứa nội dung kết quả** | Rủi ro gửi nhầm số (P3); BP1 |
| 2 | Kết quả của bạn | (a) thẻ ngữ cảnh: "chỉ số này là gì" chung chung, do bác sĩ duyệt, có dấu "đã được bác sĩ xem"; (b) thẻ **Việc cần làm tiếp** (ví dụ "Tái khám sau 3 tháng") có nút đặt lịch giả và nhắc; (c) nút "Hỏi bác sĩ về kết quả này"; (d) dải khẩn cấp: gọi 115 | BP1, BP3; P1, P3 |
| 3 | Hỏi bác sĩ | Người bệnh gõ câu hỏi; AI hỗ trợ (xem mục 3); hiện cam kết "bác sĩ trả lời trong 24–48 giờ"; trạng thái: đã gửi, bác sĩ đang xem, đã trả lời | BP2; điểm đau chính |
| 4 | Màn hình bác sĩ (chỉ để demo) | Bác sĩ thấy câu hỏi đã được tóm tắt, bản nháp trả lời, nút **Sửa / Duyệt và gửi**; người bệnh chỉ thấy câu trả lời sau khi duyệt | BP2: bác sĩ duyệt |

**Dữ liệu giả:** một người bệnh hư cấu, kết quả khám sức khỏe tổng quát với vài chỉ số giả, lời dặn của bác sĩ giả. Không dùng dữ liệu hay giấy tờ của người thật. Ghi rõ "Prototype học tập, không phải sản phẩm của Vinmec" ở chân mỗi màn hình; không dùng logo hoặc giao diện sao chép của Vinmec.

## 3. AI làm gì, không làm gì
| AI làm | AI **không** làm |
|---|---|
| Trả lời câu hỏi **thủ tục / hậu cần** (kết quả xem ở đâu, đặt tái khám thế nào, đơn thuốc, kênh liên hệ) | Diễn giải chỉ số của người bệnh, đoán nguyên nhân, gợi ý chẩn đoán, chuyên khoa, thuốc |
| Giúp người bệnh diễn đạt câu hỏi cho bác sĩ (gợi ý hỏi rõ hơn, tóm tắt) | Gửi câu trả lời y khoa trực tiếp cho người bệnh |
| Soạn **bản nháp** trả lời cho bác sĩ, **chỉ dựa trên lời dặn bác sĩ đã ghi trong hồ sơ giả**, viết lại bằng tiếng Việt dễ hiểu | Thêm lời khuyên y khoa không có trong lời dặn của bác sĩ |
| Phát hiện từ khóa khẩn cấp và dừng, hiển thị 115 / chuyển người thật | Tiếp tục trả lời khi có dấu hiệu khẩn cấp |

**[Linh quyết định] Mức AI cho phần soạn nháp.** Mình đề xuất AI chỉ diễn đạt lại lời dặn có sẵn của bác sĩ, không tự sinh nội dung y khoa mới. Cách này giữ đúng ràng buộc "không đưa lời khuyên y khoa" và vẫn minh họa mô hình BP2. Hạn chế: câu hỏi nằm ngoài lời dặn sẽ chuyển thẳng cho bác sĩ, AI không soạn.

## 4. AI thật hay mô phỏng
Bài tập cho phép mô phỏng nếu khai báo rõ. Đề xuất hai bước:
- **v1 (bắt buộc):** AI **mô phỏng bằng kịch bản** (câu trả lời soạn sẵn cho 5–6 câu hỏi mẫu, người thật đóng vai bác sĩ duyệt: Wizard-of-Oz). Khai báo rõ trong README. Rẻ, an toàn, đủ để kiểm giả thuyết.
- **v2 (nếu còn thời gian):** gọi một LLM thật cho màn hình 3 và 4 qua một máy chủ nhỏ giữ khóa API; chỉ gửi dữ liệu giả; prompt hệ thống có đủ ràng buộc ở mục 3. **[Linh quyết định]** có khóa API và muốn làm v2 không.

## 5. Công nghệ
Một trang HTML tĩnh (HTML + CSS + JavaScript, không cần cài đặt), mở bằng trình duyệt trên điện thoại hoặc máy tính; dễ gửi cho người thử. Nếu làm v2 thì thêm một file máy chủ Node nhỏ. Mình có thể dựng bản v1 và đặt vào `05-prototype/` khi bạn đồng ý kế hoạch. **[Linh quyết định]** muốn mình dựng v1 luôn không, hay bạn dựng bằng công cụ khác (ví dụ Figma).

## 6. Các bước và thời gian ước tính
| Bước | Việc | Ước tính | Đầu ra |
|---|---|---|---|
| 1 | Chốt kịch bản người bệnh giả, dữ liệu giả, lời dặn bác sĩ giả, 5–6 câu hỏi mẫu | 1 giờ | Kịch bản trong `prompts.md` |
| 2 | Viết prompt hệ thống + danh sách từ khóa khẩn cấp, cập nhật bảng rủi ro | 1 giờ | `prompts.md`, cập nhật `06-rui-ro-dao-duc` |
| 3 | Dựng 4 màn hình click được (v1, AI theo kịch bản) | 3–4 giờ | Prototype chạy được |
| 4 | Tự thử, sửa lỗi, kiểm tra không có dữ liệu thật và không có lời khuyên y khoa | 1 giờ | Bản sẵn sàng thử |
| 5 | Thử với 2–3 người (mục 7), ghi log | 1,5 giờ | `test-log.md` |
| 6 | Sửa theo phản hồi, ghi trước / sau | 1,5 giờ | Bản v1.1, README |
| 7 | (tùy chọn) v2 với LLM thật | 3 giờ | Bản v2 |

## 7. Kế hoạch thử với người dùng
- 2–3 người, ưu tiên người từng nhận kết quả từ xa; xin đồng ý trước, ẩn danh (T1–T3), không dùng thông tin sức khỏe thật của họ. Nếu được, thêm 1 người từng dùng app y tế để bù chỗ hổng "chưa phỏng vấn người dùng app" trong mẫu P1–P3.
- Nhiệm vụ giao (không hướng dẫn): (1) "Bạn vừa nhận tin này. Hãy cho mình thấy bạn làm gì tiếp"; (2) "Bạn muốn biết vì sao một chỉ số như vậy. Hãy thử hỏi"; (3) "Bạn sẽ làm gì tiếp theo sau khi xem kết quả?"
- Đo: mức hiểu tự đánh giá (1–5) trước và sau; người thử nói đúng bước tiếp theo (có / không); thời gian hoàn thành nhiệm vụ 2; chỗ lúng túng; trích lời.
- Hỏi thêm: người thử thấy thế nào khi biết câu trả lời có AI soạn và bác sĩ duyệt; khoảng chờ 24–48 giờ có chấp nhận được không (BP2 cho thấy người Mỹ chấp nhận, chưa biết người Việt).
- Không đưa ra kết luận thống kê với 2–3 người; ghi rõ là tín hiệu định tính.

## 8. Rủi ro cần xử lý trong prototype (cập nhật vào mục 06)
1. AI diễn giải y khoa hoặc bịa → giới hạn bằng lời dặn có sẵn, từ chối câu hỏi ngoài phạm vi và chuyển bác sĩ.
2. Bỏ sót khẩn cấp → từ khóa + dải 115 luôn hiển thị ở màn hình 2 và 3 (số điện thoại và quy trình Vinmec cần kiểm tra lại trước khi nộp).
3. Người xem tưởng AI trả lời thay bác sĩ → ghi rõ "AI soạn nháp, bác sĩ đã duyệt" và trạng thái chờ duyệt.
4. Dữ liệu thật lọt vào → chỉ dữ liệu giả, không lưu hội thoại, nhắc người thử không gõ thông tin sức khỏe thật của mình.
5. Nhắc thừa (BP3) → trong prototype chỉ mô phỏng một lần nhắc; ghi vào hạn chế.

## 9. Dấu hiệu thành công và thất bại
- **Tiếp tục:** phần lớn người thử nói đúng bước tiếp theo và điểm hiểu tăng; họ chấp nhận khoảng chờ bác sĩ.
- **Điều chỉnh:** người thử vẫn không biết hỏi ở đâu, hoặc không tin câu trả lời có AI → sửa wording, vị trí nút.
- **Dừng / đổi hướng:** người thử không thấy điểm đau này là vấn đề → quay lại phỏng vấn thêm trước khi đầu tư tiếp.
