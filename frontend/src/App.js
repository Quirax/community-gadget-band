import logo from './logo.svg'
import './App.css'

import { RouterProvider } from 'react-router'

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './pages/Root'

const router = createBrowserRouter(createRoutesFromElements(Root), {
    basename: process.env.PUBLIC_URL,
})

function App() {
    return <RouterProvider router={router} />
}

export default App
