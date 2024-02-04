import { Route } from 'react-router-dom'
import { getAuthorizationCode, getTokensWithAuthCode } from '../api/auth'

async function loader() {
    const authCode = getAuthorizationCode()
    const tokens = getTokensWithAuthCode(authCode)
    console.debug(tokens)
    return null
}

function Page(props) {
    return <p>Loading...</p>
}

export default (
    <Route
        path='login'
        element={<Page />}
        loader={loader}
    />
)
