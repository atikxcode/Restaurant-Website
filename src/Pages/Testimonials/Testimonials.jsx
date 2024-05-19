import SectionTitle from '../../Components/SectionTitle';
import image from '../../assets/home/featured.jpg'

const Testimonials = () => {
  return (
    <div className='h-[847px] my-20 bg-fixed' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    
      <div className='flex flex-col  justify-center  h-full'>
        <SectionTitle Heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SectionTitle>
      
        <div className='flex my-20 items-center '>
          <div className='w-1/2 flex items-center justify-center '>
            <img className='h-[300px] w-[500px]' src={image} alt="" />
          </div>
          <div className='flex flex-col w-1/2 gap-8'>
            <div>
            <p className='w-[550px] text-[#fff] text-[20px] leading-[36px]'>March 20, 2023
          WHERE CAN I GET SOME?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            </div>
          <div>
          <button className=" pt-[20px] pb-[20px] pr-[30px] pl-[30px] text-[#FFF] text-[20px] font-medium border-b-[3px] border-[#FFF] rounded-[8px] transition-all hover:border-t-[3px] hover:border-l-[3px] hover:border-r-[3px]">Read More</button>
          </div>
          </div>
        </div>

      </div>


     

    </div>
  );
};

export default Testimonials;