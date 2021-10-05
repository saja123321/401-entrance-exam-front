import React, { Component } from 'react'
import CardFavItem from './CardFavItem'
import axios from 'axios'
export class FavItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favItems: []
        }
    }
    componentDidMount = () => {
        const REACT_APP_BACK_PORT = process.env.REACT_APP_BACK_PORT
        axios.get(`${REACT_APP_BACK_PORT}/getFavorite`).then(
            resData => this.setState({
                favItems: resData.data
            })
        )
    }
    render() {
        return (
            <>
                <h1> Favorite Items</h1>
                <div className='row'>
                    {
                        this.state.allItems.length > 0 &&
                        this.state.allItems.map(
                            singleItem => <CardFavItem singleItem={singleItem} />
                        )
                    }
                </div> </>
        )
    }
}

export default FavItems
