import { useContext, useEffect } from 'react';
import bg from '../../assets/others/authentication.png'
import image from '../../assets/others/authentication2.png'
import { FaFacebookF, FaGoogle, FaGithub  } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import './Login.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {

  const {signIn, handleGoogleSignIn, logOut, handleGitHubSignIn, handleFacebookSignIn} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const notify = () => toast("Captcha Does Not Match");
  const notify2 = () => toast("Successfully Logged In");
  const notify3 = () => toast("Wrong Email Or Password");
  useEffect(() => {
    loadCaptchaEnginge(6);
  },[])

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    // console.log(email, password)
    let user_captcha_value = captcha

    if (validateCaptcha(user_captcha_value)==true) {
      signIn(email, password)
    .then(result => {
      console.log(result.user)
      form.reset();
       notify2();
      setTimeout(() => {
        navigate(location?.state ? location.state : '/');
      }, 1500)
   
    })
    .catch(error => {
      console.error(error);
      notify3();
    })

  }

  else {
      notify();
  }

    
    

    
  }

  


  const googleLogin = () => {
    handleGoogleSignIn()
  .then(result => {
    
    const user = result.user;
    navigate(location?.state ? location.state : '/')
  })
  .catch(error => {
    console.log('error', error.message)
  })
  }


  const githubLogin = () => {
    handleGitHubSignIn()
  .then(result => {
    
    const user = result.user;
    navigate(location?.state ? location.state : '/')
  })
  .catch(error => {
    console.log('error', error.message)
  })
  }

  const facebookLogin = () => {
    handleFacebookSignIn()
    .then(result => {
      const user = result.user;
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.error(error)
    })
  }


  

  return (
    <div className='h-screen w-full bg-cover bg-no-repeat flex items-center justify-center' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
     
     
      <div className='shadow-custom h-3/4 w-5/6 bg-cover bg-no-repeat flex items-center justify-center ' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        
        <div className='flex justify-around items-center w-full'>

        <div className=''>
          <img src={image} alt="" />
        </div>


        <div className='flex flex-col items-center w-1/2'>
          <h2 className="text-[#151515] text-[40px] font-bold">Login</h2>
          
          <form className="card-body" onSubmit={handleLogin}>
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

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name='captcha' placeholder="Type here" className="input w-[450px]" required />
        </div>

        <div className="form-control mt-6 mb-6">
          <input className='btn text-white bg-[#D1A054B3]' type="submit" value='Sign In' />
        </div>

        <div className='flex flex-col gap-4 items-center'>
        <Link to='/register'><p className='text-[#D1A054] text-[15px] font-medium'>New here? <span className='font-bold'>Create a New Account</span></p></Link>
        <p>Or sign in with</p>

        <div className='flex gap-4'>
        <a href='#' onClick={facebookLogin}><p className='w-[42px] h-[42px] flex items-center justify-center  border-[1px] border-black rounded-[50%]'><FaFacebookF /></p></a>
        <a href='#' onClick={googleLogin}><p className='w-[42px] h-[42px] flex items-center justify-center  border-[1px] border-black rounded-[50%]'><FaGoogle /></p></a>
        <a href='#' onClick={githubLogin}><p className='w-[42px] h-[42px] flex items-center justify-center border-[1px] border-black rounded-[50%]'><FaGithub /></p></a>
        </div>
          
        </div>

        
      </form>

        </div>


        </div>
     
      </div>
      <ToastContainer />

    </div>
  );
};

export default Login;