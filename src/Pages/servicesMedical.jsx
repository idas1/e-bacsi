import Session from "../Components/Session";
import ProductSlide from "../Components/Slide/product";
import { products } from "./home";

const ServicesMedical = () => {
  return (
    <div className='min-h-screen w-full py-10'>
      <div className='m-auto w-[1920px]'>
        <Session title='Các gói dịch vụ y tế' />
      </div>

      <div className='w-[1200px] m-auto grid grid-cols-3 gap-10'>
        {Array.from({ length: 2 }).map((x) =>
          products.map((product) => <ProductSlide product={product} button />)
        )}
      </div>
    </div>
  );
};

export default ServicesMedical;
