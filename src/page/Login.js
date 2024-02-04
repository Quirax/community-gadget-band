import { Route } from 'react-router-dom'
import { getAuthorizationCode } from '../api/auth'

function loader() {
    const authCode = getAuthorizationCode()
    console.debug('code', authCode)
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
