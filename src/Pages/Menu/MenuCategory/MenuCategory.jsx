import { useQuery } from "@tanstack/react-query";
import MenuItem from "../../../Components/MenuItem";
import { Link } from "react-router-dom";


const MenuCategory = ({menuType}) => {


  const {isPending, isError, error,  data: menuData} = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch('/public/menu.json')
      
      return res.json();
      
    }
    
  })

 

  
  
  if(isPending){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div>
  }

  const menus = menuData.filter(item => item.category === `${menuType}`);
  console.log(menus);

  if(isError){
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="my-20">

<div className='grid grid-cols-2 gap-4 my-20 '>
          {
            menus.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
          }
        </div>

        <div className='flex justify-center my-20'>

         <button className=' pt-[20px] pb-[20px] pr-[30px] pl-[30px] text-[#1F2937] text-[20px] font-medium border-b-[3px] border-[#1F2937] rounded-[8px] transition-all duration-5500 ease-in-out hover:border-[3px]'>ORDER YOUR FAVORITE FOOD</button>
        </div>
      
    </div>
  );
};

export default MenuCategory;