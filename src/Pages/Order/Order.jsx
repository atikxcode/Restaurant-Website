import { useState } from 'react';
import img from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const Order = () => {


  const [tabIndex, setTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [filteredMenu, setFilteredMenu] = useState('');



  const {isPending, isError, error,  data: menus} = useQuery({
    queryKey: ['recomended'],
    queryFn: async () => {
      const res = await fetch('/public/menu.json')
      
      return res.json();
      
    }
    
  })

 

  
  
  if(isPending){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div>
  }

  const filteredMenuList = menus.filter(menu => menu.category.toLowerCase().includes(filteredMenu.toLowerCase()));
  // console.log(filteredMenu)


  if(isError){
    return <p>Error: {error.message}</p>
  }



  return (
    <div>
      <Helmet>
       <title>Restaurant | Shop</title> 
       </Helmet>
      <Cover img={img}  title={'OUR SHOP'} subTitle={'WOULD YOU LIKE TO TRY OUR DISH?'}></Cover>


{/* Tabs */}
      <div className='mx-auto container my-20'>

      


      <div className=" w-full">
        <div className="flex">
          <div onClick={() => {
            setActiveTab(1),
            setFilteredMenu('salad')
          }}
          className={`w-[22%] mb-10 md:w-[35%] lg:w-[40%] xl:w-1/2 py-4 xl:py-4 px-1 xl:px-6  text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-center cursor-pointer ${activeTab === 1 ? 'text-[#BB8506] border-b-[3px] font-bold border-b-[#BB8506]' : ''}`}
          >
            SALAD
          </div>

          <div  onClick={() => {
            setActiveTab(2),
            setFilteredMenu('pizza')
          }}
          className={`w-[22%] mb-10 md:w-[35%] lg:w-[40%] xl:w-1/2 py-4 xl:py-4 px-1 xl:px-6  text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-center cursor-pointer ${activeTab === 2 ? 'text-[#BB8506] border-b-[3px] font-bold border-b-[#BB8506]' : ''}`}
          >
            PIZZA
          </div>

          <div onClick={() => {
            setActiveTab(3),
            setFilteredMenu('soup')
          }}
          className={`w-[22%] mb-10 md:w-[35%] lg:w-[40%] xl:w-1/2 py-4 xl:py-4 px-1 xl:px-6  text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-center cursor-pointer ${activeTab === 3 ? 'text-[#BB8506] border-b-[3px] font-bold border-b-[#BB8506]' : ''}`}
          >
            SOUPS
          </div>

          <div onClick={() => {
            setActiveTab(4),
            setFilteredMenu('dessert')
          }}
          className={`w-[22%] mb-10 md:w-[35%] lg:w-[40%] xl:w-1/2 py-4 xl:py-4 px-1 xl:px-6  text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-center cursor-pointer ${activeTab === 4 ? 'text-[#BB8506] border-b-[3px] font-bold border-b-[#BB8506]' : ''}`}
          >
            DESSERT
          </div>

          <div onClick={() => {
            setActiveTab(5),
            setFilteredMenu('drinks')
          }}
          className={`w-[22%] mb-10 md:w-[35%] lg:w-[40%] xl:w-1/2 py-4 xl:py-4 px-1 xl:px-6  text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-center cursor-pointer ${activeTab === 5 ? 'text-[#BB8506] border-b-[3px] font-bold border-b-[#BB8506]' : ''}`}
          >
            DRINKS
          </div>


        </div>

        {activeTab === 1 && <div className={`mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10" >
          {
          filteredMenuList.map(menu => <div key={menu._id}>
             <div className="mx-auto hover:scale-110 duration-1000 transition-all bg-[#F3F3F3] w-[90%] xl:w-[450px]">
            <div className='h-[350px] relative'  style={{backgroundImage: `url(${menu?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className='absolute  right-5 top-6 bg-[#111827] p-4 text-white'>${menu?.price}</div>
            </div>
         <div className="flex flex-col justify-between">

         <div className="flex text-white gap-2 flex-col items-center p-8 ">
          <p className="text-[20px] text-[#151515] font-semibold mb-2 ">{menu?.name}</p>
          <p className="font-normal"><span className="text-[16px] text-[#737373]">{menu?.recipe}</span></p>
          
          </div>
          <div className="p-8 items-center justify-center flex">
          <button className="py-[20px] px-[30px] text-[#BB8506] bg-[#E8E8E8] border-b-[3px] border-b-[#BB8506] rounded-xl font-bold transition-all duration-700 hover:bg-[#111827]">ADD TO CART</button>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


       {activeTab === 2 && <div className={`mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10" >
          {
          filteredMenuList.map(menu => <div key={menu._id}>
             <div className="mx-auto hover:scale-110 duration-1000 transition-all bg-[#F3F3F3] w-[90%] xl:w-[450px]">
            <div className='h-[350px] relative'  style={{backgroundImage: `url(${menu?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className='absolute  right-5 top-6 bg-[#111827] p-4 text-white'>${menu?.price}</div>
            </div>
         <div className="flex flex-col justify-between">

         <div className="flex text-white gap-2 flex-col items-center p-8 ">
          <p className="text-[20px] text-[#151515] font-semibold mb-2 ">{menu?.name}</p>
          <p className="font-normal"><span className="text-[16px] text-[#737373]">{menu?.recipe}</span></p>
          
          </div>
          <div className="p-8 items-center justify-center flex">
          <button className="py-[20px] px-[30px] text-[#BB8506] bg-[#E8E8E8] border-b-[3px] border-b-[#BB8506] rounded-xl font-bold transition-all duration-700 hover:bg-[#111827]">ADD TO CART</button>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


        {activeTab === 3 && <div className={`mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10" >
          {
          filteredMenuList.map(menu => <div key={menu._id}>
             <div className="mx-auto hover:scale-110 duration-1000 transition-all bg-[#F3F3F3] w-[90%] xl:w-[450px]">
            <div className='h-[350px] relative'  style={{backgroundImage: `url(${menu?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className='absolute  right-5 top-6 bg-[#111827] p-4 text-white'>${menu?.price}</div>
            </div>
         <div className="flex flex-col justify-between">

         <div className="flex text-white gap-2 flex-col items-center p-8 ">
          <p className="text-[20px] text-[#151515] font-semibold mb-2 ">{menu?.name}</p>
          <p className="font-normal"><span className="text-[16px] text-[#737373]">{menu?.recipe}</span></p>
          
          </div>
          <div className="p-8 items-center justify-center flex">
          <button className="py-[20px] px-[30px] text-[#BB8506] bg-[#E8E8E8] border-b-[3px] border-b-[#BB8506] rounded-xl font-bold transition-all duration-700 hover:bg-[#111827]">ADD TO CART</button>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


        {activeTab === 4 && <div className={`mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10" >
          {
          filteredMenuList.map(menu => <div key={menu._id}>
             <div className="mx-auto hover:scale-110 duration-1000 transition-all bg-[#F3F3F3] w-[90%] xl:w-[450px]">
            <div className='h-[350px] relative'  style={{backgroundImage: `url(${menu?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className='absolute  right-5 top-6 bg-[#111827] p-4 text-white'>${menu?.price}</div>
            </div>
         <div className="flex flex-col justify-between">

         <div className="flex text-white gap-2 flex-col items-center p-8 ">
          <p className="text-[20px] text-[#151515] font-semibold mb-2 ">{menu?.name}</p>
          <p className="font-normal"><span className="text-[16px] text-[#737373]">{menu?.recipe}</span></p>
          
          </div>
          <div className="p-8 items-center justify-center flex">
          <button className="py-[20px] px-[30px] text-[#BB8506] bg-[#E8E8E8] border-b-[3px] border-b-[#BB8506] rounded-xl font-bold transition-all duration-700 hover:bg-[#111827]">ADD TO CART</button>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


        {activeTab === 5 && <div className={`mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10" >
          {
          filteredMenuList.map(menu => <div key={menu._id}>
             <div className="mx-auto hover:scale-110 duration-1000 transition-all bg-[#F3F3F3] w-[90%] xl:w-[450px]">
            <div className='h-[350px] relative'  style={{backgroundImage: `url(${menu?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className='absolute  right-5 top-6 bg-[#111827] p-4 text-white'>${menu?.price}</div>
            </div>
         <div className="flex flex-col justify-between">

         <div className="flex text-white gap-2 flex-col items-center p-8 ">
          <p className="text-[20px] text-[#151515] font-semibold mb-2 ">{menu?.name}</p>
          <p className="font-normal"><span className="text-[16px] text-[#737373]">{menu?.recipe}</span></p>
          
          </div>
          <div className="p-8 items-center justify-center flex">
          <button className="py-[20px] px-[30px] text-[#BB8506] bg-[#E8E8E8] border-b-[3px] border-b-[#BB8506] rounded-xl font-bold transition-all duration-700 hover:bg-[#111827]">ADD TO CART</button>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}
       


        </div>
      

      </div>


    </div>
  );
};

export default Order;