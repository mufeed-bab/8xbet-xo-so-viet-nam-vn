import React, { useState } from "react";
import { Layers, Sun, Moon, Code2 } from "lucide-react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Header with Logo and Theme Toggle */}
        <div className="z-40 fixed top-0 right-0 left-0 p-4 flex justify-end items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="absolute left-4 flex items-center gap-2 text-gray-800 dark:text-white">
            <img
              src="https://8xbet-xo-so-viet-nam-vn.vercel.app/images/8xbet_light_.svg"
              className="header_logo header-logo"
              alt="8xbetlogo"
            />
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {isDark ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative  flex items-center justify-center pt-20">
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-gray-800 dark:text-white">
            <h1 className="text-5xl font-bold mb-6">
              Hành Trình Một Tấm Vé Xổ Số: Từ Quầy Bán Đến Giấc Mơ Triệu Phú
            </h1>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <img
              src="https://8xbet-xo-so-viet-nam-vn.vercel.app/images/hanh-trinh-mot-tam-ve-xo-so-tu-quay-ban-den-giac-mo-trieu-phu.webp"
              alt="hanh-trinh-mot-tam-ve-xo-so-tu-quay-ban-den-giac-mo-trieu-phu"
              className="w-[80%] m-auto object-cover rounded-xl mb-16"
            />

            <div className="space-y-12 text-gray-800 dark:text-gray-200">
              <div>
                <p className="text-lg mb-4">
                  <i>
                    Một tấm vé <strong>xổ số</strong> có thể chỉ là một mảnh
                    giấy vô tri vô giác, nhưng ẩn chứa trong đó lại là một giấc
                    mơ đổi đời đầy kỳ diệu và bất ngờ. Hành trình của tấm vé{" "}
                    <strong>xổ số</strong>, từ lúc được sản xuất cho đến khi tìm
                    thấy chủ nhân may mắn, là một câu chuyện đầy hứng khởi, gắn
                    liền với hy vọng, niềm tin và sự hồi hộp chờ đợi.
                  </i>
                </p>
                <p className="text-lg mb-4">
                  <i>
                    Ngay bây giờ, hãy cùng <strong>8xbet</strong> khám phá hành
                    trình kỳ diệu ấy qua bài viết dưới đây nhé.
                  </i>
                </p>
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                  Hành trình của một tấm vé xổ số từ quầy bán
                </h2>
                <img
                  src="https://8xbet-xo-so-viet-nam-vn.vercel.app/images/hanh-trinh-cua-mot-tam-ve-so-tu-quay-ban.webp"
                  alt="hanh-trinh-cua-mot-tam-ve-so-tu-quay-ban"
                  className="w-[80%] m-auto  object-cover rounded-xl my-10"
                />
                <p className="text-lg">
                  Anh em có tò mò liệu những tấm vé xổ số mà chúng ta mua mỗi
                  ngày được bắt nguồn từ đâu, sẽ trải qua những bước gì để có
                  mặt trên tay chúng ta không? Hãy 8xbet cùng tìm hiểu về hành
                  trình đầy thú vị này, từ khi vé xổ số ra đời cho đến khi người
                  chơi có cơ hội sở hữu những giải thưởng lớn nhé.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Sinh ra từ nhà máy in
                </h3>
                <p className="text-lg">
                  Mỗi tấm vé số bắt đầu hành trình của mình từ những nhà máy in
                  hiện đại. Tại đây, những con số sẽ được lựa chọn hoàn toàn
                  ngẫu nhiên, không bị can thiệp bởi bất kỳ yếu tố nào, đảm bảo
                  sự công bằng và minh bạch tuyệt đối. Quá trình sản xuất được
                  thực hiện trên các dây chuyền hiện đại, sử dụng giấy chất
                  lượng cao để đảm bảo tính bền vững và độ chính xác của từng
                  tấm vé.
                </p>
                <p className="text-lg">
                  Trong quá trình này, mọi bước đều được giám sát chặt chẽ, từ
                  việc chọn số cho đến in ấn, nhằm đảm bảo rằng mỗi vé số được
                  phát hành đều hoàn toàn minh bạch. Chính sự bảo mật này khiến
                  cho mỗi tấm vé đều mang đến một cơ hội ngang nhau cho tất cả
                  mọi người.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Phân phối rộng rãi
                </h3>
                <p className="text-lg">
                  Sau khi hoàn tất quá trình sản xuất, những tấm vé số được phân
                  phối qua một hệ thống rộng lớn gồm các đại lý, cửa hàng bán lẻ
                  và cả những điểm bán dạo. Mạng lưới phân phối này trải dài từ
                  các thành phố lớn cho đến những vùng sâu, vùng xa, giúp vé số
                  đến tay người chơi một cách nhanh chóng và thuận tiện nhất.
                  Những người bán vé, dù là cố định hay di động, đều đóng vai
                  trò thiết yếu trong việc kết nối tấm vé với người tiêu dùng,
                  đưa giấc mơ triệu phú đến gần hơn với mỗi người.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Gặp gỡ chủ nhân
                </h3>
                <p className="text-lg">
                  Khi một tấm vé số rời khỏi quầy bán, nó sẽ bắt đầu hành trình
                  gặp gỡ những người mua. Mỗi người sẽ có một lý do riêng biệt
                  để chọn những con số - có thể là ngày sinh, con số may mắn hay
                  đơn giản chỉ là một sự lựa chọn ngẫu nhiên. Nhưng dù lý do là
                  gì, tất cả những người cầm tấm vé ấy đều mang trong mình một
                  niềm hy vọng mãnh liệt, hy vọng rằng tấm vé này sẽ là bước
                  ngoặt, biến giấc mơ thay đổi cuộc đời thành hiện thực.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Khoảnh khắc chờ đợi hồi hộp
                </h3>
                <p className="text-lg">
                  Khi một tấm vé số trúng giải, cuộc đời của người sở hữu nó sẽ
                  thay đổi hoàn toàn. Đó có thể là một số tiền khổng lồ, đủ để
                  thay đổi cả cuộc sống hiện tại, giúp họ thực hiện những ước
                  mơ, hoài bão mà họ đã ấp ủ từ lâu.
                </p>
                <p className="text-lg">
                  Tuy nhiên, quy trình để đưa phần thưởng về tay người chiến
                  thắng cũng không hề đơn giản. Người may mắn sẽ phải hoàn thành
                  một loạt các thủ tục xác minh danh tính để đảm bảo tính chính
                  xác và minh bạch của giải thưởng.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Những câu chuyện cảm động trong thế giới xổ số
                </h3>
                <p className="text-lg">
                  Ngày quay số là thời khắc mà tất cả những người tham gia xổ số
                  đều hồi hộp mong đợi với hy vọng có thể trở thành chủ nhân của
                  những tấm vé may mắn được gọi tên. Kết quả xổ số được công bố
                  rộng rãi qua các phương tiện truyền thông, tạo ra những cung
                  bậc cảm xúc khác nhau, từ vui mừng, hạnh phúc đến thất vọng,
                  tiếc nuối.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                  Những câu chuyện cảm động trong thế giới xổ số
                </h2>
                <p className="text-lg mb-4">
                  Khi nhắc đến xổ số, không thể không kể đến những câu chuyện
                  cảm động về những người đã một bước đổi đời nhờ trúng giải
                  lớn. Có những người từng sống trong nghèo khó, nhưng khi vận
                  may mỉm cười, họ đã có cơ hội thay đổi cuộc sống, giúp đỡ gia
                  đình, cộng đồng và thực hiện những ước mơ tưởng chừng như xa
                  vời.
                </p>

                <p className="text-lg mb-4">
                  Những câu chuyện ấy không chỉ là minh chứng cho sự kỳ diệu của
                  xổ số, mà còn là nguồn cảm hứng mạnh mẽ để mỗi người chơi tin
                  tưởng vào cơ hội đổi đời, dù cuộc sống có khó khăn đến đâu.
                </p>
                <p className="text-lg mb-4">
                  Tuy nhiên, bên cạnh những câu chuyện đầy hy vọng, cũng có
                  những bài học cuộc sống sâu sắc từ những người trúng số nhưng
                  không biết cách quản lý tài sản của mình. Một số người đã để
                  số tiền ấy dần trượt khỏi tay vì tiêu xài hoang phí, dẫn đến
                  cảnh nợ nần.
                </p>
                <p className="text-lg mb-4">
                  Bởi thế mới nói, một tấm vé số có thể là cánh cửa mở ra giấc
                  mơ triệu phú, nhưng để biến giấc mơ đó thành hiện thực lâu
                  dài, người trúng số cần phải đưa ra những quyết định sáng suốt
                  và có kỷ luật trong việc sử dụng số tiền mình có.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                  Xổ số ngày nay: Bước ngoặt phát triển công nghệ
                </h2>
                <img
                  src="https://8xbet-xo-so-viet-nam-vn.vercel.app/images/xo-so-ngay-nay-buoc-ngoat-phat-trien-cua-cong-nghe.webp"
                  alt="xo-so-ngay-nay-buoc-ngoat-phat-trien-cua-cong-nghe"
                  className="w-[80%] m-auto  object-cover rounded-xl my-10"
                />
                <p className="text-lg mb-4">
                  Với sự phát triển của công nghệ và xu hướng số hóa, hình thức
                  mua vé xổ số đã trở nên tiện lợi và dễ dàng hơn rất nhiều.
                  Thay vì phải đi ra ngoài, giờ đây anh em có thể mua vé số trực
                  tuyến thông qua các trang web của các nhà cái uy tín, tận
                  hưởng những giây phút kịch tính đến từ xổ số mà không cần phải
                  ra khỏi nhà.
                </p>

                <p className="text-lg mb-4">
                  Những nhà cái trực tuyến, chẳng hạn như 8xbet không chỉ cung
                  cấp dịch vụ mua vé số, mà còn giúp người chơi theo dõi kết quả
                  xổ số, chọn số và thậm chí đặt cược một cách nhanh chóng chỉ
                  bằng vài cú chạm tay.
                </p>
                <p className="text-lg mb-4">
                  Điều này không chỉ mang đến sự tiện lợi tối đa, mà còn mở ra
                  cơ hội cho những ai không có thời gian hoặc điều kiện để ra
                  điểm bán vé truyền thống, vẫn có thể thử vận may và tham gia
                  vào những giải thưởng hấp dẫn.
                </p>
                <p className="text-lg mb-4">
                  <i>
                    Hành trình của một tấm vé số không chỉ là một quá trình từ
                    nhà máy in đến tay người mua mà còn là câu chuyện về hy
                    vọng, về những giấc mơ đổi đời. Mỗi tấm vé số mang theo một
                    câu chuyện riêng, một hành trình đầy cảm xúc và những bất
                    ngờ có thể thay đổi cả cuộc đời. Vậy anh em đã sẵn sàng để
                    tham gia vào hành trình này chưa?
                  </i>
                </p>

                <p className="text-lg mb-4">
                  <i>
                    {" "}
                    Tham gia 8xbet ngay để biến giấc mơ thành hiện thực và chinh
                    phục những đỉnh cao trong thế giới cá cược xổ số nhé.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-12 border-t bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              8xbet © 2025. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
