import Image from 'next/image'
import logo from '@/assets/MY-LOGO.png'
const Navbar = () => {
  return (
     <div className='bg-white h-[88px]'>
        
        <div className='max-w-[1440px] h-[88px] mx-auto flex justify-center items-center'>
      
           <Image className='w-[206px] h-[88px] object-contain' src={logo} alt='logo'/>
      
        </div>
    
     </div>
  )
}

export default Navbar