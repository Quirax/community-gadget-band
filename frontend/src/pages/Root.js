import { Route } from 'react-router-dom'

import Main from './Main'

function Page(props) {
    return (
        <>
            <h1>Root</h1>
            <p>와 이게 된다!!!</p>
        </>
    )
}

export default (
    <Route path='/'>
        <Route
            index
            element={<Page />}
            loader={async () => {
                console.debug(await fetch(`${process.env.PUBLIC_URL}/api/test`))
                return null
            }}
        />
        {Main}
    </Route>
)
