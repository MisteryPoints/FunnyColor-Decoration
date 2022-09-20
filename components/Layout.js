import Link from 'next/link'
import Image from 'next/image'

const Layout = ({children}) => {
  return (
    <>
        <div className='absolute ml-10 mt-[-25px] cursor-pointer rounded-full object-contain z-0'> 
            <Link href='/'>
                <Image width={200} height={200} src='/FunnyColor.svg' className='bg-white hover:bg-opacity-[92.5%] rounded-full h-auto w-full max-h-full' />
            </Link>
        </div>
        <nav className='from-pink-400 to-pink-600 bg-gradient-to-br flex justify-end p-10 z-0'>
            <div className='flex justify-between'> 
                <Link href='/nosotros'>
                    <a className='text-white p-2 rounded-md font-bold mx-5 text-2xl bg-none hover:bg-sky-500 hover:rounded-2xl transition duration-500'>Nosotros</a>
                </Link>
                <Link href='/contacto'>
                    <a className='text-white p-2 rounded-md font-bold mx-5 text-2xl bg-none hover:bg-sky-500 hover:rounded-2xl transition duration-500'>Contacto</a>
                </Link>
                <Link href='/tienda'>
                    <a className='text-white p-2 rounded-md font-bold mx-5 text-2xl bg-none hover:bg-sky-500 hover:rounded-2xl transition duration-300'>Tienda</a>
                </Link>
                <Link href='/carrito'>
                    <a className='text-white p-2 rounded-md font-bold mx-5 text-2xl bg-none hover:bg-sky-500 hover:rounded-2xl transition duration-300'>Carrito</a>
                </Link>
            </div>
        </nav> 
        {children} 
        <footer className='from-pink-400 to-pink-600 bg-gradient-to-br fixed bottom-0 left-0 w-[100%] text-center text-white p-2 z-0'>
            Ⓡ FunnyColor Decorations. Todos los Derechos Reservados
        </footer>
    </>
  )
}

export default Layout