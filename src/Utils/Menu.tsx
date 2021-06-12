import { NavLink } from "react-router-dom";

export default function Menu(){
    const claseActiva = "active";
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={claseActiva} to="/">ReactPeliculas</NavLink>
                <div className= "collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link" activeClassName={claseActiva} to="/generos">
                            Generos
                        </NavLink>

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link" activeClassName={claseActiva} to="/peliculas/filtrar">
                            Filtrar Peliculas
                        </NavLink>

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link" activeClassName={claseActiva} to="/actores">
                            Actores
                        </NavLink>

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link" activeClassName={claseActiva} to="/cines">
                            Cines
                        </NavLink>

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link" activeClassName={claseActiva} to="/peliculas/crear">
                            Crear Peliculas
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    )
}