import { Link } from "react-router-dom";

const Title = ({ title, href }) => {
  return (
    <div className='w-full h-20 bg-primary my-10 flex items-center justify-center relative'>
      <p className='text-2xl text-white upper case font-bold text-center'>{title}</p>
      <Link to={href} className=' absolute right-10 text-white text-lg'>
        Xem Thêm
      </Link>
    </div>
  );
};

export default Title;
