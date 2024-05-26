"use client"

import Container from "@/components/shared/Container/Container"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import image from "@/assets/image 1.svg"
import facebook from "@/assets/facebook.svg"
import instagram from "@/assets/instagram.svg"
import youtube from "@/assets/youtube.svg"
import tiktok from "@/assets/tiktok.svg"
import CompleteProfile from "@/components/ui/CompleteProfile/CompleteProfile";

const RegisterPage = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isconfirmPasswordVisible, setIsconfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleconfirmPasswordVisibility = () => {
        setIsconfirmPasswordVisible(!isconfirmPasswordVisible);
      };


  return (
     <Container>
         <div>
            <CompleteProfile/>
         </div>
        <div className="bg-[#FFF] rounded-[12px] mb-4 md:mb-6 lg:mb-0">
        <div className=" md:flex">
            <div className=" lg:p-[50px] md:p-[30px] p-[16px]">
                <h1 className="text-[#242D35] md:text-[24px] text-[18px] font-semibold md:leading-9 leading-[27px]">Register your account</h1>
                 <p className="text-[#717D8A] md:text-[16px] text-[12px] font-normal md:leading-6 leading-[18px]">Enter your basic information to register</p>
                   

               
                  <form className="md:mt-[30px] mt-5 flex flex-col lg:w-[520px] md:w-[420px] w-full">
                      <div className="flex  md:gap-5 gap-[11px]">

                           {/* first name input */}
                          <div className="flex flex-col md:gap-3 gap-[10px]">
                           <label className="text-[#717D8A] md:text-[16px] text-[14px] font-medium md:leading-4 leading-[14px]" htmlFor="name">First Name</label>

                          <input type="name" name="name" className="lg:w-[250px] md:w-[200px] w-full h-[48px] rounded-[6px] placeholder-[#0C1116] text-[14px] font-medium leading-[21px] border-[1px] border-[#EAECEE] pl-4 focus:outline-none " placeholder="John" />

                          </div> 

                             {/* last name input */}
                          <div className="flex flex-col md:gap-3 gap-[10px]">
                           <label className="text-[#717D8A] md:text-[16px] text-[14px] font-medium md:leading-4 leading-[14px]" htmlFor="Last Name">Last Name</label>

                          <input type="name" name="name" className="lg:w-[250px] md:w-[200px] w-full h-[48px] rounded-[6px] placeholder-[#0C1116] text-[14px] font-medium leading-[21px] border-[1px] border-[#EAECEE] pl-4 focus:outline-none " placeholder="Doe" />

                          </div> 
                            
                          
                      </div>


                         {/* email input */}
                        <div className="flex flex-col gap-3 mt-5">
                           <label className="text-[#717D8A] md:text-[16px] text-[14px] font-medium md:leading-4 leading-[14px]" htmlFor="Email">Email</label>

                          <input type="email" name="email" className="w-full h-[48px] rounded-[6px] placeholder-[#0C1116] text-[14px] font-medium leading-[21px] border-[1px] border-[#EAECEE] pl-4 focus:outline-none " placeholder="programmer15@gmail.com" />

                          </div>
                          
                           {/* Password input */}
                        <div className="flex flex-col gap-3 relative mt-5">
                           <label className="text-[#717D8A] md:text-[16px] text-[14px] font-medium md:leading-4 leading-[14px]" htmlFor="Password">Password</label>

                          <input  type={isPasswordVisible ? 'text' : 'password'}  name="password" className="w-full h-[48px] rounded-[6px] placeholder-[#0C1116] text-[14px] font-medium leading-[21px] border-[1px] border-[#EAECEE] pl-4 focus:outline-none " />
                            
                          <div className="absolute top-[40px] right-4 cursor-pointer" onClick={togglePasswordVisibility}>
                         {isPasswordVisible ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                          </div>
                          </div>  
                          
                          
                          {/* Confirm Password input */}
                          <div className="flex flex-col gap-3 relative mt-5">
                           <label className="text-[#717D8A] md:text-[16px] text-[14px] font-medium md:leading-4 leading-[14px]" htmlFor="Confirm Password">Confirm Password</label>

                          <input  type={isconfirmPasswordVisible ? 'text' : 'password'}  name="confirmPassword" className="w-full h-[48px] rounded-[6px] placeholder-[#0C1116] text-[14px] font-medium leading-[21px] border-[1px] border-[#EAECEE] pl-4 focus:outline-none " />
                            
                          <div className="absolute top-[40px] right-4 cursor-pointer" onClick={toggleconfirmPasswordVisibility}>
                         {isconfirmPasswordVisible ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                          </div>
                          </div>

                           <Link href="/" className="text-[#2863C5] text-[16px] text-end font-normal leading-6 cursor-pointer">Forgot password?</Link>


                           <button className="h-[48px] w-full bg-[#000] rounded-[6px] text-white text-[14px] font-medium leading-[14px] md:mt-5 mt-4 hover:bg-gray-900 duration-300">Next</button>
                           {/* <span className="text-[#4F5B67] text-center texxt-[16px] font-normal leading-6 mt-[10px]">Already have an account? <Link href="/login">Sign In</Link></span> */}
                  </form>
                 




            </div>

             <div className="lg:w-[760px] lg:h-[572px] md:w-[505px] md:h-[380px] w-full h-full md:block hidden">
                 <Image className="w-full h-full object-contain" src={image} alt="register image"/>
             </div>
         </div>

            <div className="h-[1px] w-full bg-[#CECECE] mt-4 md:mt-0 block md:hidden"></div>

           {/* footer */}
           
             <div className="md:flex justify-between items-center md:pb-[30px] pb-4 pt-[15px] md:pt-0 lg:px-[50px] md:px-[30px] px-[16px]">
                <p className="text-[#4F5B67] md:text-[16px] text-[12px] font-normal md:leading-6 leading-[18px] text-left"> &copy; 2024 Credit Repair Automate. All right reserved.</p>
              
              
                <div className="flex items-center  md:gap-6 gap-[10px] mt-[10px] md:mt-0">
                 <div className="flex md:gap-4 gap-[10px] items-center justify-center">
                    <Image className="cursor-pointer" src={facebook} alt="facebook"/>
                    <Image className="cursor-pointer" src={instagram} alt="facebook"/>
                    <Image className="cursor-pointer" src={youtube} alt="facebook"/>
                    <Image className="cursor-pointer" src={tiktok} alt="facebook"/>
                 </div>
           

             <div className="">
                <p className="text-[#373F47] md:text-[16px] text-[12px] font-normal md:leading-6 leading-[18px] text-left">Terms of use</p>
             </div>
               <div className="">
                <p className="text-[#373F47] md:text-[16px] text-[12px] font-normal md:leading-6 leading-[18px] text-left">Privacy policy</p>
             </div>

             </div>
             </div>


        </div>
     </Container>
  )
}

export default RegisterPage