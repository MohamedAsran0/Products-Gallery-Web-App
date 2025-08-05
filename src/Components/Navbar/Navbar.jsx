import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'




export default function Navbar() {



  return (
    <>
      <div className='absolute  from-[#0047AB]  to-[#F4F6FA] bg-linear-150 w-1/3 md:w-1/5 m-5 rounded-b-full z-50 shadow-lg'>
        <Link to={''}>
          <img src={logo} className='w-1/2 mx-auto cursor-pointer' alt="logo" />
        </Link>
      </div>

    </>
  )
}
