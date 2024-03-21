import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { keepPreviousData, useQuery } from '@tanstack/react-query'

function Sortproducts() {

    let [limit] = useState('8')
    let [skip, setSkip] = useState(0)

    let { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            return await fetch(`https://dummyjson.com/products/categories`).then(res => res.json())
        }
    })

    let { data: products } = useQuery({
        queryKey: ['products', limit, skip],
        queryFn: async () => {
            let data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`).then(res => res.json())
            return data.products

        },
        placeholderData: keepPreviousData

    })

    let handleMove = (moveCount) => {
        setSkip((prevSkip) => {
            return Math.max(prevSkip + moveCount, 0)
        })
    }


    return (
        <div>
            <input type="text" className="form-control w-50 my-3 ms-4 d-inline-block " placeholder='Enter Products' />
            <select className='ms-5 form-select w-25 d-inline-block ' name="" id="">
                <option>Select Category</option>
                {
                    categories && categories.map(ele => {
                        return <option key={ele} value={ele}>{ele}</option>
                    })
                }
            </select>

            <div className="mycards border border-4 rounded-4 p-3 d-flex flex-wrap justify-content-center gap-3 bg-warning" style={style.mycards}>
                {
                    products.map(ele => (
                        <Card className='text-center bg-info border border-2 border-dark' style={{ width: '18rem' }}  >
                            <Card.Img style={style.images} variant="top" src={ele.images?.[0]} />
                            <Card.Body className='d-flex align-items-center justify-content-between flex-column'>
                                <Card.Title> {ele.title}</Card.Title>
                                <Card.Text className='d-inline-block  fst-italic  fw-bolder text-danger'>
                                    {ele.category}
                                </Card.Text>
                                <Card.Text className='d-inline-block'>
                                    ${ele.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>

            <div className="mybtns" style={style.mybtns}>
                <button
                    onClick={() => handleMove(-limit)}
                    className='btn btn-info ' style={{ width: '100px', fontWeight: '500' }}>PREV</button>
                <button
                    onClick={() => handleMove(+limit)}
                    className='btn btn-info' style={{ width: '100px', fontWeight: '500' }}>Next</button>
            </div>
        </div>
    )
}

export default Sortproducts

let style = {
    images: {
        height: '150px',
        width: '150px',
        // objectFit:'cover',
        margin: 'auto',
        marginTop: '10px',
        border: '3px solid black',
        borderRadius: '50px'
    },
    mycards: {
        border: '3px solid black',

    },
    mybtns: {
        with: '25px',
        // backgroundColor:'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '25px',
        marginTop: '10px',
    }

}


