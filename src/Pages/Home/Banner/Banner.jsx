import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../../../assets/images/banner/img1.jpeg'
import img2 from '../../../assets/images/banner/img2.jpeg'
import img3 from '../../../assets/images/banner/img3.jpeg'
import img4 from '../../../assets/images/banner/img4.jpeg'
import img5 from '../../../assets/images/banner/img5.jpeg'
import img6 from '../../../assets/images/banner/img6.jpg'
import img7 from '../../../assets/images/banner/img7.jpg'
import img8 from '../../../assets/images/banner/img8.jpg'
import img9 from '../../../assets/images/banner/img9.jpg'
import { Link } from 'react-router-dom';




const Banner = () => {
    return (
        <div className='mb-8 opacity-90'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <div className=''>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img5} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img6} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img8} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <div className='absolute ml-5 bottom-52 pl-12'>
                            <p className='py-2 md:text-xl lg:text-4xl text-red-400'>Restaurant Management</p>
                            <p className='py-3 text-white text-sm '>Restaurant management involves overseeing the daily operations of <br /> a restaurant to ensure it runs efficiently and provides an <br /> excellent dining experience for customers. </p>
                            <Link to='/allfoods'><button className='btn btn-outline btn-success px-12 text-red-400'>Menu</button></Link>
                        </div>
                        <img className=' h-[550px] object-cover object-center w-full' src={img9} alt="" /></SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;