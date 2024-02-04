import logo from './logo.svg'
import './App.css'

import { RouterProvider } from 'react-router'

import Root from './page/Root'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(Root), {
    basename: process.env.PUBLIC_URL,
})

function App() {
    return <RouterProvider router={router} />
}

export default App
