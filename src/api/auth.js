function paramsToObject() {
    const entries = new URLSearchParams(window.location.search).entries()

    const result = {}
    for (const [key, value] of entries) {
        result[key] = value
    }
    return result
}

export function beginAuthorization() {
    const client_id = process.env.REACT_APP_BAND_CLIENT_ID
    const redirect_uri = encodeURIComponent(new URL('/login', window.location.href).href)

    window.location.href = `https://auth.band.us/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`
}

export function getAuthorizationCode() {
    const query = paramsToObject()

    return query.code
}
