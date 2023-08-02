const NewsComponent = ({ title, desc, image }) => {
  return (
    <div className='flex gap-10 my-10'>
      <img src={image} alt='#error' className='w-[389px] h-[292px]' />
      <div className='text-left'>
        <p className='text-xl font-bold text-primary'>{title}</p>
        <p className='text-lg'>{desc}</p>
      </div>
    </div>
  );
};

export default NewsComponent;
