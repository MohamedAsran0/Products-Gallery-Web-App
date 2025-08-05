import { Link } from 'react-router-dom'
import homeVideo from '../../assets/videos/home-video.mp4'


export default function Home() {
    return (
        <>
            <div className='relative w-full h-screen overflow-hidden'>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 "
                >
                    <source src={homeVideo} />
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Route Store</h1>
                    <p className="text-lg md:text-xl mb-6">Your gateway to smart online shopping</p>
                    <Link to={'products'}>
                        <button className="bg-[#FF5C35] hover:bg-orange-600 text-white py-2 px-6 rounded-full shadow-lg">
                            Shop Now
                        </button>
                    </Link >
                </div>
            </div>
        </>
    )
}
