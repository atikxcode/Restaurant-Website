import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";


const Recommends = () => {

  const {isPending, isError, error,  data: menus} = useQuery({
    queryKey: ['recomended'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/menu')
      
      return res.json();
      
    }
    
  })

 

  
  
  if(isPending){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div>
  }

  const recommended = menus.slice(2,5)
  // console.log(recommended)
  // console.log(popularItems)

  if(isError){
    return <p>Error: {error.message}</p>
  }


  return (
    <div className="mx-auto container">
      

   <div className="my-20">
   <SectionTitle Heading={'CHEF RECOMMENDS'} subHeading={'---Should Try---'}></SectionTitle>
   </div>


   <div className="mx-auto container  flex items-center justify-center  my-20">
   <div className="grid grid-cols-3 gap-8 ">
    {
      recommended.map(item => <div key={item._id} className="  w-auto">
      <figure className="">
        <img src={item.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="flex flex-col  p-5 align-middle items-center justify-center text-center bg-[#F3F3F3] h-[320px]">
        <h2 className="text-[#151515] mb-2 text-[24px] font-semibold">{item.name}</h2>
        <p className="mb-6 w-[345px] h-[50px]  text-[16px] leading-[26px]">{item.recipe}</p>
        <div className="flex items-center justify-center align-middle">
          <button className=" pt-[20px] pb-[20px] pr-[30px] pl-[30px] text-[#BB8506] text-[20px] font-medium border-b-[3px] border-[#BB8506] rounded-[8px] transition-all  hover:border-[0px] hover:bg-[#1F2937] ">ADD TO CART</button>
        </div>
      </div>
    </div>)
    }
   </div>
   </div>


    </div>
  );
};

export default Recommends;