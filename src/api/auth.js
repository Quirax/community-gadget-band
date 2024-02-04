const OAUTH_URL = 'https://auth.band.us/oauth2'

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

    window.location.href = `${OAUTH_URL}/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`
}

export function getAuthorizationCode() {
    const query = paramsToObject()

    return query.code
}

export async function getTokensWithAuthCode(authCode) {
    const client_id = process.env.REACT_APP_BAND_CLIENT_ID
    const client_secret = process.env.REACT_APP_BAND_CLIENT_SECRET

    const bearer = btoa(`${client_id}:${client_secret}`)
    const authorization = `Basic ${bearer}`

    const headers = new Headers()
    headers.append('Host', 'auth.band.us')
    headers.append('Authorization', authorization)

    return await fetch(`${OAUTH_URL}/token?grant_type=authorization_code&code=${authCode}`, {
        cache: 'no-cache',
        // mode: 'no-cors',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
}
