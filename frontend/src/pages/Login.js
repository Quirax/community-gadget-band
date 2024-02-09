import { Route } from 'react-router-dom'

function paramsToObject() {
    const entries = new URLSearchParams(window.location.search).entries()

    const result = {}
    for (const [key, value] of entries) {
        result[key] = value
    }
    return result
}

function loader() {
    let query = paramsToObject()
    console.debug('code', query)
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
