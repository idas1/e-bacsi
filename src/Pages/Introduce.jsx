import Session from "../Components/Session";
import TopCollection from "../Components/TopCollection";

const Introduce = () => {
  return (
    <div>
      <Session title="Giới Thiệu" />
      <div className="w-[1200px] m-auto">
        <TopCollection label="Lời Giới Thiệu VNTP eBacsi" left />
        <p className="text-justify text-[#444444] text-xl mb-5">
          VNPT eBacsi là ứng dụng chăm sóc sức khoẻ thông minh do Tổng công ty
          Truyền thông (VNPT-Media) thuộc Tập đoàn Bưu chính Viễn thông Việt Nam
          (VNPT) xây dựng. Là giải pháp theo dõi, chăm sóc sức khỏe cho mọi
          người dân trên đất nước Việt Nam. Mang đến trải nghiệm tối ưu cho
          người bệnh khi thực hiện cuộc gọi khám với bác sĩ từ xa, giúp bệnh
          nhân có thể kết nối với đội ngũ bác sỹ hàng đầu tại các bệnh viện trên
          cả nước một cách dễ dàng, mọi lúc, mọi nơi. Đây là một trong những ứng
          dụng đầu tiên khai thác thông tin tích hợp từ các cơ sở khám chữa
          bệnh, chuyên gia y tế, bác sĩ và cá nhân nhằm mục đích cung cấp dịch
          vụ chăm sóc sức khỏe tốt nhất cho người dân.
        </p>
        <img src="/images/banner1.png" alt="#error" />

        <p className="text-justify text-[#444444] text-xl my-5">
          Đi đầu trong việc chuyển đổi số dịch vụ chăm sóc sức khỏe, với đội ngũ
          nhân sự bao gồm những chuyên gia công nghệ tài năng, VNPT đã mang AI
          và IoT vào chăm sóc sức khoẻ, với mong muốn cải thiện năng suất và
          chất lượng sống cho mọi người dân Việt Nam. Với giải pháp công nghệ
          vượt trội, VNPT eBacsi mang đến dịch vụ chăm sóc sức khỏe tốt nhất,
          giúp cá nhân hóa và đơn giản hóa quá trình khám chữa bệnh cho bệnh
          nhân và bác sỹ; giúp tiết kiệm thời gian, chi phí khám bệnh; tạo thói
          quen chăm sóc sức khỏe thường xuyên cho mọi người dân với dịch vụ hỗ
          trợ trực tuyến 24/7.
        </p>
      </div>
    </div>
  );
};

export default Introduce;
