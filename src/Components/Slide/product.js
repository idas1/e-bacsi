import { Link } from "react-router-dom";
import slugify from "slugify";
const ProductSlide = ({ product, button }) => {
  return (
    <div className='w-[390px] min-h-[430px] py-3 cursor-pointer rounded-lg shadow'>
      <img
        src={product.url}
        alt='#error'
        className='w-[390px] h-[230px] object-contain rounded-t-lg rounded-l-lg'
      />
      <div className='mt-3'>
        <p className='text-lg font-bold mb-4 text-primary'>{product.title}</p>
        <p className='text-[15px] leading-7 text-[#777777] text-left p-3'>
          {product.desc}
        </p>
      </div>
      {button ? (
        <Link
          to={`./${slugify(product.title.toLowerCase())}`}
          className='flex justify-center'
        >
          <img src='/images/btn-xem-them.png' alt='#error' />
        </Link>
      ) : null}
    </div>
  );
};

export default ProductSlide;
