import React from 'react'
import SecNav from '../SecNav/Sec.nav'
import BasicCard from '../PropItem/PropItem';
import PropItem from '../PropItem/PropItem';
const Properties = () => {

    const propItems = [

        {
            name: 'Nick\'s Antilia',
            date: '03/03/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },
        {
            name: 'Jhony\'s Villa',
            date: '03/03/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },
        {
            name: 'Lovely\'s Mansion',
            date: '01/03/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },
        {
            name: 'Ram\'s Home',
            date: '22/01/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },


    ]
    const rentItems = [

        {
            name: 'Nick\'s Antilia',
            date: '03/03/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },
        {
            name: 'Jhony\'s Villa',
            date: '03/03/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },
        {
            name: 'Lovely\'s Mansion',
            date: '01/03/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },
        {
            name: 'Ram\'s Home',
            date: '22/01/24',
            src: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Stock-Investment-Property-AdobeStock-270098759%20%281%29.jpeg"
        },


    ]


    return (
        <>
            <SecNav />
            <h1 className='text-[30px] font-bold ml-[43vw] mt-10 text-white'>Properties for sale</h1>
            <div className="flex gap-20 ml-[2vw] mt-[10px]">
                {propItems.map((item, index) => {
                    return (
                        <>

                            <PropItem name={item.name} date={item.date} src={item.src} />
                        </>

                    )

                })}
            </div>
            <h1 className='text-[30px] font-bold ml-[43vw] mt-10 text-white'>Properties for Rent</h1>
            <div className="flex gap-20 ml-[2vw] mt-[10px]">
                {rentItems.map((item, index) => {
                    return (
                        <>

                            <PropItem name={item.name} date={item.date} src={item.src} />
                        </>

                    )

                })}
            </div>

        </>
    )
}
export default Properties;