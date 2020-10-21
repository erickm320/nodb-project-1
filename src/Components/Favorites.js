import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';


class Favorite extends Component{
    constructor(){
        super();
    }

    getHeroes = () => {
        axios.get('/api/fav-hero')
        .then(res => {
            this.setState({})
        })
    }
}
export default Favorite;