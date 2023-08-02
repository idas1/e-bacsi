import { Link } from "react-router-dom";
import CustomSwiper from "../Components/Swiper";
import TopCollection from "../Components/TopCollection";
import ProductSlide from "../Components/Slide/product";
import Feature from "../Components/Feature";
import Action from "../Components/Action";

export const products = [
  {
    title: "Gói xét nghiệm tổng quát",
    url: "/images/sp1.jpg",
    desc: "Xét nghiệm máu cơ bản có thể giúp phát hiện một số bệnh lý (ở giai đoạn tiền lâm sàng) trước khi các bệnh này biểu hiện triệu chứng ra bên ngoài",
  },
  {
    title: "GÓI KHÁM SỨC KHỎE HẬU COVID-19",
    url: "/images/sp2.jpg",
    desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
  },
  {
    title: "GÓI XÉT NGHIỆM KHÁNG THỂ COVID-19",
    url: "/images/sp3.jpg",
    desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu , giúp Bác sĩ đánh giá nồng độ kháng thể ...",
  },
  {
    title: "Gói xét nghiệm tổng quát",
    url: "/images/sp1.jpg",
    desc: "Xét nghiệm máu cơ bản có thể giúp phát hiện một số bệnh lý (ở giai đoạn tiền lâm sàng) trước khi các bệnh này biểu hiện triệu chứng ra bên ngoài",
  },
  {
    title: "GÓI KHÁM SỨC KHỎE HẬU COVID-19",
    url: "/images/sp2.jpg",
    desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
  },
  {
    title: "GÓI XÉT NGHIỆM KHÁNG THỂ COVID-19",
    url: "/images/sp3.jpg",
    desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu , giúp Bác sĩ đánh giá nồng độ kháng thể ...",
  },
];

const banners = ["/images/banner1.png", "/images/banner2.jpg"];

const features = [
  {
    url: "images/feature_1.png",
    title: "Đăng ký khám online",
    desc: "Không cần xếp hàng chờ lấy số, khám đúng giờ theo lịch cá nhân",
  },
  {
    url: "images/feature_2.png",
    title: "Hỏi đáp bác sĩ",
    desc: "Gửi câu hỏi ngay trên ứng dụng và được các chuyên gia giải đáp, tư vấn trong thời gian sớm nhất",
  },
  {
    url: "images/feature_3.png",
    title: "Khám trực tuyến với bác sĩ mọi lúc, mọi nơi",
    desc: "Trao đổi, nhận tư vấn trực tuyến với bác sĩ online qua hình thức gọi video trong thời gian linh hoạt.",
  },
  {
    url: "images/feature_4.png",
    title: "Quản lý hồ sơ sức khỏe cho cả gia đình",
    desc: "Dễ dàng theo dõi các kết quả xét nghiệm, khám bệnh được cập nhật liên tục",
  },
  {
    url: "images/feature_5.png",
    title: "Tìm kiếm cơ sở y tế ngay gần bạn",
    desc: "Dễ dàng tìm kiếm cơ sở y tế như phòng khám, bệnh viện, nhà thuốc ở quanh khu vực bạn",
  },
  {
    url: "images/feature_5.png",
    title: "Cập nhật tin tức y tế chính thống",
    desc: "Cung cấp những tin tức y tế chính thống mới nhất, cập nhật theo thời sự",
  },
];

const actions = [
  {
    title: "Đảm bảo giãn cách xã hội - Tránh tiếp xúc gần",
    url: "/images/action_1.jpg",
  },
  {
    title: "Tiết kiệm thời gian di chuyển, chi phí chữa khám bệnh",
    url: "/images/action_2.jpg",
  },
  {
    title: "Khám đúng lịch hẹn không chờ đợi, thuận tiện sắp xếp thời gian",
    url: "/images/action_3.jpg",
  },
  {
    title: "Thăm khám dễ dàng qua cuộc gọi Video Call của bác sĩ bất kỳ ở đâu",
    url: "/images/action_4.jpg",
  },
  {
    title:
      "Được tư vấn hầu hết các chuyên khoa; chăm sóc sức khỏe cho cả gia đình ở mọi lứa tuổi",
    url: "/images/action_5.jpg",
  },
  {
    title: "Tối ưu hoá các quy trình hoạt động",
    url: "/images/action_6.jpg",
  },
];

const featureStyle = {
  backgroundImage: 'url("/images/feature_banner.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const planStyle = {
  backgroundImage: 'url("/images/banner_lichKham.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const plans = [
  { url: "plan_image_1.png" },
  { url: "plan_image_2.png" },
  { url: "plan_image_3.png" },
  { url: "plan_image_1.png" },
  { url: "plan_image_2.png" },
  { url: "plan_image_3.png" },
];

const doctors = [
  {
    url: "BS_NGUYEN_THI _XUAN_THU.jpg",
    name: "BSCKI Nguyễn Thị Xuân Thu",
    major: "Sản Phụ Khoa",
  },
  {
    url: "BS_NGUYEN_SON.jpg",
    name: "BSCKI Nguyễn Sơn",
    major: "Nội Khoa",
  },
  {
    url: "BS_HO_NGOC_CHAU.png",
    name: "BSCKI Hồ Ngọc Châu",
    major: "Lão Khoa",
  },
  {
    url: "BS_HO_THI_LAM.jpg",
    name: "BSCKI Hồ Thị Lam",
    major: "Chuẩn đoán hình ảnh",
  },
  {
    url: "BS_PHAM_TRUONG_AN.png",
    name: "BSCKI Phạm Trường An",
    major: "Da liễu",
  },
];

const mediaStyle = {
  backgroundImage: 'url("/images/Banner4.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Home = () => {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-center">
        <CustomSwiper
          data={banners}
          className="w-[1920px] h-[640px]"
          buttonApi={true}
          pagination={true}
        />
      </div>

      <div className="flex items-start justify-end max-w-6xl m-auto gap-60">
        <TopCollection label="SẢN PHẨM - DỊCH VỤ NỔI BẬT" className="pl-96" />
        <Link to="/" className="text-blue-second text-lg font-medium pt-10">
          Xem Thêm
        </Link>
      </div>

      <div>
        <CustomSwiper
          data={products}
          className="w-[1200px] h-[430px] flex m-auto"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidePerView={3}
          type={"product"}
        />
      </div>

      <div
        style={featureStyle}
        className="w-[1920px] h-[640px] feature m-auto mt-20"
      >
        <div className="max-w-6xl m-auto flex relative">
          <div className="h-[664px] w-[332px] absolute -top-14 -left-24">
            <img src="/images/phone.png" alt="#error" />
          </div>
          <div className="w-full text-center pl-[280px] ">
            <TopCollection
              label="VNTP eBacsi - Chăm sóc sức khỏe toàn diện mọi nơi mọi lúc"
              noLine
              labelClassName="text-white text-xl"
            />
            <div className="grid grid-cols-3 gap-5">
              {features.map((x) => (
                <Feature url={x.url} title={x.title} desc={x.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl m-auto">
        <TopCollection label="VNPT eBacsi - Giúp việc chăm sóc sức khỏe đơn giản và gần gũi" />
        <div className="grid grid-cols-3 gap-5">
          {actions.map((x) => (
            <Action title={x.title} url={x.url} className="col-span-1" />
          ))}
        </div>
      </div>

      <div
        style={planStyle}
        className="w-[1920px] h-[640px] feature m-auto mt-20"
      >
        <div className="max-w-6xl m-auto">
          <TopCollection
            label="Mạng lưới y tế VNPT eBacsi - Đặt lịch khám với"
            labelClassName="text-white font-[32px]"
          />
          <div className="grid grid-cols-3 justify-between items-center mb-8 gap-x-14">
            <div className="flex items-center flex-col text-white w-72 h-40 justify-center">
              <p className="text-6xl">36</p>
              <p className="text-lg">Bệnh Viện</p>
            </div>
            <div className="flex items-center flex-col text-white w-72 h-40 justify-center">
              <p className="text-6xl ">369</p>
              <p className="text-lg">Bác Sĩ </p>
            </div>
            <div className="flex items-center flex-col text-white w-72 h-40 justify-center">
              <p className="text-6xl ">986</p>
              <p className="text-lg">Nhân viện y tế luôn sẵn sàng hỗ trợ </p>
            </div>
          </div>
          <CustomSwiper
            data={plans}
            className="w-[1200px] h-[430px] flex m-auto"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidePerView={3}
            type={"plan"}
          />
        </div>
      </div>

      <div className="max-w-6xl m-auto grid-cols-3 grid py-10">
        <div className="col-span-1 text-left">
          <div className="pb-7 mb-0.5">
            <TopCollection label="Đội Ngũ Bác Sĩ Ưu Tú" />
          </div>
          <p className="text-[#777777] text-lg leading-7">
            Đội ngũ bác sĩ ưu tú với thâm niên chung bình 10+ năm kinh nghiệm,
            hiện đang công tác và làm việc tại các bệnh viện hàng đầu Việt Nam,
            thăm khám chuyên khoa đa dạng, tận tâm chăm sóc bạn và gia đình
          </p>
        </div>
        <div className="col-span-2">
          <CustomSwiper
            data={doctors}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidePerView={2}
            type={"doctors"}
          />
        </div>
      </div>

      <div
        style={mediaStyle}
        className="w-[1920px] min-h-screen feature m-auto my-20 relative pb-10"
      >
        <div className="relative h-96">
          <div className="w-[1200px] m-auto flex gap-20 absolute left-1/2 -translate-x-1/2 -top-20">
            <img src="/images/video.png" alt="#error" className="rounded-3xl" />
            <div className="flex flex-col ml-2  items-center">
              <img src="/images/QR_code.png" alt="#error" />
              <p className="text-white my-5 text-2xl font-bold">
                Tải Ứng Dụng Ngay
              </p>
              <img src="/images/chPlay.png" alt="#error" />
              <img src="/images/appStore.png" alt="#error" />
            </div>
          </div>
        </div>
        <div className="my-20 bg-white w-[1200px] m-auto rounded-3xl flex flex-col items-center p-10">
          <TopCollection label="Khách hàng nói gì về VNTP eBacsi" />
          <img
            src="/images/khachHang.jpg"
            alt="#error"
            className="w-52 h-52 object-cover rounded-full mt-5"
          />
          <p className="text-[#444444] text-lg font-bold mt-2">
            Bác Vũ Đình Hải (nghỉ hưu - Điều trị bệnh tiểu đường mãn tính)
          </p>
          <p className="text-[#444444] text-left mt-4">
            Trước đây, Bác từng bị tai biến nên được các bác sĩ yêu cầu phải đi
            khám đều đặn và kiểm tra các chỉ số sức khỏe hàng ngày. Mỗi lần tới
            bệnh viện lại nhờ phiền con cái đưa đi. Sau này con bác cài cho ứng
            dụng VNPT eBacsi trên điện thoại rồi hướng dẫn bác lưu các chỉ số.
            Khi nào có biến động bất thường thì được ứng dụng cảnh báo luôn, lại
            còn có thể video call với bác sĩ tư vấn nữa. Ngồi ngay ở nhà mà vẫn
            được khám bệnh nên bác thấy thuận tiện lắm.
          </p>
        </div>
      </div>

      <div className="w-[1200px] m-auto py-10">
        <TopCollection label="Tin Tức" />
        <div className="mt-5 grid grid-cols-2 gap-10">
          <div className="col-span-1">
            <img src="/images/food.png" alt="#error" />
            <p className="my-5 text-left font-bold text-primary text-lg">
              Những thói quen đặc biệt có hại cho gan mà người Việt làm hằng
              ngày
            </p>
            <p className="text-left">
              Gan là một trong bộ phận quan trọng của cơ thể, có trách nhiệm lọc
              thải độc tố. Dưới đây là một số thói quen thường gặp tưởng chừng
              vô hại nhưng có thể là 'sát thủ' tàn phá gan của chính mình.
            </p>
          </div>

          <div className="col-span-1 space-y-7">
            <div className="flex gap-5">
              <img
                src="/images/f1.jpg"
                alt="#error"
                className="w-40 h-40 object-cover"
              />
              <div>
                <p className="mb-5 text-left font-bold text-primary text-lg">
                  Nhiều người mắc hội chứng thị giác màn hình do ảnh hưởng của
                  COVID-1
                </p>
                <p className="text-left">
                  Một số biểu hiện đầu tiên của hội chứng thị giác màn hình đó
                  là nhìn mờ, khô mắt, nhức đầu, nhìn đôi, đau vai, cổ gáy. Nếu
                  để lâu, mắt sẽ có nguy cơ biến chuyển thành các bệnh lý nguy
                  hiểm.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                src="/images/f1.jpg"
                alt="#error"
                className="w-40 h-40 object-cover"
              />
              <div>
                <p className="mb-5 text-left font-bold text-primary text-lg">
                  Nhiều người mắc hội chứng thị giác màn hình do ảnh hưởng của
                  COVID-1
                </p>
                <p className="text-left">
                  Một số biểu hiện đầu tiên của hội chứng thị giác màn hình đó
                  là nhìn mờ, khô mắt, nhức đầu, nhìn đôi, đau vai, cổ gáy. Nếu
                  để lâu, mắt sẽ có nguy cơ biến chuyển thành các bệnh lý nguy
                  hiểm.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                src="/images/f1.jpg"
                alt="#error"
                className="w-40 h-40 object-cover"
              />
              <div>
                <p className="mb-5 text-left font-bold text-primary text-lg">
                  Nhiều người mắc hội chứng thị giác màn hình do ảnh hưởng của
                  COVID-1
                </p>
                <p className="text-left">
                  Một số biểu hiện đầu tiên của hội chứng thị giác màn hình đó
                  là nhìn mờ, khô mắt, nhức đầu, nhìn đôi, đau vai, cổ gáy. Nếu
                  để lâu, mắt sẽ có nguy cơ biến chuyển thành các bệnh lý nguy
                  hiểm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
