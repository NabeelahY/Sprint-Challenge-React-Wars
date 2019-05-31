import React, { Component } from 'react';
import './App.css';
import StarWar from './components/StarWar';
import NextButton from './components/NextBtn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        if(data.next === null) {
          this.setState({ 
            starwarsChars: data.results,
            nextChars: []
          });
        }
          else if(data.next !== null){
            this.setState({ 
              starwarsChars: data.results,
              nextChars: data.next
            });
          }
          console.log(this.state.nextChars) 
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleNext = () => {
   return this.getCharacters(this.state.nextChars);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul className='list'>
          <StarWar charList={this.state.starwarsChars} />
        </ul>
        <NextButton next= {this.handleNext} />
      </div>
    );
  }
}

export default App;
