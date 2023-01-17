import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../modules/reducer/productReducer';
import { productData, isProductsLoading, totalPage } from '../../modules/selectors/product';

const ViewProducts = () => {
    const dispatch = useDispatch();
    const allProductData = useSelector(productData);
    const totalPages = useSelector(totalPage);
    const isLoading = useSelector(isProductsLoading);
    const [currPage, setCurrPage] = useState(1);
    useEffect(() => {
        dispatch(getAllProduct({ pageNo: currPage }))
    }, [currPage])
    const nextPage = () => {
        setCurrPage(currPage + 1)
    }
    const prePage = () => {
        if (currPage > 1) {
            setCurrPage(currPage - 1)
        }
    }
    return (
        <>
            <div>
                <div className='flex justify-center my-2'><button className='flex p-1 px-2 my-2 text-white bg-blue-500 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>+ Add Product</button></div>
            </div>
            <div className='flex justify-center my-5'>
                <table className='table-auto border-collapes border border-slate-500'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600'>Sr Number</th>
                            <th className='border border-slate-600'>Product Image</th>
                            <th className='border border-slate-600'>Product Name</th>
                            <th className='border border-slate-600'>Price</th>
                            <th className='border border-slate-600'>Producr Description</th>
                            <th className='border border-slate-600'>Edit</th>
                            <th className='border border-slate-600'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? <h1>Loading...</h1> : allProductData.map((value, index) => (
                            <tr>
                                <td className='border border-slate-600'>{index + 1 + ((currPage - 1) * 10)}</td>
                                <td className='border border-slate-600'><img className='h-8' src={value.productImage} alt="Product Image" /></td>
                                <td className='border border-slate-600'>{value.productName}</td>
                                <td className='border border-slate-600'>{value.productPrice}</td>
                                <td className='border border-slate-600'>{value.productDescription}</td>
                                <td className='border border-slate-600'><button className='flex p-1 px-2 text-white m-1 bg-blue-500 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>Edit</button></td>
                                <td className='border border-slate-600'><button className='flex p-1 px-2 text-white m-1 bg-blue-500 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>Delete</button></td>
                            </tr>))}
                    </tbody>

                </table>
            </div>


            {/* <button disabled={true} onClick={prePage}>Previous</button>{currPage}
            <button onClick={nextPage}>Next</button> */}

            <Button disabled={currPage <= 1} onClick={prePage} variant="contained">Previous</Button>{currPage}
            <Button onClick={nextPage} disabled={currPage <= totalPages} variant="contained">Next</Button>
            {/* onClick={()=>nextPage()} */}

        </>
    )
}

export default ViewProducts