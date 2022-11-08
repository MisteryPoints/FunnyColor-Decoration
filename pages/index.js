import Products from "../components/Products"

export default function Home() {
  return (
    <div className='bg-gray-100'> 
      <div div className='p-12'> 
        <h1 className=''>Pagina Inicial</h1>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </div>
  )
}
