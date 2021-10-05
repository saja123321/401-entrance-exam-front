import React, { Component } from 'react'
import axios from 'axios'
import CardItem from './CardItem'
export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allItems: []
        }
    }
    componentDidMount = () => {
        const REACT_APP_BACK_PORT = process.env.REACT_APP_BACK_PORT
        axios.get(`${REACT_APP_BACK_PORT}/get-watches-list`).then(
            resData => this.setState({
                allItems: resData.data
            })
        )
    }
    render() {
        return (
            <div className='row'>
                {
                    this.state.allItems.length > 0 &&
                    this.state.allItems.map(
                        singleItem => <CardItem singleItem={singleItem} />
                    )
                }
            </div>
        )
    }
}

export default Home
