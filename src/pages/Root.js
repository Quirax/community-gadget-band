import Login from './Login'
import Main from './Main'

import { Route } from 'react-router-dom'

function onBeginAuthorization() {
    let client_id = process.env.REACT_APP_BAND_CLIENT_ID
    let redirect_uri = encodeURIComponent(new URL('/login', window.location.href).href)

    window.location.href = `https://auth.band.us/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`
}

function Page(props) {
    return (
        <>
            <h1>Root</h1>
            <button onClick={onBeginAuthorization}>밴드로 로그인</button>
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
