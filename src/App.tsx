import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './Utils/Menu';
import rutas from './route-config'

function App() {

  return (
    <>
      <BrowserRouter>

        <Menu />
        <div className="container">
          <switch>
            {
              rutas.map(
                ruta => <Route key={ruta.path} path={ruta.path} exact={ruta.exact} >
                <ruta.componente />
              </Route>
              )
            }


          </switch>



        </div>
      </BrowserRouter>
    </>

  );


}

export default App;
