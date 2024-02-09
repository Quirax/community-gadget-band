import { Route } from 'react-router-dom'

import Main from './Main'
import Login from './Login'

function Page(props) {
    const client_id = process.env.REACT_APP_BAND_CLIENT_ID
    const redirect_uri = `${window.location.protocol}//${window.location.host}${process.env.PUBLIC_URL}/login`
    const redirect_uri_urlencoded = encodeURIComponent(redirect_uri)
    const url = `https://auth.band.us/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri_urlencoded}`

    return (
        <>
            <h1>Root</h1>
            <p>와 이게 된답니다!!!</p>
            <a href={url}>밴드로 로그인하기</a>
        </>
    )
}

export default (
    <Route path='/'>
        <Route
            index
            element={<Page />}
        />
        {Main}
        {Login}
    </Route>
)
