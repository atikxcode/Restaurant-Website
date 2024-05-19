import { FaFacebookF, FaInstagram, FaTwitter   } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col">


      <div className="flex ">


        <div className="bg-[#1F2937] text-white w-1/2 flex flex-col align-middle justify-center items-center pl-32 h-[400px] gap-2 text-[18px] font-medium">
          <h2 className="text-[32px] font-medium">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>


        <div className="bg-[#111827] text-white w-1/2 flex flex-col align-middle justify-center items-center pl-32 h-[400px] gap-4 text-[18px] font-medium">
        <h2 className="text-[32px] font-medium">Follow US</h2>
        <p>Join us on social media</p>
        <div className="flex gap-2">
          <p className="w-[35px]"><FaFacebookF /></p>
          <p className="w-[35px]"><FaInstagram /></p>
          <p className="w-[35px]"><FaTwitter /></p>
        </div>
        </div>


      </div>

      <div>
      <footer className="footer footer-center p-4 bg-[#151515]  text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
      </div>

    </div>
  );
};

export default Footer;