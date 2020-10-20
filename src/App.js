import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import Image from './Components/Image';
import Favorites from './Components/Favorites';


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      heroName: null
    }
  }

  componentDidMount() {
    axios
      .get('/api/superhero/images')
      .then(res => {
        this.setState({ heroes: res.data })
        console.log('hit')
      })
      .catch(err => console.log(err))

  }

  render() {
    const heroesMapped = this.state.heroes.map((hero, index) => {
      return <Image key={index} hero={hero} />
    })

    return (
      <div className="App">
        <Header />
        <Favorites />
        { heroesMapped}
      </div>
    )
  }
}


export default App;
