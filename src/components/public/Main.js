//rce

import React, { Component } from 'react'
import Cards from './Cards';
import RickAndMortyService from '../../services/RickAndMorty.service';

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { personajes: [] }
  }

  componentDidMount() {
    RickAndMortyService.getAllCharacters()
      .then((data) => this.setState({ personajes: data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Album Rick And Morty</h1>
              <p className="lead text-body-secondary">Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network.</p>
              <p>
                <div><a href="/" className="btn btn-success">Home</a> <a href="/user-form" className="btn btn-secondary my-2">Formulario</a></div>
              </p>             
            </div>
          </div>
        </section>
        <Cards personajes={this.state.personajes} /> 
      </main>
    )
  }
}

export default Main
