import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode} from 'swiper/modules';
import './Category.css'

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
  return (
    <div className='mx-auto container my-20'>

     
     <SectionTitle Heading={'ORDER ONLINE'} subHeading={'---From 11:00am to 10:00pm---'}></SectionTitle>

  
      <div className='my-20'>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} className='relative ' alt="" />
         <h3 className='absolute bottom-5 text-[32px] text-white italic'>SALAD</h3>
         </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className='absolute bottom-5 text-[32px] text-white italic'>PIZZA</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className='absolute bottom-5 text-[32px] text-white italic'>SOUP</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className='absolute bottom-5 text-[32px] text-white italic'>DESERT</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className='absolute bottom-5 text-[32px] text-white italic'>SALAD</h3>
          </SwiperSlide>
        
      </Swiper>
      </div>

      


   


    </div>
  );
};

export default Category;