import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { MdRocketLaunch } from "react-icons/md";
const Content = () => {
    return (
        <>
            <div className='mt-[13vh] ml-[6vw]'>
                <p className='text-[2.5rem] text-white leading-[3rem] ml-[2rem] font-bold'>Empower Your Property Pursuits: <br /><span className='text-sky-400'>Buy, Sell, Rent, Invest</span><br /> - Where Real EstateMeets Innovation!</p>

                <p className='text-[13px] w-[90vw] text-white mt-[20px] ml-[2rem]'>Revolutionizing the real estate experience. Whether you're looking to  <br />buy, sell, rent, or invest, we seamlessly blend innovation with real <br /> estate, providing a dynamic digital space for all your property needs. <br /> Explore cutting-edge features and personalized solutions, as we  <br /> redefine and elevate your journey in the world of real estate. Your ideal  <br /> property and investment opportunities await, where tradition meets  <br /> innovation!</p>


                <div className="ml-[2vw] mt-10">
                    <Button variant="outlined" endIcon={<MdRocketLaunch />}>
                        Launch
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Content
