import React, { useEffect, useState } from 'react';
import Food from './Food/Food';
import banner from '../../assets/images/allfood.gif'
import { Helmet } from 'react-helmet';

const AllFoods = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [count, setCount] = useState(0)

    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];
    

    useEffect(() => {
        fetch('https://restaurant-management-server-sigma.vercel.app/productsCount')
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
            })
    }, [])

    useEffect(() => {
        fetch(`https://restaurant-management-server-sigma.vercel.app/products?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [currentPage, itemsPerPage])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        fetch(`https://restaurant-management-server-sigma.vercel.app/search?searchTerm=${searchValue}`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          })
      };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    
    return (
        <div>
            <Helmet>
                <title>Restaurant Management || All Food Items </title>
            </Helmet>
            <div className="hero lg:min-h-[600px] opacity-95 mb-5" style={{ backgroundImage: `url(${banner})` }}></div>
            <div className="text-center py-11 ">
                <form onSubmit={handleSearch}>
                    <input className="py-1  pl-2 border-red-500  ring-1 outline-none lg:w-96" type="text" name="search" placeholder="Search here..." />
                    <button className="bg-[#FF444A] px-4 h-full py-1 rounded-r-md text-white">Search</button>
                </form>
            </div>
            <div className='grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3 w-5/6'>
                {products.length === 0 ? (
                    <h2 className="col-span-4 text-2xl text-center">
                        No Items found !
                    </h2>
                ) : (
                    products.map((product) => (
                        <Food key={product._id} product={product} />
                    ))
                )}
            </div>
            <div className='flex justify-center gap-5 flex-wrap py-5'>
                <button onClick={handlePrevPage} className='btn btn-success text-white'>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'btn bg-red-400 text-white' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button onClick={handleNextPage} className='btn btn-success text-white'>Next</button>
            </div>
        </div>
    );
};

export default AllFoods;