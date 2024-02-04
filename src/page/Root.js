import Login from './Login'
import Main from './Main'

import { Route } from 'react-router-dom'

import { beginAuthorization } from '../api/auth'

function Page(props) {
    return (
        <>
            <h1>Root</h1>
            <button onClick={beginAuthorization}>밴드로 로그인</button>
        </>
    )
}

export default (
    <Route path='/'>
        <Route
            index
            element={<Page />}
        />
        {Login}
        {Main}
    </Route>
)
