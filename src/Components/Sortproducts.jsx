import { useQuery } from '@tanstack/react-query'
import React from 'react'

function Sortproducts() {

    let { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            return await fetch(`https://dummyjson.com/products/categories`)
                .then(res => res.json())
        }
    })



    let { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            let data = await fetch(`https://dummyjson.com/products`)
                .then(res => res.json())
            return products.data
        }
    })

    return (
        <div className='container d-flex align-items-center justify-content-between'>
            <input type='text' className='form-control w-50 my-3 ms-1' placeholder='Enter Category' />
            <select name="" id="" className='form-select w-25'>
                <option value="">Select Category</option>
                {
                    typeof categories == null ? (typeof categories === 'object' && categories.map((ele) => {
                        return <option key={ele} value={ele}>{ele}</option>
                    })) : null

                }
            </select>

        </div>
    )
}

export default Sortproducts