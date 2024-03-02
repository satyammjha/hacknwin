
const PropItem = ({ name, date, src }) => {

    return (
        <>
            <div className='h-[40vh] align border-[0.1px] w-[20vw] bg-red rounded-[9px]'>
                <img src={src} className="h-[20vh] w-[20 vw] rounded-[3px]" />
                <h3 className="text-white font-bold">{name}</h3>
                <p className="text-white">Listed on - {date}</p>
                <div className="bg-red content-center">
                    <div className="bg-blue text-white cursor-pointer border w-[110px] p-[3px] rounded-[3px] z-10 text-center ml-[6vw] mt-[10px]">View Details</div>
                </div>
            </div>
        </>
    )
}

export default PropItem
