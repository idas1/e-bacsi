import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Header = () => {
  return (
    <div className="max-w-6xl m-auto flex justify-between items-center gap-4 font-medium text-2xl ">
      <div className="flex w-[390px] justify-start items-end gap-14  ">
        <img src="/images/logo.png" alt="#logo" />
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-second"
          }
          to="gioi-thieu"
        >
          Giới Thiệu
        </NavLink>
      </div>
      <div className="flex w-[390px] justify-center items-end h-[93px] gap-14">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-second"
          }
          to="cac-goi-dich-vu-y-te"
        >
          Các Gói Dịch Vụ Y Tế
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-second"
          }
          to="tin-tuc"
        >
          Tin Tức
        </NavLink>
      </div>
      <div className="flex w-[390px] justify-end items-end h-[93px] gap-14">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-second"
          }
          to="dang-ky-tu-van"
        >
          Đăng ký nhận tư vấn
        </NavLink>
        <HiOutlineShoppingCart className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
