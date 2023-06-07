import React from 'react';
import girlImg from '../../../assets/home/girl.jpg';
import { BsBook } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import CountUp from 'react-countup';
const Facilities = () => {
    return (
        <div className='lg:w-[90%] w-[95%] mx-auto my-20'>
            <div className="md:flex gap-5">
                <div className="h-[450px]">
                    <img className='h-[450px] w-full' src={girlImg} alt="" />
                </div>
                <div className="px-7 py-6 shadow-xl">
                    <h1 className='text-xl ml-5 text-secondary font-bold'>TOP FACILITIES</h1>
                    <h1 className='inline-flex items-center gap-2 text-4xl ml-5 font-bold my-4'>Our Facilities <AiOutlineMinus /></h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img className='w-[150px] h-[150px] rounded-full' src="https://validthemes.live/themeforest/edukat/assets/img/thumb/1.jpg" alt="" />
                            <div className='text-3xl absolute -bottom-6 left-11  px-3 py-3 bg-secondary w-fit rounded-full text-white'><BsBook className='' /></div>
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-xl font-bold'>Books & Library</h1>
                            <p>Outweigh desirous sex overcame. Improved property reserved disposal do offering me for teaching.</p>
                        </div>
                    </div>
                    <div className="flex mt-12 items-center gap-4">
                        <div className="relative">
                            <img className='w-[150px] h-[150px] rounded-full' src="https://validthemes.live/themeforest/edukat/assets/img/thumb/1.jpg" alt="" />
                            <div className='text-3xl absolute -bottom-6 left-11  px-3 py-3 bg-secondary w-fit rounded-full text-white'><BsBook className='' /></div>
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-xl font-bold'>Books & Library</h1>
                            <p>Outweigh desirous sex overcame. Improved property reserved disposal do offering me for teaching.</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h1 className='text-secondary text-5xl text-center font-bold'>Our Achievements</h1>
                    </div>
                    <div className="mt-8 grid justify-items-center grid-cols-2">
                        <div className="text-center">
                            <h1 className='text-5xl font-bold'><CountUp duration={0.4} end={1800} />+</h1>
                            <p className='text-xl font-bold text-secondary mt-2'>Students</p>
                        </div>
                        <div className="">
                            <h1 className='text-5xl font-bold'><CountUp duration={0.4} end={450} />+</h1>
                            <p className='text-xl font-bold text-secondary mt-2'>Instructors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;