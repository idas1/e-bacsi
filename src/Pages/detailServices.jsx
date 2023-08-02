import { useMemo } from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import TopCollection from "../Components/TopCollection";

const data = [
  {
    thumbnail: "/images/sp1.jpg",
    title: "Gói Xét nghiệm Tổng quát (BV Bưu điện HCM)",
    define:
      "Xét nghiệm máu cơ bản có thể giúp phát hiện một số bệnh lý (ở giai đoạn tiền lâm sàng) trước khi các bệnh này biểu hiện triệu chứng ra bên ngoài. Thông qua xét nghiệm máu tổng quát, một số bệnh lý có thể được phòng ngừa để không xảy ra, hoặc điều trị ngay từ những giai đoạn rất sớm như bệnh đái tháo đường, thiếu máu, rối loạn chức năng gan- thận, rối loạn chuyển hóa, viêm gan B…",
    address:
      "Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh",
    description: [
      "Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh",
      "Người có tiền sử bệnh tiểu đường, rối loạn chuyển hóa, thường uống rượu bia…",
    ],
    benefit: [
      "1 lần trước xét nghiệm",
      "1 lần ngay sau khi có kết quả xét nghiệm",
      "1 lần sau xét nghiệm 7 ngày",
    ],
    step: [
      "Bệnh nhân lựa chọn xét nghiệm tổng quát (trên App)",
      "Thanh toán trên ứng dụng",
      "Bệnh nhân cập nhật lịch sử khám chữa bệnh (nếu có)",
      "Bệnh viện tiếp nhận hồ sơ khám",
      "Bác sĩ/ Nhân viên Y tế/ Call Center tư vấn online trước khám qua Video Call (nếu cần)",
      "Điều dưỡng/ Kỹ thuật viên thực hiện lấy mẫu tại nhà (lịch khám 1)",
      "Bệnh nhân nhận kết quả Xét nghiệm trên App",
      "Bác sĩ tư vấn trực tiếp hoặc qua Video Call (lịch khám 2)",
      "Bệnh nhân đánh giá dịch vụ",
      "Bệnh nhân tra cứu sau khám",
      "Lịch tư vấn online định kỳ sau khám theo gói 07 ngày (tùy chỉnh theo chỉ định của Bác sĩ)",
      "Bệnh nhân tái khám (nếu cần)",
      "Trường hợp khẩn cấp liên hệ tổng đài Bệnh viện",
    ],
    image: "/images/image1.jpg",
  },
  {
    thumbnail: "/images/sp2.jpg",
    title: "Gói kiểm tra sức khỏe hậu COVID-19 (BV Bưu điện HCM)",
    define:
      "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
    address:
      "Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh",
    description: [
      "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19. Sau khi nhiễm bệnh và đã khỏi, nhiều bệnh nhân Covid-19 lại gặp phải hội chứng hậu Covid-19 với các triệu chứng tái phát, kéo dài hoặc xuất hiện các vấn đề sức khỏe mới trong nhiều tuần hoặc nhiều tháng sau đó. Hội chứng Hậu COVID-19 (Long-term COVID-19 syndrome) chủ yếu tập trung vào các cơ quan quan trọng như Tim mạch, Thần kinh, Nội tiết, Hô hấp.",
      "Các triệu chứng phổ biến nhất là mệt mỏi, kiệt sức, khó thở, suy giảm khả năng chú ý và tập trung, rối loạn giấc ngủ và tâm lý... Chúng gây ảnh hưởng nghiêm trọng đến sức khỏe và cuộc sống của nhiều người.",
      "Kiểm tra sức khỏe hậu Covid-19 nhằm đánh giá chức năng và chẩn đoán bệnh lý liên quan đến phổi, gan, thận, tim mạch; kiểm tra tình trạng viêm và đông máu…, từ đó có phương pháp điều trị các di chứng Covid-19 hiện tại và dự phòng các nguy cơ có thể xảy ra trong tương lai.",
    ],
    benefit: [
      "1 lần trước xét nghiệm",
      "1 lần ngay sau khi có kết quả xét nghiệm",
      "1 lần ngay sau khi có kết quả xét nghiệm",
    ],
    step: [
      "Bệnh nhân lựa chọn các gói khám sức khỏe (trên App)",
      "Thanh toán trên ứng dụng",
      "Bệnh nhân cập nhật lịch sử khám chữa bệnh (nếu có)",
      "Bệnh viện tiếp nhận hồ sơ khám",
      "Bác sĩ/ Nhân viên Y tế/ Call Center tư vấn online trước khám qua Video Call (nếu cần)",
      "Bác sĩ/ Nhân viên Y tế/ Call Center tư vấn online trước khám qua Video Call (nếu cần)",
      "Bệnh nhân nhận kết quả Xét nghiệm trên App",
      "Bác sĩ tư vấn trực tiếp hoặc qua Video Call (lịch khám 2)",
      "Bệnh nhân đánh giá dịch vụ",
      "Bệnh nhân tra cứu sau khám",
      "Lịch tư vấn online định kỳ sau khám theo gói 07 ngày (tùy chỉnh theo chỉ định của Bác sĩ)",
      "Bệnh nhân tái khám (nếu cần)",
      "Trường hợp khẩn cấp liên hệ tổng đài Bệnh viện",
    ],
    image: "/images/image2.jpg",
  },
  {
    thumbnail: "/images/sp3.jpg",
    title: "Gói xét nghiệm kháng thể COVID-19 (BV Bưu điện HCM)",
    define:
      "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu, giúp Bác sĩ đánh giá nồng độ kháng thể và đưa ra lời khuyên về việc tiêm chủng bổ sung vắc-xin ngừa covid-19…",
    address:
      "Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh",
    description: [
      "Người đã tiêm vắc-xin ngừa Covid-19 (ít nhất sau tiêm 14 ngày)",
      "Người đã mắc Covid-19 và đã khỏi bệnh trên 6 tháng",
      "Người đã tiêm vắc-xin ngừa Covid-19 trên 12 tháng",
    ],
    benefit: [
      "1 lần trước xét nghiệm",
      "1 lần ngay sau khi có kết quả xét nghiệm",
      "1 lần ngay sau khi có kết quả xét nghiệm",
    ],
    step: [
      "Bệnh nhân lựa chọn các gói khám sức khỏe (trên App)",
      "Thanh toán trên ứng dụng",
      "Bệnh nhân cập nhật lịch sử khám chữa bệnh (nếu có)",
      "Bệnh viện tiếp nhận hồ sơ khám",
      "Bác sĩ/ Nhân viên Y tế/ Call Center tư vấn online trước khám qua Video Call (nếu cần)",
      "Bác sĩ/ Nhân viên Y tế/ Call Center tư vấn online trước khám qua Video Call (nếu cần)",
      "Bệnh nhân nhận kết quả Xét nghiệm trên App",
      "Bác sĩ tư vấn trực tiếp hoặc qua Video Call (lịch khám 2)",
      "Bệnh nhân đánh giá dịch vụ",
      "Bệnh nhân tra cứu sau khám",
      "Lịch tư vấn online định kỳ sau khám theo gói 07 ngày (tùy chỉnh theo chỉ định của Bác sĩ)",
      "Bệnh nhân tái khám (nếu cần)",
      "Trường hợp khẩn cấp liên hệ tổng đài Bệnh viện",
    ],
    image: "/images/image3.jpg",
  },
];
const DetailServices = () => {
  const { slug } = useParams();
  const dataShow = useMemo(() => {
    switch (slug) {
      case "goi-xet-nghiem-tong-quat":
        return data[0];
      case "goi-kham-suc-khoe-hau-covid-19":
        return data[1];
      case "goi-xet-nghiem-khang-the-covid-19":
        return data[2];
      default:
        return data[0];
    }
  }, [slug]);
  return (
    <div className='w-[1200px] m-auto my-10 text-lg'>
      <div className='grid-cols-2 grid gap-5 text-lg'>
        <img src={dataShow.thumbnail} alt='#error' />
        <div>
          <TopCollection label={dataShow.title} left labelClassName='text-xl' />
          <ul className='text-left space-y-2 '>
            <li>
              <span className='text-[#444444] font-bold'>Định nghĩa gói khám: </span>
              {dataShow.define}
            </li>

            <li>
              <span className='text-[#444444] font-bold'>Địa chỉ: </span>
              {dataShow.address}
            </li>
          </ul>
          <div className='text-left mt-5'>
            <img src='/images/btn-dang-ky-ngay.png' className='cursor-pointer' />
          </div>
        </div>
      </div>

      <h1 className='text-primary font-semibold text-2xl mt-10 text-left'>
        Thông tin chi tiết
      </h1>

      <div className='text-left my-10'>
        <p className='text-[#444444] font-semibold text-xl'>1. Mô tả</p>
        <ul className='text-left space-y-2 mt-5'>
          {dataShow.description.map((x, ind) => (
            <li key={ind}>- {x}</li>
          ))}
        </ul>
      </div>

      <div className='text-left my-10'>
        <p className='text-[#444444] font-semibold text-xl'>
          2. Quyền lợi của Bệnh nhân:
        </p>
        <ul className='text-left space-y-2 mt-5'>
          {dataShow.benefit.map((x, ind) => (
            <li key={ind}>- {x}</li>
          ))}
        </ul>
      </div>

      <div className='text-left my-10'>
        <p className='text-[#444444] font-semibold text-xl'>
          3. Quy trình các bước thực hiện:
        </p>
        <ul className='text-left space-y-2 mt-5'>
          {dataShow.step.map((x, ind) => (
            <li key={ind}>- {x}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className='text-[#444444] font-semibold text-xl text-left mb-5'>
          4. Chi tiết danh mục khám:
        </p>
        <img src={dataShow.image} alt='#error' />
      </div>
    </div>
  );
};

export default DetailServices;
