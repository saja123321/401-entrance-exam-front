import React, { Component } from 'react'
import { Card, Badge, Button } from 'react-bootstrap'
import axios from 'axios'

export class CardFavItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }
    delFavorite = () => {
        const id = this.props.singleItem._id
        console.log(id);
        const REACT_APP_BACK_PORT = process.env.REACT_APP_BACK_PORT
        axios.delete(`${REACT_APP_BACK_PORT}/delFromFavorite/${id}`).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    update = () => {
        this.setState({
            showModal: true
        })
        // const item = this.props.singleItem
        // const id = item._id
        // const itemObj = {
        //     email: 'v.salvatore7.gs@gmail.com',
        //     title: item.title,
        //     description: item.description,
        //     toUSD: item.toUSD,
        //     image_url: item.image_url
        // }
        // const REACT_APP_BACK_PORT = process.env.REACT_APP_BACK_PORT
        // axios.put(`${REACT_APP_BACK_PORT}/delFromFavorite/${id}`, itemObj).then(function (response) {
        //     console.log(response);
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
                    <Button variant="primary" onClick={() => this.delFavorite()}> delet</Button>
                    <Button variant="primary" onClick={() => this.update()}> update</Button>

                </Card.Body>
            </Card>
        )
    }
}

export default CardFavItem
