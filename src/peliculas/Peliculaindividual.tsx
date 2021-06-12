import { pelicula } from "./peliculas.model";
import css from './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props: PeliculaIndividualProps) {
    
const construirLink = ()=>  `/pelicula/${props.pelicula.id}`;//creo una funcion para crear url de acuerdo al id de la pelicula

    return (
        <div className={css.div}>
            <a href={construirLink()}> {/* llamo a la funcion para crear la url declarada arriba */}
                <img src={props.pelicula.poster} alt="Poster" />
            </a>
            <p>
                <a href={construirLink()}>
                    {props.pelicula.titulo}
                </a>
            </p>
        </div>
    )
}

interface PeliculaIndividualProps {
    pelicula: pelicula;
}