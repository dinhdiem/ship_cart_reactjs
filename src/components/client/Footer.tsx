import React from "react";
import { FaTwitter } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
 


type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-6 mx-5">
      <h1 className="font-barlow font-bold text-2xl">
        SHOPPING CART
      </h1>
      <ul className="flex justify-center space-x-5 py-5 border-b-2 border-black-200">
        <li><a href=""><FaTwitter size={'20px'} /></a></li>
        <li><a href=""><BsFacebook size={'20px'}/></a></li>
        <li><a href=""><AiFillYoutube size={'20px'}/></a></li>
        <li><a href=""><FiInstagram size={'20px'}/></a></li>
      </ul>
      <span className="pb-7 leading-[50px] text-slate-600">Copyright © 2022  |  Design by dinhbtph14679</span>
    </footer>
  );
};

export default Footer;
