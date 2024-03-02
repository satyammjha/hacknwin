import React from 'react';
import Navbar from '../Navbar/Navbar';
import Content from '../Content';

const Home = () => {
    // const containerStyle = {
    //     // position: 'relative',
    //     // backgroundImage: 'url(https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/topics/real-estate-hospitality-and-construction/ey-looking-upward-at-glass-buildings.jpg)',
    //     backgroundSize: 'cover',
    //     height: '100vh',
    // };

    // const contentStyle = {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     backdropFilter: 'blur(10px)', // Apply blur effect to the content background
    //     zIndex: 1, // Ensure content is above the background
    // };
    return (
        <div  >
            <Navbar />
            <div >
                <Content />
            </div>
        </div>
    );
};

export default Home;