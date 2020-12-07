import React from "react"
import { Card } from "react-bootstrap"

const ListCard = ({ text, key, listId }) => {
    return (
        <div>
            <Card
                // bg={Light.toLowerCase()}
                key={key}
                listId={listId}
                // text={Light.toLowerCase() === 'light' ? 'dark' : 'white'}
                // style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ListCard