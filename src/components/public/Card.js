import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ personaje }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">

                <img width="100%" src={personaje.image} alt="imagen" />

                <h3 className="mb-0 text-dark"> {personaje.name} </h3>
                <div className="card-body">

                    <p className="card-text">
                        Estatus: {personaje.status} <br></br>
                        Especie: {personaje.species} <br></br>
                        Origen: {personaje.origin.name} <br></br>
                        Ubicación: {personaje.location.name}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                <Link to={`/details/${personaje.id}`} className="nav-link px-2 text-secondary">Ver detalles</Link>
                            </button>
                        </div>
                        <small className="text-body-secondary">{personaje.gender}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
