import { Route } from 'react-router-dom'

import Login from './Login'
import Main from './Main'

function Page(props) {
    return (
        <>
            <h1>Root</h1>
            <p>와 이게 된다 이거임!</p>
        </>
    )
}

export default (
    <Route path='/'>
        <Route
            index
            element={<Page />}
            loader={async () => {
                console.debug(await fetch('/api/test'))
                return null
            }}
        />
        {Login}
        {Main}
    </Route>
)
