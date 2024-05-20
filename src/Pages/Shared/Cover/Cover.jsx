import React from 'react';

const Cover = ({img, title, subTitle, height}) => {
  return (
    <div className={`relative flex items-center justify-center ${height? 'h-[700px] bg-fixed' : 'h-[1000px]'} `} style={{backgroundImage: ` url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className='w-[70%]  h-[450px] flex flex-col items-center justify-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`}}>
        
        <h2 className='text-[#FFF] text-[88px] font-bold'>{title}</h2>
        <p className={`text-white ${height? 'text-[16px] w-[841px]' : 'text-[24px]'} font-semibold text-center`}>{subTitle}</p>
        
      </div>
    </div>
  );
};

export default Cover;