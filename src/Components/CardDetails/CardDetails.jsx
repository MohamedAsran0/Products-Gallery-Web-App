import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners';
import { IoCloseCircleSharp } from "react-icons/io5";


export default function CardDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);



    return (
        <>
            {product == null ? <div className='w-full h-screen flex justify-center items-center'>
                <BeatLoader color="#255CB5" />
            </div> :
                <div className='w-full h-screen bg-gray-700'>
                    <div className="container mx-auto p-6 h-full flex justify-center items-center">
                        <div className='relative bg-gray-200 m-7 p-10 rounded-3xl lg:grid'>
                            <Link to={'/products'} className='cursor-pointer'>
                                <IoCloseCircleSharp className='absolute right-5 top-5 text-4xl'/>
                            </Link>
                            <div className='lg:flex lg:justify-center lg:items-center'>
                                <img src={product.image} className='w-1/3 lg:w-1/2 mx-auto lg:col-start-1 lg:col-end-4' alt={product.title} />
                            </div>
                            <div className='lg:col-start-5'>
                                <div className='lg:flex lg:flex-col lg:justify-center h-full'>
                                    <h2 className='mt-7 text-blue-950 text-lg lg:text-2xl font-bold'>{product.title}</h2>
                                    <h3 className='mt-1  text-gray-900 lg:text-lg font-medium'><span className='text-blue-600 font-bold'>Category:</span> {product.category}</h3>
                                    <p className='mt-1 text-gray-900 lg:text-lg font-medium'><span className='text-blue-600 font-bold'>Description:</span> {product.description}</p>
                                    <h4 className='mt-1 text-green-800 lg:text-lg font-medium'><span className='text-blue-600 font-bold'>Price:</span> {product.price} $</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
