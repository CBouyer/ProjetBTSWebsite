import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router';
import {App} from "./App.tsx";
import ReactDOM from 'react-dom/client';
import React from 'react';
import {UserLogin} from "./pages/UserLogin.tsx";
import {PageNotFound} from "./pages/PageNotFound.tsx";
import {PrivateRoute} from "./utils/Route.tsx";
import {Home} from "./pages/Home.tsx";
import {MesuresCapteur} from "./pages/MesuresCapteur.tsx";
import {PageMap} from "./pages/PageMap.tsx";
import {GestionAdmin} from "./pages/GestionAdmin.tsx";
import {MesuresCapteurRPI} from "./pages/MesureCapteurRPI.tsx"


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/" , element:<UserLogin/>},
            {path:"*", element:<PageNotFound/>},
            {
                element: <PrivateRoute/>,
                children:[
                    {path:"/GestionAdmin", element:<GestionAdmin/>},
                    {path:"/home", element:<Home/>},
                    {path:"/PageMap", element:<PageMap/>},
                    {path:"/MesureCapteur", element:<MesuresCapteur/>},
                    {path: "/MesureCapteurRPI", element:<MesuresCapteurRPI/>}
                ]
            }
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)


