import { Button } from '@mui/material';
import React from 'react';
import '../../index.css'
import { MdRocketLaunch } from "react-icons/md";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        {
            name: "Home",
            link: '/'
        },
        {
            name: "About",
            link: '/about'
        },
        {
            name: "Features",
            link: '/features'
        },
        {
            name: "Contact",
            link: '/contact'
        },
    ];

    return (
        <div className='flex flex-row gap-[-10]'>
            <img src={logo} className='h-[60px] ml-[20px] mt-[10px]' />
            <div className="navLinks flex flex-row gap-10 mt-2 ml-[20vw]">
                {
                    navLinks.map((links, index) => {
                        return (
                            <p key={index} className='text-white cursor-pointer'>{links.name}</p>

                        )

                    })
                }
            </div>
            <div className='ml-[22vw] mt-2'>
                <Button variant="outlined" endIcon={<MdRocketLaunch />} >
                   <Link to='/properties'>Launch</Link>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;