# 3 best practice quốc tế

> **Bản nháp do Claude tổng hợp từ deep research ngày 20/10/2026.** Chi tiết, số liệu và đầy đủ nguồn: [deep-research/bao-cao-deep-research.md](deep-research/bao-cao-deep-research.md). **Số liệu chưa được mở lại nguồn gốc.** Linh cần mở từng link, kiểm tra số liệu và điền ngày truy cập trước khi đưa vào slide.

Khoảnh khắc: nhận kết quả. Điểm đau được chọn: nhận kết quả từ xa mà không hỏi được ngay lý do và việc cần làm tiếp ([need statement](../03-need-statement/README.md)).

## Best practice 1: Mở kết quả ngay, kèm giải thích và quyền chọn cách nhận (Mỹ: Cures Act, Vanderbilt)

- Họ làm gì: từ 4/2021, quy định chống chặn thông tin (21st Century Cures Act) khiến người bệnh thường xem kết quả cùng lúc với bác sĩ. Vanderbilt thêm giải thích dễ hiểu cạnh kết quả (từ 2024), cho người bệnh chọn có xem trước khi bác sĩ gọi không, và đổi thông báo mặc định sang "người bệnh tự bật".
- Kết quả được báo cáo (kèm nguồn): 95,7% trong 8.139 người muốn nhận kết quả ngay; 7,5% lo hơn sau khi xem (16,5% với kết quả bất thường). Chỉ 66% người xem trước bác sĩ nói hiểu kết quả (HINTS 2024). **Giải thích dễ hiểu gần như không giảm tin nhắn hỏi bác sĩ** (17,5% so với 17,3% trên 829.902 kết quả).
- Điều kiện khiến nó hiệu quả: hồ sơ điện tử chuẩn hóa, nội dung giải thích được duyệt cho từng loại xét nghiệm, ghi nhận lựa chọn của người bệnh; một số bang Mỹ vẫn trì hoãn kết quả ung thư / di truyền.
- Nguồn: [Steitz, JAMA Netw Open 2023 (PDF)](https://static1.squarespace.com/static/603ab50ab81d5532a0a4a42b/t/642471d1eb0dbf1cfd97e896/1680110033603/P_steitz_2023.pdf); [Steitz 2021](https://www.researchgate.net/publication/355397642_Association_of_Immediate_Release_of_Test_Results_to_Patients_With_Implications_for_Clinical_Workflow); [JAMA Netw Open 2025](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2832287); [JMIR 2026](https://doi.org/10.2196/94098) – truy cập ngày ____

## Best practice 2: AI soạn nháp giải thích kết quả, bác sĩ duyệt trước khi gửi (Stanford, UCSD, Duke)

- Họ làm gì: mô hình ngôn ngữ lớn trong hồ sơ điện tử soạn sẵn lời giải thích kết quả hoặc trả lời tin nhắn; bác sĩ sửa, ký rồi mới gửi. Người bệnh không chat trực tiếp với AI.
- Kết quả được báo cáo (kèm nguồn): ở Stanford (công cụ giải thích kết quả, 2025), 72,0% bác sĩ thấy hữu ích với xét nghiệm, nhưng có bình luận về xét nghiệm bị bỏ sót hoặc nói sai. Nghiên cứu Lancet Digital Health 2024: 7,1% bản nháp GPT-4 có nguy cơ gây hại nghiêm trọng nếu không sửa. Khảo sát 1.185 người Mỹ: 63,1% chọn chờ tới 48 giờ để bác sĩ duyệt câu hỏi y khoa, còn việc hậu cần thì 57,4% chọn AI trả lời nhanh (kịch bản giả định).
- Điều kiện khiến nó hiệu quả: AI có ngữ cảnh bệnh sử, bắt buộc có người duyệt, công khai việc dùng AI, giám sát chất lượng. Bằng chứng chủ yếu đo phía bác sĩ, tiếng Anh; chưa có nghiên cứu về tiếng Việt.
- Nguồn: [Stanford 2025](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2837938); [UCSD, Tai-Seale 2024](https://sail.health/wp-content/uploads/2024/05/Poster-19-Tai-Seale.pdf); [Lancet Digit Health 2024 (PubMed)](https://pubmed.ncbi.nlm.nih.gov/38506805/); [Medical Economics (khảo sát Columbia)](https://www.medicaleconomics.com/view/patients-would-rather-wait-for-a-clinician-s-review-than-get-an-instant-ai-answer-to-medical-questions) – truy cập ngày ____

## Best practice 3: "Lưới an toàn" đóng vòng kết quả bất thường (Kaiser Permanente SureNet)

- Họ làm gì: phần mềm quét hồ sơ tìm kết quả bất thường chưa có bước tiếp theo (ví dụ chưa xét nghiệm lại sau 90 ngày); điều dưỡng điều phối liên hệ người bệnh, đặt sẵn chỉ định, nhắc tối đa 4 lần.
- Kết quả được báo cáo (kèm nguồn): chương trình creatinine tìm hơn 12.000 người chưa được theo dõi; 65% phản hồi ở lần liên hệ đầu; 56,3% xét nghiệm lại. Người có tài khoản cổng kp.org xét nghiệm lại nhiều hơn (64,2% so với 46,4%; tương quan, không phải nhân quả). **Chưa chứng minh cải thiện kết cục lâm sàng**; khoảng 44% vẫn không xét nghiệm lại dù được liên hệ.
- Điều kiện khiến nó hiệu quả: dữ liệu liên thông giữa xét nghiệm, đơn thuốc và lịch hẹn, nhân sự điều phối riêng, ngưỡng cảnh báo hợp lý để tránh quá tải; hợp với hệ thống tích hợp nơi người bệnh "thuộc về" một tổ chức.
- Nguồn: [Am J Med 2015](https://www.amjmed.com/article/S0002-9343(15)00536-7/fulltext); [PubMed 25848588](https://pubmed.ncbi.nlm.nih.gov/25848588/); [Perm J 2017 (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5283793/); [Permanente Federation (nguồn truyền thông)](https://permanente.org/reducing-diagnostic-errors/) – truy cập ngày ____

## Bài học cho Việt Nam / Vinmec

| Bài học                                                                                                                                                   | Phù hợp với điểm đau nào                                                                                               | Điều chỉnh cho bối cảnh VN (ngôn ngữ, thói quen, quy định dữ liệu)                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Xem nhanh không đồng nghĩa với hiểu, và giải thích tốt hơn không làm bớt nhu cầu hỏi người thật; phải giữ đường hỏi bác sĩ (BP1) | Bước 6: không hỏi được ngay lý do và cách điều chỉnh sinh hoạt (P1, P3)                                         | Thẻ giải thích chỉ số bằng tiếng Việt do Vinmec duyệt, kèm dấu "bác sĩ đã xem / ký" (chữ ký số theo Thông tư 13/2025/TT-BYT); không đặt mục tiêu "không phải hỏi bác sĩ"  |
| Quyền chọn có xem trước khi bác sĩ gọi hay không (BP1)                                                                                             | Bản giấy được tin hơn bản điện tử vì hỏi được bác sĩ (P1); văn hóa muốn nghe bác sĩ trực tiếp         | Mặc định giữ kênh bác sĩ cho kết quả nặng; **chưa kiểm chứng** người Việt có muốn tùy chọn này không (mẫu 3 người)                                                        |
| AI chỉ soạn nháp, bác sĩ duyệt; AI tự trả lời chỉ với thủ tục và hậu cần (BP2)                                                              | Câu hỏi "vì sao tôi bị vậy, sinh hoạt thế nào" (P1, P3) vẫn nằm trong ràng buộc không đưa lời khuyên y khoa | Cần cam kết thời gian bác sĩ phản hồi (ví dụ 24–48 giờ), công khai có AI, xin đồng ý xử lý dữ liệu nhạy cảm theo Luật 91/2025/QH15; phải tự thử chất lượng tiếng Việt     |
| Đóng vòng "việc cần làm tiếp": thẻ hành động, nút đặt lịch, nhắc, rồi người gọi nếu chưa làm (BP3)                                   | Bước 6 làm tiếp; khoảng trống nhắc / đặt tái khám của MyVinmec                                                    | Chỉ thực thi chỉ định đã có của bác sĩ; đo việc **làm**, không chỉ việc **biết**; cẩn thận nhắc nhầm người đã mua thuốc / xét nghiệm ở nơi khác (Long Châu) |
| Thông báo kênh ngoài chỉ nói "đã có kết quả", không chứa nội dung (BP1)                                                                       | Rủi ro tin nhắn gửi nhầm số (P3, chưa xác nhận)                                                                       | SMS / Zalo OA chỉ có đường dẫn vào app, không có nội dung kết quả                                                                                                                            |

## Tác động tới need statement

Cả ba mô hình ủng hộ điểm đau đã chọn, nhưng bằng chứng cho thấy vế "mà không phải quay lại hoặc gọi hỏi thêm bác sĩ" là chỉ số không thực tế. Deep research đề xuất đổi sang: người bệnh nhận kết quả từ xa **hiểu kết quả ở mức thông tin chung, biết chắc và thực hiện được bước tiếp theo bác sĩ đã chỉ định, và hỏi được bác sĩ qua một kênh có thời hạn phản hồi rõ ràng**. Chỉ số gợi ý: mức hiểu tự đánh giá, tỷ lệ hoàn thành bước tiếp theo, thời gian từ lúc hỏi đến khi bác sĩ trả lời. File [03-need-statement](../03-need-statement/README.md) **chưa được sửa**.

## Cần kiểm chứng trước khi nộp

- Mở từng nguồn, kiểm tra các con số và ngày; một số nguồn là bài truyền thông hoặc nguồn thứ cấp (Permanente Federation, các bài tóm tắt pháp lý Việt Nam).
- MyVinmec có hay không tính năng hỏi bác sĩ / tư vấn từ xa: mô tả App Store nhắc "kết nối với chuyên gia", mâu thuẫn với nghiên cứu bàn giấy; cần kiểm tra trực tiếp trên app.
- Hầu hết bằng chứng từ Mỹ, hệ thống dùng Epic, người bệnh nói tiếng Anh; chưa có dữ liệu cho Việt Nam.
