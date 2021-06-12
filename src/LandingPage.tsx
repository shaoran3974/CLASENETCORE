import React from "react";
import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})
    //este useefect es un timwout para dar tiempo a la carga de peliculas
    useEffect(() => {
        const timerID = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, titulo: 'Spiderman',
                        poster: 'https://i.pinimg.com/280x280_RS/e7/f7/ac/e7f7ac79a20a03841c1575235b93a0fd.jpg'
                    },
                    {
                        id: 2, titulo: 'Narnia',
                        poster: 'https://www.terecazola.com/wp-content/uploads/2017/02/queso-pi%C3%B1a-y-nuez-300x300.png'
                    }
                ],
                proximosEstrenos: [
                    {
                        id: 3, titulo: 'Pelicula 3',
                        poster: 'https://www.terecazola.com/wp-content/uploads/2018/09/bocadillos-2.png'
                    }
                ]


            })
        }, 500);
        return () => clearTimeout(timerID);
    })

    return (
        <>
            <h3> En cartelera </h3>
            <ListadoPeliculas pelicula={peliculas.enCartelera} />
            <h3>Proximos estrenos </h3>
            <ListadoPeliculas pelicula={peliculas.proximosEstrenos} />
        </>
    )
}