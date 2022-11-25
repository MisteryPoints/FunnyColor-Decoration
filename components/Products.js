import Image from "next/image"

const Products = ({ name, price, img }) => {



    return (
        <div className="border rounded-lg p-2 hover:p-5 hover:bg-pink-100 shadow-xl transition-all duration-700 justify-center text-center">
            <Image src={img} alt={`Imagen Arreglo `} width={300} height={400}/>
            <div className="p-3 ">
                <h3>{name}</h3>
                <p className="mt-2 font-black text-4xl text-sky-400">RD${price}</p>
                <button type="button" className="bg-pink-500 hover:bg-pink-700 text-white w-full mt-3 p-2 uppercase font-bold rounded-md hover:rounded-lg transition-all">Agregar</button>
            </div>
        </div>
    )
}

export default Products