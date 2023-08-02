import NewsComponent from "../Components/News";
import Session from "../Components/Session";
import Title from "../Components/Title";

const News = () => {
  const data = [
    {
      title: "Nhiều người mắc hội chứng thị giác màn hình do ảnh hưởng của COVID-1",
      desc: "Một số biểu hiện đầu tiên của hội chứng thị giác màn hình đó là nhìn mờ, khô mắt, nhức đầu, nhìn đôi, đau vai, cổ gáy. Nếu để lâu, mắt sẽ có nguy cơ biến chuyển thành các bệnh lý nguy hiểm.",
      image: "./images/news_1.jpg",
    },
    {
      title: "Dấu hiệu trên da cảnh báo thận bất ổn",
      desc: "Da khô ngứa, có màu vàng hoặc sạm đen, mắt sưng húp là các triệu chứng của bệnh thận.",
      image: "./images/news_2.jpg",
    },
    {
      title:
        "Singapore phát hiện các ca mắc biến thể BA.4 và BA.5 đầu tiên trong cộng đồng",
      desc: "Bộ Y tế Singapore (MOH) ngày 15/5 thông báo đã phát hiện 3 trường hợp nhiễm dòng phụ của biến thể Omicron trong cộng đồng, trong đó có 2 trường hợp nhiễm biến thể BA.4 và 1 trường hợp biến thể BA.5. Đây là 2 loại biến thể phụ của virus SARS-CoV-2 khiến số ca mắc mới COVID-19 gia tăng trên toàn thế giới.",
      image: "./images/news_3.jpg",
    },
  ];
  return (
    <div>
      <div className='w-[1920px] m-auto'>
        <Session title='Tin Tức' />
      </div>
      <div className='w-[1200px] m-auto'>
        <div className='my-10'>
          <Title title='Kiến thức y tế' href='./kien-thuc-y-te' />
          {data.map((x, ind) => (
            <NewsComponent title={x.title} desc={x.desc} image={x.image} />
          ))}
        </div>
        <div className='my-10'>
          <Title title='Kiến thức y tế' href='./kien-thuc-y-te' />
          {data.map((x, ind) => (
            <NewsComponent title={x.title} desc={x.desc} image={x.image} />
          ))}
        </div>
        <div className='my-10'>
          <Title title='Kiến thức y tế' href='./kien-thuc-y-te' />
          {data.map((x, ind) => (
            <NewsComponent title={x.title} desc={x.desc} image={x.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
