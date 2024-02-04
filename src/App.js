import './App.css'

import { RouterProvider } from 'react-router'

import Login from './pages/Login'
import Main from './pages/Main'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route
                index
                element={<Root />}
            />
            {Login}
            {Main}
        </Route>
    ),
    {
        basename: process.env.PUBLIC_URL,
    }
)

function Root() {
    return (
        <>
            <h1>Root</h1>
            <p>Client_ID = {process.env.REACT_APP_BAND_CLIENT_ID}</p>
            <p>Client_SECRET = {process.env.REACT_APP_BAND_CLIENT_SECRET}</p>
        </>
    )
}

function App() {
    return <RouterProvider router={router} />
}

export default App
