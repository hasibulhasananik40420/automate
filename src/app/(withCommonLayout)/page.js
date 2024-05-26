import Container from "@/components/shared/Container/Container"
import Link from "next/link"

const HomePage = () => {
  return (
    <div>
       
      <Container>
        <h1 className="text-[30px] font-bold">Please click the Reister button to visit the Registation page and Trams & Conditions Pages</h1>

         <div className="flex justify-center gap-5 mt-10">

          <Link href='/register'>
          <button className="w-[150px] h-[48px] font-bold text-white rounded-md bg-blue-500">Register</button>
          </Link>
          
           <Link href='/conditions'>
          <button className="w-[170px] h-[48px] font-bold text-white rounded-md bg-blue-500">Service Agreements</button>
          </Link>

         </div>
      </Container>
    </div>
  )
}

export default HomePage