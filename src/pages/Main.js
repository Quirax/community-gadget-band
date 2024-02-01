import SubMain from './SubMain'

import { Route } from 'react-router-dom'

function Page(props) {
    return <h1>Main</h1>
}

export default (
    <Route path='main'>
        <Route
            index
            element={<Page />}
        />
        {SubMain}
    </Route>
)
