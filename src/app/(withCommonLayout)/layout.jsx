import Navbar from "@/components/shared/Navbar/Navbar"

const CommonLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default CommonLayout