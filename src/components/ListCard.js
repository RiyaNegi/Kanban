import React from "react"
import { Card } from "react-bootstrap"

const ListCard = () => {
    return (
        <div>
            <Card
                // bg={Light.toLowerCase()}
                // key={1}
                // text={Light.toLowerCase() === 'light' ? 'dark' : 'white'}
                // style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ListCard