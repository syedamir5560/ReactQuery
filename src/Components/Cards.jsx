import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ele}) {
    return (
        <div className='d-flex mx-3 mt-2'>
            <Card className='bg-info' style={{ width: '20rem', padding:"20px"}}>
                <Card.Img variant="top" src={ele.image} />
                <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text>
                       {ele.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards