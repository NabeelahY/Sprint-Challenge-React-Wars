import React, { Component } from 'react';
import './App.css';
import StarWar from './components/StarWar';
import NavButton from './components/NavBtn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previousPage: null,
      nextPage: null
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
        // console.log(data)
        // if(data.next === null) {
        //   this.setState({ 
        //     starwarsChars: data.results,
        //     nextChars: []
        //   });
        // } else {
        //   this.setState({ 
        //     starwarsChars: data.results,
        //     nextChars: data.next
        //   });
        // }

        //   if(data.previous === null){
        //     this.setState({ 
        //       starwarsChars: data.results,
        //       previousChars: []
        //     });
        //   } else {
        //     this.setState({ 
        //       starwarsChars: data.results,
        //       previousChars: data.previous
        //     });
        //   }
        //   console.log(this.state.previousChars) 
        //   console.log(this.state.nextChars) 

        this.setState({
          starwarsChars: data.results,
          previousPage: data.previous,
          nextPage: data.next,
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // handlePrevious = () => {
  //   return this.getCharacters(this.state.previousChars);
  //  }

  // handleNext = () => {
  //  return this.getCharacters(this.state.nextChars);
// }

render() {
  const { previousPage, nextPage } = this.state;
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ul className='list'>
        <StarWar charList={this.state.starwarsChars} />
      </ul>
      {/* {previousPage ? <NavButton nav= {this.getCharacters} text={'Previous'} url={previousPage} /> : ''}
        {this.state.nextChars.length !== 0 ? <NavButton nav= {this.handleNext} text={'Next'} /> : ''}  */}
      <NavButton clickHandler={this.getCharacters} next={nextPage} prev={previousPage} />
    </div>
  );
}
}

export default App;
