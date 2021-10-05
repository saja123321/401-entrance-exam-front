import React, { Component } from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import axios from 'axios'
export class CardItem extends Component {
    addToFavorite = () => {
        const item = this.props.singleItem
        const REACT_APP_BACK_PORT = process.env.REACT_APP_BACK_PORT

        const itemObj = {
            email: 'v.salvatore7.gs@gmail.com',
            title: item.title,
            description: item.description,
            toUSD: item.toUSD,
            image_url: item.image_url
        }
        console.log(itemObj);
        axios.post(`${REACT_APP_BACK_PORT}/addToFavorite`, itemObj).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const item = this.props.singleItem
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Img src={item.image_url} />
                    <Card.Text>
                        {
                            item.description
                        }
                    </Card.Text>
                    <h5>
                        <Badge bg="secondary">{item.toUSD}</Badge>
                    </h5>
                    <Button variant="primary" onClick={() => this.addToFavorite()}> add to favorite</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default CardItem
