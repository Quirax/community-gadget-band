async function fetchAPI(uri, options) {
    const apiURL = `${window.location.protocol}//${window.location.host}${process.env.PUBLIC_URL}/api/${uri}`

    const fetch_options = Object.assign(
        {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
        },
        options
    )

    const response = await fetch(apiURL, fetch_options)
    return response.json()
}

export async function test() {
    return await fetchAPI('/test', {
        method: 'GET',
    })
}

export async function token(grant_type, code) {
    const client_id = process.env.REACT_APP_BAND_CLIENT_ID
    const client_secret = process.env.REACT_APP_BAND_CLIENT_SECRET
    const authorization = btoa(`${client_id}:${client_secret}`)

    console.log(`${client_id}:${client_secret}`)

    const payload = {
        grant_type,
        code,
        authorization: 'Basic ' + authorization,
    }

    return await fetchAPI('/token', {
        body: JSON.stringify(payload),
    })
}
