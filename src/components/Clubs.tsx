import React from 'react';
import { useMainComponent } from '../context/mainComponent.context';
import { MainComponentContextType } from '../constants/page-constants';
import { Button } from 'flowbite-react';

export function Clubs() {
    const mainComponent = useMainComponent();
    return (
        <div className='bg-black p-5'>
            <h1 className='font-black_ops_one text-[#f9d112] text-center text-4xl'>CLUBS</h1>
            <div className='w-full px-10 relative flex flex-col divide-y-2 divide-[#f9d112]'>
                {[   
                    {
                        title: "DYNAMICS 101 MMA MADURAVOYAL",
                        instructor: "MR. NISHANTH",
                        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62185.57868800093!2d80.09239542167971!3d13.061198600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261fcae338c71%3A0x79984c292d0fba1c!2sDynamics%20101%20MMA!5e0!3m2!1sen!2sin!4v1738303053535!5m2!1sen!2sin" 
                    },
                    {
                        title: "DYNAMICS 101 MMA VALASARAVAKKAM",
                        instructor: "MR. VIGNESH",
                        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7287188078722!2d80.17302938376028!3d13.041090200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610022286523%3A0x15e6c05126d21a62!2sDynamics%20101%20MMA%20valasaravkkam!5e0!3m2!1sen!2sin!4v1713007468594!5m2!1sen!2sin"
                    },
                    
              
                ].map((club, index) => (
                    <div key={index} className="grid max-w-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-black_ops_one">
                                {club.title}
                            </h1>
                            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-red-700">
                                Classes handled by {club.instructor}
                            </p>
                            <div className="flex">
                                <Button 
                                    className='text-center mr-2 flex items-center text-white bg-[#f9d112]'
                                    size='xl' 
                                    color={'black'} 
                                    onClick={() => mainComponent?.setMainComponent(MainComponentContextType.SCHEDULES)}
                                    style={{ color: 'black' }}
                                >
                                    Schedule
                                </Button>
                                <a 
                                    href="#" 
                                    onClick={() => mainComponent?.setMainComponent(MainComponentContextType.CONTACT)} 
                                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-red-700"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                <iframe 
                                    src={club.mapSrc} 
                                    width="600" 
                                    height="450" 
                                    className='mt-3 sm:w-[450px] sm:h-[250px] w-[200px] h-[200px] rounded-xl border-0' 
                                    loading="lazy" 
                                    style={{ border: 0 }} 
                                    allowFullScreen 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
