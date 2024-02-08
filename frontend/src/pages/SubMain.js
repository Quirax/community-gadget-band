import { Route } from 'react-router-dom'

function Page(props) {
    return <h1>SubMain</h1>
}

export default (
    <Route
        path='sub'
        element={<Page />}
    />
)
