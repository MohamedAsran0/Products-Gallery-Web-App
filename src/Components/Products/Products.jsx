
import axios from 'axios'
import Card from '../Card/Card'
import styles from './Products.module.css'
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlightRound } from "react-icons/md";



export default function Products() {

    let [allProducts, setAllProducts] = useState(null);
    let [products, setProducts] = useState(null);

    const [darkMode, setDarkMode] = useState(false);


    function toggleDarkMode() {
        setDarkMode(!darkMode);
        !darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }

    const getData = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setAllProducts(data);
            setProducts(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    function search(text) {
        let filtered = allProducts.filter((product) => {
            return product.title.toLowerCase().includes(text.toLowerCase());
        })

        setProducts(filtered);

    }

    function handleSort(option) {
        let sorted = [...products];

        if (option === "price-low") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (option === "price-high") {
            sorted.sort((a, b) => b.price - a.price);
        } else if (option === "name-az") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        }

        setProducts(sorted);
    }

    useEffect(() => {
        getData();
    }, []);





    return (
        <>
            {products == null ? <div className='w-full h-screen flex justify-center items-center'>
                <BeatLoader color="#255CB5" />
            </div> :
                <div className={`${darkMode ? styles['products-dark'] : styles['products-light']} w-full min-h-screen py-20`}>
                    <div className='absolute z-50 right-20 top-10 text-2xl bg-gray-600 p-3 rounded-full'>
                        <input type="checkbox" id='dark-mode' onChange={toggleDarkMode}  hidden/>

                        <label htmlFor="dark-mode">
                            {darkMode ? <MdLightMode className='text-amber-300 cursor-pointer' />
                                : <MdOutlineNightlightRound className='text-blue-300 cursor-pointer' />}
                        </label>
                    </div>
                    <div className='container mx-auto my-20 px-5'>
                        <div className='flex justify-end items-center mb-8'>
                            <div className="flex inset-shadow-sm inset-shadow-gray-500  items-center border w-60 md:w-80 focus-within:border-blue-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden dark:bg-gray-900 dark:text-white  ">
                                <input type="text" placeholder="Search for products" className="w-full h-full pl-4 outline-none placeholder-gray-500 dark:placeholder-white text-sm" onChange={(e) => { search(e.target.value) }} />
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={22} height={22} viewBox="0 0 30 30" fill="#6B7280">
                                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                                </svg>
                            </div>
                            <div className=' px-10'>
                                <select
                                    className="border py-1 rounded text-sm inset-shadow-sm inset-shadow-gray-500 bg-white dark:bg-gray-900 dark:text-white"
                                    onChange={(e) => handleSort(e.target.value)}
                                >
                                    <optgroup label="Sort By" >
                                        <option value="">Options</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="name-az">Name: A–Z</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product) => { return <Link to={`/products/${product.id}`} key={product.id}><Card pro={product} /></Link> })}
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
