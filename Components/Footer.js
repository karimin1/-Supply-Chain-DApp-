import React from "react";
import { Fot1, Fot2 } from "./index";

const Footer = () => {
  const footerNavs = [
    { href: "#", name: "terms" },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    ,
    {
      href: "#",
      name: "Abou us",
    },
  ];
  return (
  <footer className="pt-10">
  <div className='max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8'>
    <div className='justify-between sm:flex'>
      <div className='space-y-6'>
        <img src="https://floatui.com/_next/static/media/logo-dark.b0d0c4d1.svg" className='w-32' />
        <p className='max-w-md'>
          hf fgfg fghgfh  hgffghdfghgf
              </p>
      <ul className='flex  flex-wrap items-center gap-4 text-sm  sm:text-base'>
    {
      footerNavs.map((item,id)=>{
        <li className='text-gray-800 hover:text-gray-500 duration-150'>
          <a key={id} href={item.href}>{item.name}</a>
        </li>
      })
    }
      </ul>
    
      </div>
<div className='mt-6'>
  <p className='text-gray-7 font-semibold'>Get the app  </p>

  <div className='flex items-center gap-3 mt-3 sm:block'>
    <a href='#'>
      <Fot1/>
    </a>
    <a href='javascript:void()' className='mt-0 block:sm:mt-3'>
      <Fot2/>
    </a>
  </div>
    </div>
     </div>
     <div className='mt-1 py-10 border-mt md:text-center'>
      <p>2022 said elkarim All right  reserved</p>
     </div>
     </div>
 </footer>
)};

export default Footer;
