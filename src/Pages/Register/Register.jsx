import { Link, Navigate, useNavigate } from "react-router-dom";
import bg from '../../assets/others/authentication.png'
import image from '../../assets/others/authentication2.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const notify1 = () => toast("Password must have an uppercase letter, a lowercase letter, and a minimum length of 6 characters.");
  const notify2 = () => toast("Thanks for joining with us");
  const {createUser, updateUser} = useContext(AuthContext);


 
  const navigate  = useNavigate();


  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const isValidURL = (string) => {
      var res = string.match(/\bhttps?:\/\/\S+\.(jpeg|jpg|gif|png|bmp|svg|webp|tiff|ico)\b/i);
      return (res!== null)
    };
  

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

    if (!isValidPassword) {
      notify1();
      return;
    }
 

    console.log(name, email, password)

    createUser(email, password)
    .then(result => {
      
      
      updateUser(result.user, name, isValidURL(photo) ? photo :  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
      .then(() => {
        
        setTimeout(() => {
          notify2();
         form.reset();
          
        }, 500);

        setTimeout(() => {
          
          navigate(location?.state ? location.state : '/');
          window.location.reload();
        }, 2000);
        
        
      })
      .catch(error => {
        console.error(error)
      })
      
    })
    .catch(error => {
      console.error(error)
    })
   
    
  }
  return (
    <div className='h-screen w-full bg-cover bg-no-repeat flex items-center justify-center' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
     
      <div className='shadow-custom h-3/4 w-5/6 bg-cover bg-no-repeat flex items-center justify-center ' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        
        <div className='flex justify-around items-center w-full'>


        <div className='flex flex-col items-center  w-1/2'>
          
          
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="flex items-center justify-center">
              <h2 className="text-[#151515] text-[40px] font-bold">Sign Up</h2>
            </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input w-[450px] " required />
        </div>

          <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Image</span>
          </label>
          <input type="text" name='photo' placeholder="Enter photo URL" className="input w-[450px] " required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input w-[450px] " required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter your password" className="input w-[450px]" required />
        </div>

        

        <div className="form-control mt-6 mb-6">
          <input className='btn text-white bg-[#D1A054B3]' type="submit" value='Sign In' />
        </div>

        <div className='flex flex-col gap-4 items-center'>
        <Link to='/login'><p className='text-[#D1A054] text-[15px] font-medium'>Already Registered? <span className='font-bold'>Go to log in</span></p></Link>
        
          
        </div>

        
      </form>

        </div>

        <div className=''>
          <img src={image} alt="" />
        </div>


        </div>
     
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;