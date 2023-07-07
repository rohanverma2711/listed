import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { Resources } from '../../Resources'
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../firebase';

function Signup() {


    const [values,setValues] = useState({
        email:"",
        password:""
    })
    const [submitbuttondisable,setsubmitbuttondisable] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");

    const handleSubmisson=()=>{
        if(!values.email || !values.password)
        {
            setErrorMsg("Please fill all the fields");
            return;
        }
        setErrorMsg("");
        console.log(values);


        setsubmitbuttondisable(true)
        createUserWithEmailAndPassword(auth,values.email,values.password)
        .then((res)=>{
            setsubmitbuttondisable(false);
            console.log(res);
            navigate("/");
        })

        .catch((err)=> {setsubmitbuttondisable(false)
            setErrorMsg(err.message);
            console.log("Error",err)});

    }
const navigate = useNavigate();
    
    return (
        <div className='flex lg:flex-row flex-col'>
        <div className = "w-full lg:w-2/5 bg-black h-screen">
          <div className="flex justify-center items-center  ">
          <div className='text-white  text-7xl font-bold font-montse  py-60 lg:py-80'>Board.</div>
          </div>
    
    
        </div>
        <div className="w-full lg:w-3/5 bg-admin-whiteSmokeLight">
    
          <div className=' lg:mx-60 lg:my-24  mx-10 my-10 '>
    
            <p className='font-monste font-bold text-start text-4xl'>Sign Up</p>
            <p className='font-lato pt-2 font-normal  text-start text-base'>Sign up to your Account</p>
    
            <div className= "my-4 lg:my-7 flex flex-row">
            <button  class=" flex w-48 mr-6 opacity-75 h-7 bg-white text-greyL justify-center rounded-xlg px-3 py-1.5 text-xs font-normal "><img className='pr-2' src = {Resources.images.google}></img>Sign in with Google</button>
            <button  class=" flex ml-6 w-48 opacity-75  h-7 bg-white text-greyL justify-center rounded-xlg px-3 py-1.5 text-xs font-normal "><img className='pr-2' src = {Resources.images.apple}></img>Sign in with Apple</button>
    
        
            </div>
    
          <div className='bg-white p-8 rounded-2.5xl'>
    
        
            <div class="space-y-6">
          <div>
            <p  class="text-start  font-lato text-sm font-medium  text-gray-900">Email address</p>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class=" p-3 border-1 rounded-xlg block w-full h-10 bg-admin-whiteSmokeLight"
              
              onChange={event =>setValues((prev)=>({...prev,email:event.target.value}))}
              />
            </div>  
          </div>
    
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block font-lato text-sm font-medium leading-6 text-gray-900">Password</label>
             
            </div>
            <div class="my-2 ">
              <input id="password" name="password" type="password" autocomplete="current-password" required class=" p-3 border-1 rounded-xlg block w-full h-10 bg-admin-whiteSmokeLight placeholder:text-admin-whisper-1 "
              onChange={event =>setValues((prev)=>({...prev,password:event.target.value}))}
                />
            </div>
          </div>
          {/* <div class="text-sm">
                <p href="#" class=" font-normal text-base  text-lightBlue text-start">Forgot password?</p>
              </div> */}

              <b className='  text-coralRed font-normal text-sm'>{errorMsg}</b>
    
          <div>
            <button type="submit" class="flex font-montse w-full text-white  h-10 justify-center rounded-xlg bg-black px-3 py-1.5 text-base font-bold disabled:!bg-gray-300 " onClick={handleSubmisson} disabled={submitbuttondisable}>Sign Up</button>
          </div>
        </div>
        </div>
    
        <div className='mt-3  '> <span className='text-greyL opacity-75 font-normal text-base'>Already have an account? </span><span href="#" class="lato font-normal text-base  text-lightBlue text-start"><Link to="/">Click here </Link></span>
    
        </div>
        </div>
            
          </div>
      
    
        </div>
      )
}

export default Signup