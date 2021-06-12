
import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import CrearCine from "./cines/CrearCines";
import editarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPelicula from "./peliculas/CrearPelicula";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltrarPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarALanding from "./Utils/RedireccionarALanding";



const rutas = [
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros, exact: true},

    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/edita/:id(\\d+)r', componente: EditarActores},
    {path: '/actores', componente: IndiceActores , exact: true},

    {path: '/cines/crear', componente: CrearCine},
    {path: '/cines/editar/:id(\\d+)', componente: editarCines},
    {path: '/cines', componente: IndiceCines, exact: true },

    {path: '/peliculas/crear', componente: CrearPelicula},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltrarPeliculas },

    {path: '/', componente: LandingPage, exact: true}
   /// ,    {path: '*', componente: RedireccionarALanding}

];
export default rutas;