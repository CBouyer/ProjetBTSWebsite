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
                    {path:"/home", element:<Home/>},
                    {path:"/PageMap", element:<PageMap/>},
                    {path:"/MesureCapteur", element:<MesuresCapteur/>},
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


