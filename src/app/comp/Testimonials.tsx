import React from 'react'

const Testimonials = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-8 p-8 overflow-x-hidden'>
    <h1 className='text-4xl text-[#252B61]'>Testimonials</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        <div className='w-full bg-[#A3DAC2] rounded-3xl p-8'>
            <p className='text-[#252B61] text-xl'>
                I have been using HealthCarely for the past 3 years, and I have never been disappointed. The service is excellent, and the doctors are very professional.
            </p>
            <div className='flex items-center gap-4 mt-8'>
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="user" className='w-16 h-16 rounded-full' />
                <div>
                    <h1 className='text-[#252B61] font-bold'>John Doe</h1>
                    <p className='text-[#252B61]'>CEO, Company</p>
                </div>
            </div>
        </div>

        <div className='w-full bg-[#F0DA69] rounded-3xl p-8'>
            <p className='text-[#252B61] text-xl'>
                I have been using HealthCarely for the past 3 years, and I have never been disappointed. The service is excellent, and the doctors are very professional.
            </p>
            <div className='flex items-center gap-4 mt-8'>
                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user" className='w-16 h-16 rounded-full' />
                <div>
                    <h1 className='text-[#252B61] font-bold'>Jane Smith</h1>
                    <p className='text-[#252B61]'>CFO, Company</p>
                </div>
            </div>
        </div>

        <div className='w-full p-8  bg-[#E7C2D4] rounded-3xl'>
            <blockquote className='text-xl italic text-[#252B61]'>
                "The attention to detail and the level of service provided by HealthCarely is outstanding. They truly care about their patients."
            </blockquote>
            <div className='flex items-center gap-4 mt-8'>
                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="user" className='w-16 h-16 rounded-full' />
                <div>
                    <h1 className='text-[#252B61] font-bold'>Robert Brown</h1>
                    <p className='text-[#252B61]'>CTO, Company</p>
                </div>
            </div>
        </div>
    </div>
</div>



    </>
  )
}

export default Testimonials