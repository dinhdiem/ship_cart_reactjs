import React from 'react'
import Banner from '../../assets/3.jpg'
import img1 from '../../assets/7.jpg'
import img2 from '../../assets/5.jpg'
import img3 from '../../assets/6.jpg'
import img4 from '../../assets/4.jpg'

import { BsTruck } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'

 
type Props = {}

const index = (props: Props) => {
  return (
    <div>
      <img src={Banner} className='w-full' alt="" />
      <div className='grid grid-cols-3 mx-28 gap-8 mt-5'>
        <div className='text-center relative bg-black border-r rounded-lg'>
          <BsTruck className='absolute top-6 left-[190px] text-white text-[30px]'/>
          <br />
          <h1 className='pt-12 pb-5 font-sans text-white'>Miễn phí vận chuyển</h1>
        </div>
        <div className='text-center relative bg-black border-r rounded-lg'>
          <BiSupport className='text-white absolute top-6 left-[190px] text-[30px]'/>
          <br />
          <h1 className='pt-12 pb-5 font-sans text-white'>Hỗ trợ 24/7</h1>
        </div>
        <div className='text-center relative bg-black border-r rounded-lg'>
          <MdPayment className='text-white absolute top-6 left-[190px] text-[30px]'/>
          <br />
          <h1 className='pt-12 pb-5 font-sans text-white'>Thanh toán an toàn</h1>
        </div>
      </div>
      <h1 className='text-3xl uppercase font-barlow font-bold pt-7 pb-5 border-b-2 mb-7 mx-[300px]'>Sản phẩm của chúng tôi</h1>
      <div className='grid grid-cols-4 gap-8 mx-28'>
        <div className='col-1'>
          <img src={img1} alt="" />
          <h1>Áo thun nam đen</h1>
          <span>199.000 VND</span>
        </div>
        <div className='col-1'>
          <img src={img2} alt="" />
          <h1>Áo thun nam xanh</h1>
          <span>199.000 VND</span>
        </div>
        <div className='col-1'>
          <img src={img3} alt="" />
          <h1>Áo thun nam xanh rêu</h1>
          <span>199.000 VND</span>
        </div>
        <div className='col-1'>
          <img src={img4} alt="" />
          <h1>Áo thun nam trắng</h1>
          <span>199.000 VND</span>
        </div>
        <div className='col-1'>
          <img src={img1} alt="" />
          <h1>Áo thun nam đen</h1>
          <span>199.000 VND</span>
        </div>
        <div className='col-1'>
          <img src={img2} alt="" />
          <h1>Áo thun nam xanh</h1>
          <span>199.000 VND</span>
        </div>
        <div className='col-1'>
          <img src={img3} alt="" />
          <h1>Áo thun nam xanh rêu</h1>
          <span>199.000 VND</span>
        </div>
        <div className='col-1'>
          <img src={img4} alt="" />
          <h1>Áo thun nam trắng</h1>
          <span>199.000 VND</span>
        </div>
      </div>
    </div>
  )
}

export default index