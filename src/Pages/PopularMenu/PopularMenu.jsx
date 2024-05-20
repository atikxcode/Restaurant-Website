import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Components/SectionTitle';
import image from '../../assets/home/chef-service.jpg'
import loader from '../../assets/others/loader3.gif'
import MenuItem from '../../Components/MenuItem';

const PopularMenu = () => {


  const {isPending, isError, error,  data: menus} = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch('/public/menu.json')
      
      return res.json();
      
    }
    
  })

 

  
  
  if(isPending){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div>
  }

  const popularItems = menus.filter(item => item.category === 'popular');
  // console.log(popularItems)

  if(isError){
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="mx-auto container my-20">

      <div className='my-10 relative flex items-center justify-center h-[572px] border-black' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='gap-4 absolute w-[90%] h-[60%] flex flex-col items-center justify-center bg-[#FFF]'>
          <h2 className='text-[#151515] text-[45px]'>Bistro Boss</h2>
          <p className='text-center w-[762px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
        
      </div>

   
     <SectionTitle  Heading={"FROM OUR MENU"} subHeading={'---Check it out---'}></SectionTitle>
    

        <div className='grid grid-cols-2 gap-4 my-20 '>
          {
            popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
          }
        </div>

        <div className='flex justify-center my-20'>
        <button className="py-[20px] px-[30px] text-black bg-inherit border-b-[3px] border-b-black rounded-xl font-bold transition-all duration-700 hover:bg-[#BB8506] hover:text-white" >VIEW FULL MENU</button>

        </div>

        <div className='bg-[#151515] text-white flex justify-center items-center h-[250px]'>
         <h2 className='text-[50px] font-semibold'>Call Us: +88 0192345678910</h2>   
        </div>


      
    </div>
  );
};

export default PopularMenu;