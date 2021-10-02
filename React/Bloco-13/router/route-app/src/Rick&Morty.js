import React, { Component } from 'react'

class RickMorty extends Component {
    constructor(){
        super()
        this.state = {
            characters: [],
        };
        this.fetchApi = this.fetchApi.bind(this)
    }

    componentDidMount() {
        this.fetchApi()
    }

    async fetchApi() {
        const response  = await fetch('https://rickandmortyapi.com/api/character');
        const result = await response.json();
        const resultOfFetch = this.setState({characters: result.results})
        console.log(result)
  
    }
  
    render() {
     const { characters } = this.state; 
        return (
            <div>
               <h1>Rick&Morty</h1>
               {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
            </div>
        )
    }
}
export default RickMorty
