import { pelicula } from './peliculas.model'
import PeliculaIndividual from './Peliculaindividual'
import css from './ListadoPeliculas.module.css'
import Cargando from './../Utils/Cargando';
import ListadoGenerico from '../Utils/ListadoGenerico';

export default function ListadoPeliculas(props: listadoPeliculasProps) {
    
    
    return (
        <ListadoGenerico 
        //cargandoUI = {<>Cargando...</>}
        listado= {props.pelicula}>
            <div className={css.div}>
                {props.pelicula?.map(
                    pelicula => 
                    < PeliculaIndividual pelicula={pelicula}
                                        key= {pelicula.id}                        
                    />
                )}
            </div>
        </ListadoGenerico>
            
        )
}
    

interface listadoPeliculasProps {
    pelicula?: pelicula[]
}