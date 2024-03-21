import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

function SortProdPRD() {

    let [searchParam, setSearchParam] = useSearchParams({ skip: 0, limit: 6 })

    console.log(searchParam)



    let skip = parseInt(searchParam.get('skip') || 0)
    let limit = parseInt(searchParam.get('limit') || 0)
    let q = searchParam.get('q') || ''
    let category = searchParam.get('category') || ''

    let { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            return await fetch(`https://dummyjson.com/products/categories`).then(res => res.json())
        }
    })

    let { data: products } = useQuery({
        queryKey: ['products', limit, skip, q, category],
        queryFn: async () => {

            let url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`

            if (category) {
                url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}&q=${q}`
            }

            let data = await fetch(url).then(res => res.json())
            return data.products

        },
        placeholderData: keepPreviousData,
        staleTime: 10000

    })

    let handleMove = (moveCount) => {
        setSearchParam((prev) => {
            prev.set('skip', Math.max(skip + moveCount, 0))
            return prev
        })
    }


    return (
        <div>
            <input type="text" className="form-control w-50 my-3 ms-4 d-inline-block " placeholder='Enter Products'
                onChange={debounce((e) => {
                    setSearchParam((prev) => {
                        prev.set('q', e.target.value)
                        prev.set('skip', 0)
                        prev.delete('category')
                        return prev
                    })
                }, 2000)}
            />
            <select
                onChange={debounce((e) => {
                    setSearchParam((prev) => {
                        prev.set('category', e.target.value)
                        prev.delete('q')
                        prev.set('skip', 0)
                        return prev
                    })
                })}
                className='ms-5 form-select w-25 d-inline-block ' name="" id="">
                <option>Select Category</option>
                {
                    categories && categories.map(ele => {
                        return <option key={ele} value={ele}>{ele}</option>
                    })
                }
            </select>

            <div className="mycards border border-4 rounded-4 p-3 d-flex flex-wrap justify-content-center gap-3 bg-warning" style={style.mycards}>
                {
                    products && products.map(ele => (
                        <Card key={ele.id} className='text-center bg-info border border-2 border-dark' style={{ width: '18rem' }}  >
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

export default SortProdPRD

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


