import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

    const {usuario, iniciarSesion, cerrarSesion} = React.useContext(ChatContext)

    return (
        <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand text-white">Chat</span>
            <div>
                {
                    usuario.activo ? (
                        <button 
                            className="btn btn-outline-danger my-2 my-sm-0" 
                            onClick={cerrarSesion}
                        >
                            Salir
                        </button>
                    ) : (
                        <button 
                            className="btn btn-outline-success my-2 my-sm-0" 
                            onClick={iniciarSesion}
                        >
                            Acceder
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar