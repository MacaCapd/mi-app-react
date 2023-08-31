//rce

import React, { Component } from 'react'
import Cards from './Cards';
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Link } from 'react-router-dom';

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
                <div><Link to='/user-form' className="btn btn-success">FORMULARIO</Link> <Link to='/contact' className="btn btn-secondary my-2">CONTACTO</Link></div>
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
