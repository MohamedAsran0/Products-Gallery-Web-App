
export default function Card({pro}) {

    const {image,title, price} = pro;    

    return (
        <>
                <div className="flex flex-col justify-between p-7 text-center shadow-2xl h-full bg-gradient-to-br from-[#c5c5c5] to-[#c5c5c5] via-white dark:from-[#4a4a4a] dark:to-[#4a4a4a] dark:via-[#c2c2c2] rounded-2xl hover:-translate-1.5 transition-all duration-300">
                    <img src={image} className='w-full h-64' alt={title} />
                    <div>
                        <h2 className='mt-7 text-blue-950 text-lg font-bold'>{title}</h2>
                        <h3 className='mt-2.5 text-green-800 font-semibold'>{price} $</h3>
                    </div>
                </div>
        </>
    )
}
