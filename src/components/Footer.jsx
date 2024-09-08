import React from "react";
import Logo from "../assets/Delivr.png"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    
<div className="px-5 bg-slate-900 ">
   <div className="flex flex-wrap justify-between w-full gap-10 px-20 text-white border-b border-gray-600 md:px-40 py-14 ">
<div className="w-[140px] flex-shrink-0">
<img src={Logo} alt="" className="object-cover w-full "/>
</div>
     
     <div className="flex flex-wrap gap-40 py-10 ">
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Company</h3>
             <li className="text-lg text-gray-400 list-none">About</li>
             <li className="text-lg text-gray-400 list-none">Careers</li>
             <li className="text-lg text-gray-400 list-none">Team</li>
          
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Legal</h3>
             <li className="text-lg text-gray-400 list-none">Terms & Conditions</li>
             <li className="text-lg text-gray-400 list-none">Cookie Policy</li>
             <li className="text-lg text-gray-400 list-none">Privacy Policy</li>
             <li className="text-lg text-gray-400 list-none">Investor Relations</li>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">We Deliver To</h3>
             <li className="text-lg text-gray-400 list-none">Mumbai</li>
             <li className="text-lg text-gray-400 list-none">Pune</li>
             <li className="text-lg text-gray-400 list-none">Banglore</li>
             <li className="text-lg text-gray-400 list-none">Gurgaon</li>
             <li className="text-lg text-gray-400 list-none">Hyderabad</li>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Social Media</h3>
             <div className="flex gap-5">
                    <Link to={"https://github.com/jaydeep3704/Delivr"}><FaGithub className="w-6 h-6"/></Link>
                    <Link to={"https://www.linkedin.com/in/jaydeep-patil-6684691ba/"}> <FaLinkedin className="w-6 h-6"/></Link>
                    <Link>   <FaTwitter className="w-6 h-6"/></Link>
                   
                  
             </div>
        </div>
     </div>
   </div>
   <div className="py-10 text-center text-white text-md">
   ©2024 Delivr by Jaydeep Patil 
   </div>
   </div>
    
  );
};

export default Footer;
