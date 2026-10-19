# Deep research: 3 best practice quốc tế cho khoảnh khắc "Nhận kết quả khám"

> **Nguồn gốc:** báo cáo do công cụ nghiên cứu sâu của Claude tổng hợp ngày 20/10/2026 từ nguồn công khai. **Số liệu và trích dẫn chưa được mở lại và đối chiếu với bài gốc.** Theo yêu cầu của bài tập, Linh cần mở từng nguồn ở mục "Nguồn" cuối file, kiểm tra các con số trước khi đưa vào slide. Tên bài ở mục nguồn là tên miền do công cụ trả về; Linh bổ sung tên bài và ngày truy cập khi kiểm tra.
> Bản tóm tắt theo mẫu nằm ở [../README.md](../README.md).

# Khoảnh khắc "Nhận kết quả khám": 3 best practice quốc tế và bài học cho MyVinmec

Kết luận ngắn: ba mô hình quốc tế có bằng chứng tốt nhất là (1) mở kết quả ngay cho người bệnh, kèm giải thích dễ hiểu và cho người bệnh chọn cách nhận (Mỹ, theo 21st Century Cures Act; Vanderbilt là nơi đo lường kỹ nhất), (2) AI soạn nháp lời giải thích kết quả và bác sĩ duyệt trước khi gửi (Stanford, UCSD, Duke), và (3) "lưới an toàn" tự động theo dõi kết quả bất thường cho đến khi người bệnh làm bước tiếp theo (Kaiser Permanente SureNet). Cả ba ủng hộ điểm đau mà nhóm đã chọn. Tuy vậy, cả ba cũng cho thấy need statement hiện tại cần chỉnh: đừng đặt mục tiêu "không phải gọi hỏi bác sĩ", mà hãy đặt mục tiêu "hiểu ở mức chung, biết chắc bước tiếp theo, và hỏi được đúng người khi cần".

## TL;DR

- **Một giao diện kết quả "dễ hiểu" thì không đủ.** Người bệnh Mỹ muốn xem kết quả ngay: 95,7% trong khảo sát 8.139 người (JAMA Netw Open 2023). Nhưng chỉ 66% người xem trước khi gặp bác sĩ nói rằng họ hiểu kết quả (JMIR 2026). Khi Vanderbilt thêm phần giải thích dễ hiểu, số tin nhắn hỏi bác sĩ gần như không đổi (17,5% so với 17,3%). Người bệnh vẫn cần một kênh hỏi người thật.
- **AI giải thích kết quả chỉ an toàn khi có bác sĩ duyệt.** Ở Stanford, 72% bác sĩ đánh giá bản nháp AI giải thích kết quả xét nghiệm là hữu ích. Ngược lại, một nghiên cứu trên Lancet Digital Health ghi nhận 7,1% bản nháp GPT-4 có nguy cơ gây hại nghiêm trọng nếu gửi đi mà không sửa. Với câu hỏi y khoa, 63,1% người Mỹ chọn chờ tới 48 giờ để bác sĩ duyệt thay vì nhận câu trả lời AI tức thì.
- **Bài học dễ áp dụng nhất cho MyVinmec là "đóng vòng".** Hệ thống chủ động nhắc người bệnh làm bước tiếp theo (tái khám, xét nghiệm lại) khi có kết quả bất thường. Trong chương trình SureNet về creatinine của Kaiser, 65% người phản hồi ngay lần liên hệ đầu tiên. Người có tài khoản cổng thông tin kp.org đi xét nghiệm lại nhiều hơn (64,2% so với 46,4%).

## Phương pháp và tiêu chí chọn

Báo cáo chỉ xét các giải pháp tác động đúng vào đoạn "đã có kết quả → hiểu → hành động", ưu tiên bằng chứng peer-reviewed hoặc nguồn chính thức. Ba ví dụ được chọn để khác nhau về loại giải pháp: chính sách và thiết kế cổng thông tin, AI tạo sinh, và vận hành lâm sàng. Một số ứng viên bị loại:

- **OpenNotes:** bằng chứng mạnh, nhưng chủ yếu về ghi chú khám chứ không về kết quả xét nghiệm. Trong báo cáo, OpenNotes được dùng làm bối cảnh cho mô hình 1.
- **NHS App:** chưa tìm thấy đánh giá hiệu quả đã công bố. Tháng gần đây NHS mới đang hỏi ý kiến bác sĩ gia đình về việc thêm thẻ "Learn more about this test", nên chỉ được nhắc tới như một tín hiệu.
- **NHS Health Check:** không tìm được bằng chứng đủ cụ thể về khoảnh khắc nhận kết quả.

---

## Best practice 1: Mở kết quả ngay, kèm ngữ cảnh và quyền chọn cách nhận (Mỹ: Cures Act, Vanderbilt)

**(a) Là gì, ai làm, từ khi nào.** Quy định chống "chặn thông tin" (information blocking) theo 21st Century Cures Act do ONC (Bộ Y tế Mỹ) ban hành, có hiệu lực từ 5/4/2021. Trên thực tế, quy định này nghĩa là người bệnh thường xem được kết quả cùng lúc với bác sĩ chỉ định. Ngoại lệ là khi luật bang yêu cầu trì hoãn một số kết quả có thể thay đổi cuộc đời, ví dụ chẩn đoán ung thư mới. Đơn vị nghiên cứu sâu nhất về hệ quả là Vanderbilt University Medical Center (VUMC), với cổng My Health at Vanderbilt. Nhóm Bryan Steitz đã theo dõi từ 2021 đến 2025. Phong trào OpenNotes (BIDMC, từ 2010–2012) là tiền đề văn hóa cho mô hình này: trong nghiên cứu năm 2012, 99% người bệnh muốn tiếp tục được đọc ghi chú và không bác sĩ nào chọn dừng.

**(b) Cách hoạt động ở khoảnh khắc nhận kết quả.** Kết quả tự động lên cổng hoặc app, thường kèm thông báo đẩy, SMS hoặc email. Các cải tiến sau năm 2021 tập trung vào ba lớp:

1. Hiển thị kèm giải thích dễ hiểu ngay cạnh kết quả. Từ năm 2024, Vanderbilt áp dụng cho các xét nghiệm có nhiều tin nhắn hỏi nhất: BMP, CMP, công thức máu, tuyến giáp, microalbumin niệu, một số xét nghiệm vi sinh/kháng thể/PCR.
2. Cho người bệnh chọn có xem trước khi bác sĩ gọi hay không.
3. Đổi thông báo mặc định từ "báo ngay" sang "người bệnh tự bật".

**(c) Bằng chứng.**
- **Người bệnh muốn xem ngay:** Khảo sát 8.139 người tại 4 trung tâm học thuật cho thấy 95,7% muốn tiếp tục nhận kết quả ngay, kể cả 95,3% người có kết quả bất thường. 7,5% lo lắng hơn sau khi xem. Tỷ lệ này là 16,5% với kết quả bất thường so với 5,0% với kết quả bình thường (OR 2,71) (Steitz, JAMA Netw Open 2023).
- **Người bệnh tự đi tìm thêm thông tin:** khoảng 56,7% tìm hiểu thêm sau khi xem kết quả, phổ biến nhất là tìm trên internet (39,9%).
- **Tư vấn lúc chỉ định chưa chứng minh được tác dụng:** việc bác sĩ giải thích lý do làm xét nghiệm lúc chỉ định *không* giảm lo lắng có ý nghĩa thống kê trong mô hình gộp (OR 0,70; 99% CI 0,31–1,59). Chỉ 2/4 cơ sở thấy hiệu ứng. Blog ONC tháng 9/2026 viết rằng việc này "đã được chứng minh giảm lo lắng", tức là nói quá so với dữ liệu gốc.
- **Áp lực lên bác sĩ:** sau Cures Act, tỷ lệ kết quả người bệnh xem trước bác sĩ tăng từ 10,4% lên 40,3% (Steitz, JAMA Netw Open 2021), và số tin nhắn người bệnh gửi trong 6 giờ sau khi xem kết quả tăng gần gấp đôi, từ trung vị 77,5 lên 146 tin/ngày (cùng nghiên cứu).
- **Hành vi "làm mới" app khi chờ:** người bệnh làm mới cổng khi chờ 25,9% kết quả. Nhóm có làm mới gửi tin nhắn trong 24 giờ nhiều hơn (21,1% so với 13,8%) (Steitz, JAMA Netw Open 2025).
- **Giải thích dễ hiểu không giảm tin nhắn:** trên 829.902 kết quả, tỷ lệ kết quả có tin nhắn trong 24 giờ chỉ đổi từ 17,5% xuống 17,3% (P = 0,22). Chỉ ở xét nghiệm do chăm sóc ban đầu chỉ định mới giảm 0,8 điểm %. Với xét nghiệm vi sinh/PCR ngoài chăm sóc ban đầu, tin nhắn còn *tăng* 2,1 điểm % (Steitz, JAMA Netw Open 11/2025).
- **Khảo sát quốc gia:** theo HINTS 2024, 58% người bệnh (76% người dùng cổng) xem kết quả trước khi nghe bác sĩ. Chỉ 66% nói hiểu kết quả. Chỉ 28% được hỏi có muốn xem trước hay không. Tỷ lệ hiểu là 77% ở người có kỹ năng số cao, so với 53% ở người có kỹ năng số thấp (Richwine, Steitz, Everson, JMIR 2026).

**(d) Điều kiện thành công và giới hạn.** Cần hồ sơ điện tử chuẩn hóa, nội dung giải thích được kiểm duyệt cho từng loại xét nghiệm, và cơ chế ghi nhận lựa chọn của người bệnh. Theo ONC, nhiều hệ thống EHR vẫn thiếu chức năng này. Giới hạn: cách làm này giúp người bệnh xem nhanh, nhưng không tự làm người bệnh hiểu đủ hay biết phải làm gì tiếp. Nội dung giáo dục chung chung không thay được câu trả lời cá nhân hóa.

**(e) Bài học cho MyVinmec.**
- MyVinmec đã có phần "hiển thị" (xem xét nghiệm, chẩn đoán hình ảnh, khám sức khỏe tổng quát qua kết nối mã y tế + OTP). Phần còn thiếu là **ngữ cảnh** (thẻ "Chỉ số này là gì" bằng tiếng Việt, do Vinmec biên soạn và duyệt) và **quyền chọn** ("Tôi muốn bác sĩ gọi trước khi xem kết quả X").
- Quyền chọn này hợp với văn hóa muốn nghe bác sĩ trực tiếp. Nó cũng có thể giải quyết việc P1 tin bản giấy hơn bản điện tử: kết quả điện tử cần có dấu "đã được bác sĩ xem", có chữ ký số theo Thông tư 13/2025/TT-BYT.
- Về pháp lý, Thông tư 13/2025/TT-BYT yêu cầu bệnh viện triển khai hồ sơ bệnh án điện tử chậm nhất ngày 30/9/2025. Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 có hiệu lực từ 1/1/2026, kèm Nghị định 356/2025/NĐ-CP. Theo các bản tóm tắt pháp lý thứ cấp, tình trạng sức khỏe trong hồ sơ bệnh án thuộc dữ liệu cá nhân nhạy cảm; nhóm cần kiểm tra lại với văn bản gốc.
- Về kênh thông báo, SMS hoặc Zalo chỉ nên báo "đã có kết quả", không chứa nội dung kết quả. Rủi ro gửi nhầm số (P3) là lý do bắt buộc phải làm vậy.

**Đối chiếu với need statement.** *Hỗ trợ:* nhu cầu "hiểu kết quả" là có thật ở quy mô lớn (34% không hiểu). *Mâu thuẫn:* dữ liệu Vanderbilt cho thấy giải thích tốt hơn *không* làm giảm việc hỏi bác sĩ. Vì vậy vế "mà không phải quay lại hoặc gọi hỏi thêm bác sĩ" là chỉ số thành công không thực tế và có thể nguy hiểm. *Rủi ro nếu sao chép nguyên:* mở toàn bộ kết quả ngay, kể cả kết quả nặng như giải phẫu bệnh hay ung thư, mà không có bác sĩ đồng hành sẽ trái với kỳ vọng văn hóa Việt Nam. Ngay cả ở Mỹ, một số bang như Kentucky, California và Texas đã có luật trì hoãn loại kết quả này; luật SB 922 của Texas, hiệu lực từ 1/9/2025, yêu cầu trì hoãn 72 giờ việc phát hành điện tử kết quả liên quan đến ung thư hoặc bệnh di truyền (theo Reed Smith).

---

## Best practice 2: AI soạn nháp giải thích kết quả và trả lời tin nhắn, bác sĩ duyệt trước khi gửi (Stanford, UCSD, Duke; tính năng tích hợp Epic)

**(a) Là gì, ai làm, từ khi nào.** Đây là các mô hình ngôn ngữ lớn (GPT-4) tích hợp trong EHR Epic, tuân thủ HIPAA. Mô hình đọc tin nhắn hoặc kết quả và soạn bản nháp; bác sĩ chọn "bắt đầu từ bản nháp" hoặc tự viết. Các thử nghiệm sớm:
- Stanford Health Care: nháp trả lời tin nhắn, 2023 (Garcia, JAMA Netw Open 3/2024).
- UC San Diego Health: thử nghiệm ngẫu nhiên kiểu danh sách chờ (Tai-Seale, JAMA Netw Open 4/2024).
- Stanford: công cụ soạn nháp **lời giải thích kết quả xét nghiệm, chẩn đoán hình ảnh, giải phẫu bệnh** (Shah và cộng sự, JAMA Netw Open 8/2025). Đây là ví dụ khớp nhất với khoảnh khắc nhận kết quả.

**(b) Cách hoạt động.** Khi kết quả về, AI soạn sẵn một "result comment" bằng ngôn ngữ thường. Công cụ có kéo dữ liệu cũ để so sánh. Bác sĩ đọc, sửa, ký rồi mới gửi cho người bệnh. Người bệnh không chat trực tiếp với AI.

**(c) Bằng chứng.**
- **Công cụ giải thích kết quả (Stanford 2025):** 244 bác sĩ đã dùng, 93 người trả lời khảo sát. 84,9% thấy dễ dùng, 72,0% thấy hữu ích với xét nghiệm, 63,4% với chẩn đoán hình ảnh, 72,0% cho rằng chất lượng giải thích cao hơn. Thời gian tiết kiệm tự báo cáo có trung vị 1,1 phút mỗi kết quả, dao động từ tiết kiệm 5 phút đến tốn thêm 3,3 phút. Nhận xét tiêu cực nhiều nhất là về độ chính xác, với 13 bình luận tiêu cực: "một số xét nghiệm không được đề cập hoặc đề cập sai".
- **Nháp trả lời tin nhắn (Stanford 2024):** 162 bác sĩ, tỷ lệ dùng bản nháp 20%. Điểm gánh nặng công việc giảm từ 61,31 xuống 47,26. Thời gian không đổi.
- **UCSD 2024:** 122 bác sĩ. Thời gian đọc *tăng* 21,8%, thời gian trả lời không đổi, câu trả lời dài hơn 17,9%. Bác sĩ đánh giá bản nháp là "điểm khởi đầu giàu cảm thông".
- **Rủi ro (Chen và cộng sự, Lancet Digital Health 2024, mô phỏng ung bướu):** trong 156 lượt đánh giá, bác sĩ cho rằng bản nháp GPT-4 có nguy cơ gây hại nghiêm trọng ở 7,1% và nguy cơ tử vong ở 0,6% nếu không sửa. Bác sĩ cũng có xu hướng *chấp nhận luôn đánh giá của AI* thay vì chỉ dùng AI để diễn đạt.
- **Phía người bệnh:**
  - Khảo sát 1.455 người tại Duke: người bệnh hơi thích câu trả lời do AI soạn hơn. Khi được báo là có AI tham gia, điểm hài lòng giảm 0,13/5. Trên 75% vẫn hài lòng dù ai viết (JAMA Netw Open 3/2025).
  - Khảo sát 1.185 người Mỹ của Columbia và Vanderbilt (JAMA Netw Open, 14/10/2026): với câu hỏi y khoa, 63,1% chọn chờ tới 48 giờ để bác sĩ hoặc điều dưỡng duyệt câu trả lời AI. Với việc hậu cần như đặt lịch hay xin đơn thuốc, 57,4% chọn AI trả lời nhanh. Lưu ý: kịch bản là giả định và mẫu không xác suất.

**(d) Điều kiện thành công và giới hạn.** Cần AI tích hợp vào hồ sơ (có ngữ cảnh bệnh sử), hạ tầng tuân thủ quy định bảo mật, quy trình bắt buộc người duyệt, công khai việc dùng AI, và giám sát chất lượng liên tục. Giới hạn: không tiết kiệm thời gian rõ ràng, có thể làm bác sĩ "đóng dấu" thiếu kiểm tra, và hầu như chưa có dữ liệu về tác động lên mức hiểu hay hành vi của người bệnh. Các nghiên cứu chủ yếu đo phía bác sĩ.

**(e) Bài học cho MyVinmec.**
- Đây là mô hình AI phù hợp nhất với ràng buộc đạo đức của đề tài: AI không chẩn đoán, chỉ soạn nháp; bác sĩ Vinmec ký trước khi gửi qua MyVinmec.
- Có thể chia hai tầng theo dữ liệu Columbia:
  - **Tầng 1 (AI trả lời ngay):** thủ tục và hậu cần, như "kết quả đã có chưa", "đặt tái khám", "đơn thuốc mua ở đâu", "chỉ số này nghĩa là gì nói chung".
  - **Tầng 2 (AI soạn nháp, bác sĩ duyệt):** câu hỏi cá nhân như "vì sao tôi bị vậy", "nên ăn uống, sinh hoạt thế nào". Đây chính là điểm đau của P1 và P3.
- Thách thức tiếng Việt: các nghiên cứu trên đều bằng tiếng Anh. Chưa tìm thấy đánh giá công bố nào về chất lượng LLM khi giải thích xét nghiệm bằng tiếng Việt, nên nhóm phải tự thử nghiệm.
- Gửi dữ liệu kết quả cho LLM bên thứ ba là xử lý dữ liệu nhạy cảm. Việc này cần sự đồng ý rõ ràng và đánh giá tác động theo Luật 91/2025/QH15.

**Đối chiếu với need statement.** *Hỗ trợ mạnh:* giải pháp đánh trúng "không hỏi được ngay về nguyên nhân và cách điều chỉnh sinh hoạt". *Bổ sung:* đổi trọng tâm từ "AI trả lời thay bác sĩ" sang "AI giúp bác sĩ trả lời nhanh và đầy đủ hơn". *Thu hẹp:* nguyên nhân và lời khuyên cá nhân thuộc phạm vi y khoa, nên AI tự trả lời là vi phạm ràng buộc đạo đức. *Rủi ro nếu sao chép nguyên:* để chatbot AI trả lời trực tiếp người bệnh về kết quả của họ, với tỷ lệ khoảng 7% bản nháp có nguy cơ gây hại nghiêm trọng, là không chấp nhận được. Ngoài ra, vận hành mô hình này tốn thời gian bác sĩ, cần một cam kết dịch vụ (SLA) rõ ràng, ví dụ "bác sĩ trả lời trong 24–48 giờ".

---

## Best practice 3: "Lưới an toàn" đóng vòng kết quả bất thường (Kaiser Permanente SureNet / Outpatient Safety Net Program)

**(a) Là gì, ai làm, từ khi nào.** Kaiser Permanente Southern California bắt đầu xử lý vấn đề chẩn đoán bị trễ hoặc bỏ sót từ năm 2006. Từ 2006 đến 2012, Outpatient Safety Net Program triển khai 24 chương trình giám sát điện tử (Danforth, eGEMs 2014). Đến năm 2018, KP có 54 chương trình theo dõi và cảnh báo trên toàn hệ thống. Brigham and Women's Hospital đã làm mô hình tương tự (Ambulatory Safety Net).

**(b) Cách hoạt động.** Phần mềm quét hồ sơ điện tử để tìm kết quả bất thường *chưa có bước tiếp theo*. Ví dụ: một kết quả creatinine bất thường mà sau 90 ngày chưa xét nghiệm lại, hoặc PSA cao mà sau 12 tuần chưa gặp bác sĩ tiết niệu. Khi phát hiện, một điều dưỡng điều phối vùng cùng bác sĩ liên hệ người bệnh, đặt sẵn chỉ định, rồi nhắc lại tối đa 4 lần. Chương trình được vận hành theo tinh thần không đổ lỗi.

**(c) Bằng chứng.**
- **Creatinine SureNet (2/2010–3/2014, Am J Med 2015):** chương trình tìm ra hơn 12.000 người có creatinine bất thường chưa được theo dõi. 65% (5.693/9.112) phản hồi lần liên hệ thứ nhất, 36,1% lần hai, 26,6% lần ba, 11,8% lần bốn. Tổng cộng 56,3% đã xét nghiệm lại, và 85% trong số đó làm sau lần liên hệ đầu. Người có tài khoản kp.org xét nghiệm lại nhiều hơn (64,2% so với 46,4%, P < 0,001).
- **Kết cục:** nhóm được chương trình phát hiện có tỷ lệ suy thận giai đoạn cuối cao hơn. Điều này xác nhận chương trình đã "bắt" đúng nhóm nguy cơ (Perm J 2017).
- **Theo Permanente Federation (2018):**
  - Chương trình PSA phát hiện 9.381 người có PSA cao chưa được bác sĩ tiết niệu đánh giá sau 12 tuần; 3.377 người đã được sinh thiết, khoảng một phần ba trong số đó có ung thư tiền liệt tuyến (số liệu này cũng được công bố trong nghiên cứu peer-reviewed trên Urology Practice, 2/2015).
  - Chương trình rung nhĩ ở Colorado: 31% bệnh nhân nguy cơ cao được dùng thuốc chống đông, 12% có cuộc trao đổi ra quyết định chung.
  - Đây là nguồn truyền thông của tổ chức, không phải bài peer-reviewed.
- **Giới hạn của bằng chứng:** chưa chứng minh được chương trình *cải thiện kết cục lâm sàng*. Chính bài Am J Med 2015 nêu một phần người bệnh có lẽ vẫn sẽ xét nghiệm lại dù không có chương trình.

**(d) Điều kiện thành công và giới hạn.** Theo KP, chương trình cần lãnh đạo ủng hộ, văn hóa chủ động, dữ liệu điện tử liên thông giữa xét nghiệm, đơn thuốc và lịch hẹn, và nhân sự điều phối riêng. Giới hạn: mô hình hợp với hệ thống tích hợp, nơi người bệnh "thuộc về" một tổ chức. Nó cũng cần chọn đúng ngưỡng để tránh quá tải; dùng phương trình CKD-EPI thay MDRD sẽ giảm 44% số người phải theo dõi.

**(e) Bài học cho MyVinmec.**
- Vinmec là hệ thống tư nhân có hồ sơ điện tử và app riêng, nên có điều kiện làm phiên bản thu nhỏ. Ví dụ: kết quả khám sức khỏe tổng quát có chỉ số bất thường mà bác sĩ đã ghi "tái khám sau 3 tháng" → MyVinmec hiển thị thẻ "Việc cần làm tiếp" có nút đặt lịch → nhắc lại qua thông báo đẩy hoặc Zalo OA → nếu sau N ngày vẫn chưa đặt lịch thì tổng đài viên gọi.
- Đây là phần **thủ tục**, nằm trọn trong ràng buộc đạo đức vì chỉ thực thi chỉ định đã có của bác sĩ.
- Khoảng trống hiện tại của MyVinmec (chưa có nhắc hoặc đặt tái khám chủ động) chính là chỗ cần lấp.
- Dữ liệu kp.org (64,2% so với 46,4%) cho thấy người dùng app có khả năng hoàn thành bước tiếp theo cao hơn. Tuy vậy, đây là tương quan, chưa chứng minh nhân quả.

**Đối chiếu với need statement.** *Bổ sung quan trọng:* need statement nói "biết chắc việc cần làm tiếp", nhưng cả 3 người được phỏng vấn đều không nêu chuyện quên tái khám, vì mẫu quá nhỏ. Bằng chứng của KP cho thấy "biết" chưa đủ: khoảng 44% không xét nghiệm lại ngay cả sau khi được liên hệ tới 4 lần. Vì vậy prototype nên đo việc *làm* bước tiếp theo, không chỉ việc *biết*. *Rủi ro nếu sao chép nguyên:* nhắc quá nhiều gây mệt mỏi. Ngoài ra, khác với KP, người bệnh Vinmec có thể làm bước tiếp theo ở nơi khác (ví dụ mua thuốc ở Long Châu, xét nghiệm ở cơ sở khác), nên hệ thống dễ nhắc "nhầm" người đã hoàn thành.

---

## Bảng so sánh tổng hợp

| Tiêu chí | BP1: Mở kết quả + ngữ cảnh + quyền chọn (Cures Act/Vanderbilt) | BP2: AI soạn nháp, bác sĩ duyệt (Stanford/UCSD/Duke) | BP3: Lưới an toàn đóng vòng (Kaiser SureNet) |
|---|---|---|---|
| Loại giải pháp | Chính sách + thiết kế cổng/app | AI tạo sinh + quy trình lâm sàng | Vận hành: giám sát dữ liệu + liên hệ chủ động |
| Bằng chứng | Mạnh, nhiều nghiên cứu quy mô lớn (8.139 người; >800.000 kết quả; HINTS quốc gia); chủ yếu quan sát và cải tiến chất lượng | Trung bình: thử nghiệm cải tiến chất lượng và khảo sát; chủ yếu đo phía bác sĩ; thiếu dữ liệu về mức hiểu của người bệnh | Trung bình: chuỗi quan sát lớn (>12.000 người); chưa chứng minh cải thiện kết cục |
| Phù hợp điểm đau (hiểu + việc làm tiếp khi nhận từ xa) | Trung bình: giúp xem và hiểu chung, không trả lời câu hỏi cá nhân | **Cao** với "vì sao, điều chỉnh sinh hoạt thế nào" | **Cao** với "việc làm tiếp"; thấp với "hiểu" |
| Rủi ro an toàn/đạo đức | Lo lắng khi gặp kết quả bất thường (16,5%); lộ dữ liệu qua SMS/Zalo | **Cao** nếu không duyệt (7,1% nháp có nguy cơ hại nặng); cần công khai việc dùng AI và xin đồng ý xử lý dữ liệu nhạy cảm | Thấp: chỉ thực thi chỉ định có sẵn; rủi ro nhắc thừa |
| Khả thi cho Vinmec (prototype 1 tuần → triển khai) | Cao: nội dung tĩnh tiếng Việt + cài đặt tùy chọn | Trung bình: cần bác sĩ duyệt, SLA, kiểm định LLM tiếng Việt, pháp lý | Cao–trung bình: cần quy tắc từ bác sĩ + tích hợp lịch hẹn + tổng đài |

---

## Kết luận

### Ba bài học chính

1. **Xem nhanh không đồng nghĩa với hiểu, và hiểu không đồng nghĩa với không cần hỏi.** Người bệnh muốn xem ngay, nhưng 34% không hiểu. Giải thích chung chung không làm giảm tin nhắn hỏi bác sĩ. Thiết kế phải giữ sẵn một đường hỏi người thật, thay vì cố loại bỏ nó.
2. **AI nên là người soạn nháp cho bác sĩ, không phải bác sĩ thay thế.** Mô hình "AI nháp → bác sĩ duyệt" vừa khớp ràng buộc đạo đức, vừa khớp sở thích của người bệnh với câu hỏi y khoa. AI chỉ nên trả lời trực tiếp phần thủ tục và hậu cần.
3. **"Việc cần làm tiếp" phải là một hành động có nút bấm và được theo dõi cho đến khi hoàn thành.** Mô hình SureNet cho thấy giá trị nằm ở việc đóng vòng: nhắc, đặt lịch sẵn, rồi người thật gọi nếu chưa làm.

### Đề xuất điều chỉnh need statement

> *Cách để người bệnh nhận kết quả từ xa (không gặp bác sĩ lúc nhận) **hiểu kết quả ở mức thông tin chung, biết chắc và thực hiện được bước tiếp theo bác sĩ đã chỉ định, và hỏi được bác sĩ về nguyên nhân/điều chỉnh sinh hoạt qua một kênh có thời hạn phản hồi rõ ràng**, thay vì phải tự tìm trên mạng hoặc quay lại viện chỉ để hỏi.*

Thay đổi chính là bỏ chỉ số "không phải gọi hỏi bác sĩ", vì bằng chứng cho thấy chỉ số này không đạt được và không nên tối ưu. Thay vào đó là các chỉ số: (i) người bệnh tự đánh giá mức hiểu, (ii) tỷ lệ hoàn thành bước tiếp theo, (iii) thời gian từ lúc hỏi đến lúc được bác sĩ trả lời.

### Hướng prototype gợi ý cho sprint 1 tuần

Màn hình "Kết quả của bạn" trên MyVinmec gồm bốn phần:
- **(1) Ngữ cảnh:** thẻ giải thích chỉ số bằng tiếng Việt, nội dung tĩnh do Vinmec duyệt, kèm dấu "bác sĩ đã xem/ký".
- **(2) Việc cần làm tiếp:** lấy từ chỉ định của bác sĩ, có nút đặt tái khám và nhắc qua Zalo OA hoặc thông báo đẩy. Tin nhắn không chứa nội dung kết quả.
- **(3) "Hỏi bác sĩ về kết quả này":** câu hỏi được AI soạn nháp cho bác sĩ duyệt, có cam kết thời gian phản hồi.
- **(4) Nút khẩn cấp:** gọi 115 hoặc cấp cứu Vinmec khi có triệu chứng báo động.

Có thể test bằng mô hình "Wizard-of-Oz", trong đó người thật đóng vai AI và bác sĩ, với 5–8 người dùng.

### Cần kiểm chứng thêm

- Tỷ lệ người bệnh Vinmec quên hoặc không tái khám sau kết quả bất thường. Hiện chưa có dữ liệu; cần số liệu nội bộ.
- Người dùng Việt Nam có muốn tùy chọn "bác sĩ gọi trước khi xem" không. Mẫu 3 người là quá nhỏ.
- Chất lượng LLM khi giải thích kết quả bằng tiếng Việt. Chưa tìm thấy nghiên cứu đã công bố.
- Phạm vi chính xác của "dữ liệu sức khỏe nhạy cảm" và yêu cầu về sự đồng ý theo Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP. Báo cáo này dựa trên nguồn tóm tắt thứ cấp.
- Việc MyVinmec hiện có hay không tính năng tư vấn từ xa hoặc hỏi đáp bác sĩ. Mô tả trên App Store có nhắc "kết nối với chuyên gia", mâu thuẫn với nghiên cứu bàn giấy của nhóm; cần kiểm tra trực tiếp trên app.
- Lỗi gửi SMS nhầm số (P3). Chưa được xác nhận, cần đối chiếu với vận hành.

## Lưu ý về giới hạn của bằng chứng

- Hầu hết bằng chứng đến từ Mỹ, trong các hệ thống dùng Epic, với người bệnh nói tiếng Anh. Hành vi và kỳ vọng của người bệnh Việt Nam có thể khác, nhất là thói quen muốn nghe bác sĩ trực tiếp và tin bản giấy.
- Nhiều số liệu là khảo sát tự báo cáo hoặc nghiên cứu cải tiến chất lượng một trung tâm, không phải thử nghiệm ngẫu nhiên.
- Số liệu SureNet ngoài bài Am J Med và Perm J lấy từ trang truyền thông của Permanente Federation.
- Khảo sát Columbia 2026 dùng kịch bản giả định và mẫu không xác suất.
- Không tìm thấy đánh giá hiệu quả đã công bố của NHS App về phần giải thích kết quả. Do đó mô hình này không được chọn làm best practice.

## Nguồn (truy cập 20/10/2026; tên bài chưa xác minh, Linh bổ sung khi kiểm tra)

**BP1 (Cures Act, Vanderbilt, OpenNotes)**
- [pulsetoday (NHS App, thẻ "Learn more about this test")](https://www.pulsetoday.co.uk/news/clinical-areas/diabetes-endocrinology/gps-asked-for-views-on-additional-test-results-information-for-patients-in-nhs-app)
- [butlersnow (information blocking rule)](https://www.butlersnow.com/news-and-events/the-information-blocking-rule-considerations-for-health-care-providers)
- [healthit.gov blog (immediate access to meaningful delivery)](https://healthit.gov/blog/health-data/from-immediate-access-to-meaningful-delivery-a-patient-centered-approach-to-delivering-test-results/)
- [healthit.gov FAQs](https://www.healthit.gov/faqs)
- [participatorymedicine (OpenNotes results)](https://participatorymedicine.org/epatients/2012/10/opennotes-the-results-are-in-great-news-for-patient-engagement.html)
- [kpwashingtonresearch (OpenNotes 2012)](https://www.kpwashingtonresearch.org/news-and-events/recent-news/news-2012/patients-feel-more-control-their-health-when-doctors-share-notes)
- [PMC12625389](https://pmc.ncbi.nlm.nih.gov/articles/PMC12625389/)
- [researchgate (Steitz 2021, immediate release)](https://www.researchgate.net/publication/355397642_Association_of_Immediate_Release_of_Test_Results_to_Patients_With_Implications_for_Clinical_Workflow)
- [Steitz 2023 (PDF, squarespace)](https://static1.squarespace.com/static/603ab50ab81d5532a0a4a42b/t/642471d1eb0dbf1cfd97e896/1680110033603/P_steitz_2023.pdf)
- [PubMed 40198070](https://pubmed.ncbi.nlm.nih.gov/40198070/)
- [JAMA Netw Open 2832287](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2832287)
- [JAMA Netw Open 2841447](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2841447)
- [JMIR 2026, doi 10.2196/94098](https://doi.org/10.2196/94098)

**Bối cảnh Việt Nam / MyVinmec**
- [vinmec.com, theo dõi kết quả xét nghiệm COVID-19 trên MyVinmec](https://www.vinmec.com/vie/bai-viet/theo-doi-ket-qua-xet-nghiem-covid-19-tai-vinmec-tren-ung-dung-myvinmec-vi)
- [vinmec.com, theo dõi kết quả khám sức khỏe tổng quát trên MyVinmec](https://www.vinmec.com/vie/bai-viet/huong-dan-theo-doi-ket-qua-kham-suc-khoe-tong-quat-tai-ung-dung-myvinmec-vi)
- [App Store VN, MyVinmec](https://apps.apple.com/vn/app/myvinmec/id1494832536?l=vi)
- [baodautu, Bộ Y tế yêu cầu hoàn tất hồ sơ bệnh án điện tử trước 30/9/2025](https://baodautu.vn/bo-y-te-yeu-cau-hoan-tat-trien-khai-ho-so-benh-an-dien-tu-truoc-3092025-d301515.html)
- [cantho.gov.vn, lộ trình triển khai hồ sơ bệnh án điện tử](https://pbgdpl.cantho.gov.vn/lo-trinh-trien-khai-ho-so-benh-an-dien-tu)
- [thuvienphapluat, Thông tư 13/2025/TT-BYT](https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Thong-tu-13-2025-TT-BYT-huong-dan-trien-khai-ho-so-benh-an-dien-tu-660113.aspx)
- [vietnamplus, hồ sơ bệnh án điện tử chậm nhất 30/9](https://www.vietnamplus.vn/bo-y-te-yeu-cau-benh-vien-trien-khai-ho-so-benh-an-dien-tu-cham-nhat-ngay-309-post1043485.vnp)
- [bocongan, Luật Bảo vệ dữ liệu cá nhân có hiệu lực 1/1/2026](https://bocongan.gov.vn/chinh-sach-phap-luat/bai-viet/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-thi-hanh-tu-ngay-01-01-2026-1767186124)
- [gvlawyers, Luật Bảo vệ dữ liệu cá nhân 2026 (nguồn thứ cấp)](https://gvlawyers.com.vn/luat-bao-ve-du-lieu-ca-nhan-2026/)
- [ungdungbb, MyVinmec trợ lý sức khỏe (nguồn bên thứ ba)](https://ungdungbb.com/myvinmec-tro-ly-suc-khoe-7405.html)

**BP2 (AI soạn nháp, bác sĩ duyệt)**
- [JAMIA Open ooaf159](https://academic.oup.com/jamiaopen/article/8/6/ooaf159/8341623)
- [JAMA Netw Open 2816494](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2816494)
- [hcinnovationgroup (ChatGPT-4 và gánh nặng ghi chép)](https://www.hcinnovationgroup.com/analytics-ai/article/55019458/study-chatgpt-4-use-helped-reduce-clinician-documentation-burnout)
- [Tai-Seale, poster UCSD (PDF)](https://sail.health/wp-content/uploads/2024/05/Poster-19-Tai-Seale.pdf)
- [JAMA Netw Open 2837938](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2837938)
- [PubMed 38506805](https://pubmed.ncbi.nlm.nih.gov/38506805/)
- [mendeley catalogue](https://www.mendeley.com/catalogue/711e7b0d-75b6-306c-a66c-0692c5fe3d91/)
- [doi 10.1001/jamanetworkopen.2024.6565](https://dx.doi.org/10.1001/jamanetworkopen.2024.6565)
- [PMC11829255](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11829255/)
- [mhaonline (AI messages from doctors)](https://www.mhaonline.com/blog/ai-messages-from-doctors)
- [medicaleconomics (bệnh nhân thà chờ bác sĩ duyệt)](https://www.medicaleconomics.com/view/patients-would-rather-wait-for-a-clinician-s-review-than-get-an-instant-ai-answer-to-medical-questions)
- [ovid, JAMA Netw Open 2024.3201 (AI draft replies)](https://www.ovid.com/journals/janop/fulltext/10.1001/jamanetworkopen.2024.3201~artificial-intelligencegenerated-draft-replies-to-patient)

**BP3 (Kaiser SureNet)**
- [permanente.org, Reducing diagnostic errors](https://permanente.org/reducing-diagnostic-errors/)
- [eGEMs, Outpatient Safety Net Program](https://up-j-gemgem.ubiquityjournal.website/articles/10.13063/2327-9214.1056)
- [PubMed 25848588](https://pubmed.ncbi.nlm.nih.gov/25848588/)
- [Am J Med 2015, creatinine SureNet](https://www.amjmed.com/article/S0002-9343(15)00536-7/fulltext)
- [PMC5283793 (Perm J 2017)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5283793/)
