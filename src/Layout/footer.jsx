import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-6xl m-auto py-10 pb-20">
        <div className=" flex justify-between items-center gap-4 font-medium text-2xl">
          <div className="flex w-[390px] justify-start items-end gap-14  ">
            <img src="/images/logo_ft.png" alt="#logo" />
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white" : "text-second"
              }
              to="gioi-thieu"
            >
              Giới Thiệu
            </NavLink>
          </div>
          <div className="flex w-[390px] justify-center items-end h-[93px] gap-14">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white" : "text-second"
              }
              to="cac-goi-dich-vu-y-te"
            >
              Các Gói Dịch Vụ Y Tế
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white" : "text-second"
              }
              to="tin-tuc"
            >
              Tin Tức
            </NavLink>
          </div>
          <div className="flex w-[390px] justify-end items-end h-[93px] gap-14">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white" : "text-second"
              }
              to="dang-ky-tu-van"
            >
              Đăng ký nhận tư vấn
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16 text-white text-left">
          <div className="col-span-1">
            <p className="text-base font-bold mb-5 uppercase">
              Tổng Công Ty Truyền Thông (VNTP-MEDIA)
            </p>
            <span className="text-sm uppercase font-semibold">
              Giấy chứng nhận đăng ký doanh nghiệp số: 01Q6873188
              <br />
              Do sở kh&dt Hà Nội cấp ngày 12/06/2015
            </span>
          </div>
          <div className="col-span-1">
            <p className="text-base font-bold mb-5 uppercase">
              Điều khoản và chính sách bảo mật
            </p>
            <div className="flex flex-col gap-5 text-sm text-[#fffffb] mb-8">
              <p>Điều khoản hoạt động</p>
              <p>Quy định thanh toán</p>
              <p>Chính sách bảo mật thông tin</p>
            </div>
            <img src="/images/thong_bao_bo.png" alt="#Error" />
          </div>
          <div className="col-span-1 text-right">
            <p className="text-base font-bold mb-5 uppercase">
              Kết Nối Với Chúng Tôi
            </p>
            <div className="flex justify-end items-center h-[41px] gap-5 mb-10">
              <img src="/images/facebook.png" alt="#error" />
              <img src="/images/youtube.png" alt="#error" />
              <img src="/images/instagram.png" alt="#error" />
            </div>
            <div className="flex justify-end">
              <img src="/images/vntp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
