

const SectionTitle = ({Heading, subHeading}) => {
  return (
    <div className="mx-auto container my-20">
      <div className='flex flex-col gap-20 items-center'>


     
<div className='flex flex-col text-center gap-4 w-1/2'>
<h2 className='text-[#D99904] text-[20px] italic'>{subHeading}</h2>
<div className='flex flex-col gap-4'>
<hr className='border-[4px] rounded-xl' />
<h2 className='text-[#151515] text-[40px] '>{Heading}</h2>
<hr className='border-[4px] rounded-xl' />
</div>

</div>
</div>

    </div>
  );
};

export default SectionTitle;