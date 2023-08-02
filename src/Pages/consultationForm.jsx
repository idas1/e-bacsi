import Input from "../Components/Input";
import Session from "../Components/Session";

const ConsultationForm = () => {
  return (
    <div className='min-h-screen w-full py-10'>
      <div className='m-auto w-[1920px]'>
        <Session title='Đăng ký nhận thông tin tư vấn' />
      </div>

      <div className='w-[1200px] m-auto shadow-2xl p-10 mt-10'>
        <div className='text-center my-9 text-xl'>
          <p className='text-[#004b99] uppercase font-bold'>
            BẠN CẦN TÌM HIỂU THÊM THÔNG TIN VỀ SẢN PHẨM
          </p>
          <p className='text-[#7e858d] font-bold mt-1.5'>
            Vui lòng liên hệ hotline 19001544 hoặc gửi thông tin của bạn để đc hỗ trợ
          </p>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='grid grid-cols-3 col-span-3 gap-10 items-center'>
            <Input placeholder='Họ và tên (*)' className='col-span-2' />
            <div className='col-span-1 text-xl flex justify-center gap-10'>
              <p className='text-[#444444]'>Giới Tính</p>
              <div className='flex items-center gap-2 justify-center'>
                <input type='radio' id='html' name='fav_language' value='HTML' />
                <label for='html'>Nam</label>
              </div>
              <div className='flex items-center gap-2 justify-center'>
                <input type='radio' id='html' name='fav_language' value='HTML' />
                <label for='html'>Nữ</label>
              </div>
            </div>
          </div>
          <Input placeholder='Năm sinh' className='col-span-1' />
          <Input placeholder='Số điện thoại' className='col-span-1' type='number' />
          <div className='col-span-1'></div>
          <Input placeholder='Tỉnh thành phố' className='col-span-1' />
          <Input placeholder='Quận huyện' className='col-span-1' />
          <Input placeholder='Địa chỉ' className='col-span-1' />

          <Input placeholder='Nội Dung Tư Vấn' className='col-span-3' types='textarea' />
        </div>

        <div className='my-8'>
          <button className='font-bold cursor-pointer bg-[#f68b1f] text-xl text-white px-4 py-2 rounded-2xl'>
            Gửi Thông Tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
