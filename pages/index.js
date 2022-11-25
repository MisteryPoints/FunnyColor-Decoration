import Products from "../components/Products"

export default function Home() {
  return (
    <div className='bg-gray-100'> 
      <div div className='p-12'>  
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          <Products img='https://aida-rd.com/wp-content/uploads/2021/12/Arreglo-de-globo.jpeg' name='Arreglo Floral' price='5,500'/>
          <Products img='https://aida-rd.com/wp-content/uploads/2021/12/Arreglo-de-globo.jpeg' name='Arreglo de Bebida' price='7,000'/>
          <Products img='https://aida-rd.com/wp-content/uploads/2021/12/Arreglo-de-globo.jpeg' name='Arreglo de Anime' price='6,000'/>
          <Products img='https://aida-rd.com/wp-content/uploads/2021/12/Arreglo-de-globo.jpeg' name='Arreglo de Juegos' price='6,000'/>
          <Products img='https://aida-rd.com/wp-content/uploads/2021/12/Arreglo-de-globo.jpeg' name='Arreglo Juvenil' price='5,000'/>
          <Products img='https://aida-rd.com/wp-content/uploads/2021/12/Arreglo-de-globo.jpeg' name='Arreglo de Comida' price='5,100'/>
        </div>
      </div>
    </div>
  )
}
