

const MenuItem = ({item}) => {

  const {name, recipe, image, category, price} = item;
  return (
    <div className="mx-auto">




     <div className="flex items-center">
       <div className="flex gap-8">




        <div>

        <img className="w-[118px] h-[104px] rounded-tl-[0px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]" src={image} alt="" />

        </div>



        <div className="flex-col gap-2">

          <div className="flex justify-between items-center">
            <h2 className="text-[20px] text-[#151515]">{name} ------------------</h2>
            <p className="text-[#BB8506] text-[20px]">${price}</p>
          </div>
          <p className="w-[443px] text-[#737373] text-[16px] leading-[26px]">{recipe}</p>

        </div>



        
      </div>
     </div>




    </div>
  );
};

export default MenuItem;