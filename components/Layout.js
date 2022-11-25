import Link from 'next/link'
import Image from 'next/image'

const Layout = ({children}) => {
  return (
    <>
        <div className='hidden md:block absolute ml-10 mt-[-10px] w-[125px] h-[125px] cursor-pointer rounded-full object-contain z-0'> 
            <Link href='/'>
                <Image width={200} height={200} src='/FunnyColor.svg' alt='Logo' className='bg-white hover:bg-red-50 rounded-full w-[200%]' />
            </Link>
        </div>
        <div className='from-pink-400 to-pink-600 bg-gradient-to-br'> 
            <div className='text-white p-3 font-bold text-xl md:hidden text-center'>
                Funny Colors Decoration
            </div>
            <nav className='p-3 z-0 justify-end hidden md:flex '>  
                <Link href='/nosotros'>
                    <a className='text-white p-2 font-bold mx-5 text-xl hover:bg-blue-700 rounded-2xl transition duration-500'>Nosotros</a>
                </Link>
                <Link href='/contacto'>
                    <a className='text-white p-2 font-bold mx-5 text-xl hover:bg-blue-700 rounded-2xl transition duration-500'>Contacto</a>
                </Link>
                <Link href='/tienda'>
                    <a className='text-white p-2 font-bold mx-5 text-xl hover:bg-blue-700 rounded-2xl transition duration-500'>Tienda</a>
                </Link>
                <Link href='/carrito'>
                    <a className='text-white p-2 font-bold mx-5 text-xl hover:bg-blue-700 rounded-2xl transition duration-500'>Carrito</a>
                </Link> 
            </nav> 
        </div>
        {children} 
        <footer className='from-pink-400 to-pink-600 bg-gradient-to-br relative bottom-0 left-0 w-[100%] text-center text-white p-2 hidden md:block'>
            <p>Ⓡ FunnyColor Decorations. Todos los Derechos Reservados</p>
        </footer>
    </>
  )
}

export default Layout