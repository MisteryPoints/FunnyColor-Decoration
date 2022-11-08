import Image from "next/image"

const Products = () => {



    return (
        <div className="border rounded-lg p-2 hover:bg-pink-100 transition-color duration-700">
            <Image src='' alt={`Imagen Arreglo `} width={300} height={300}/>
            <div className="p-5 ">
                <h3>Arreglo</h3>
                <p className="mt-3 font-black text-4xl text-sky-400">$50</p>
                <button type="button" className="bg-pink-500 hover:bg-pink-700 text-white w-full mt-3 p-2 uppercase font-bold rounded-md hover:rounded-lg transition-all">Agregar</button>
            </div>
        </div>
    )
}

export default Products