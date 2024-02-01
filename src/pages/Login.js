import { Route } from 'react-router-dom'

function Page(props) {
    return <h1>Landing</h1>
}

export default (
    <Route
        path='login'
        element={<Page />}
    />
)
