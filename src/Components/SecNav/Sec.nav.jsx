import React from 'react';
import logo from '../../assets/logo.png'
import { Button } from '@mui/material';
import { MdRocketLaunch } from "react-icons/md";
const SecNav = () => {
    return (
        <>
            <div className="flex flex-row">
                <img src={logo} className='h-[60px] ml-[20px] mt-[10px]' />
                <div >
                    <input placeholder='findProperty...' className='text-white rounded-[5px] border-[0.7px] mt-[25px] w-[25vw] ml-[30vw] p-1 text-center border-white placeholder:italic placeholder:text-slate-400 background-none bg-transparent' />
                </div>
                <div className='mt-6 ml-[12vw]'>
                    <Button variant="outlined" className='py-9' endIcon={<MdRocketLaunch />} >
                        Connect Wallet
                    </Button>
                </div>
            </div>

        </>
    );
}
export default SecNav;