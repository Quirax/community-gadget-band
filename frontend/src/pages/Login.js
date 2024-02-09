import { Route } from 'react-router-dom'
import * as api from '../api'

function paramsToObject() {
    const entries = new URLSearchParams(window.location.search).entries()

    const result = {}
    for (const [key, value] of entries) {
        result[key] = value
    }
    return result
}

async function loader() {
    let authorization_code = paramsToObject()['code']

    if (typeof authorization_code != 'string' || authorization_code.length == 0) {
        alert('잘못된 접근입니다.')
        window.history.back()
    }

    console.log(await api.token('authorization_code', authorization_code))

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
