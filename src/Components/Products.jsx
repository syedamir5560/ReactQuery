import React, { useEffect, useState } from 'react'
import Cards from './Cards'

function Products() {

    let [data, setData] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let [error, setError] = useState('')

    useEffect(() => {
        setError('')
        setIsLoading(true)
        fetch(`https://fakestoreapi.com/products`).then((response) => {
            if (!response.ok) throw new error('Un available')
            return response.json()
        }).then((val) => {
            setIsLoading(false)
            setData(val)
        }).catch((error) => {
            setError(error.message)
            setIsLoading(false)

        }).finally(() => setIsLoading(false))

    }, [])

    return (
      <>
      <h1 className='text-center mt-2'>All Products</h1>
        <div className='d-flex align-center justify-content-between flex-wrap p-4 mt-2'>
            
            {isLoading && <h1 className='text-center text-info'>Loading...</h1>}
            {
                !data ? <h1>{error}</h1> :
                data.map((ele=>
                <Cards key={ele.id} ele={ele} />))
            }
        </div>
      </>


    )
}

export default Products