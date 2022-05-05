export interface incomingItem {
    _id: string,
    content: string,
    done: boolean
}
export interface incomingResponse {
    response: incomingItem
}
    
export interface incomingResponses {
    response: incomingItem[]
}

export interface updateBackendPayload {
    content?: string,
    done?: boolean
}

const fetchBackEndURL = "https://grocery-list-backend-001.herokuapp.com"

export const fetchItems = (): Promise<incomingResponses> => {
    return fetch (`${fetchBackEndURL}/items`)
        .then(res => res.json())
        .then(res => res as incomingResponses)
}


// create function give it Data, pass it input value send to backend (hard coded)
export const postItem = async (payload: incomingItem): Promise<incomingResponse> => {
    return fetch(`${fetchBackEndURL}/items`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(res => res as incomingResponse)
}

export const editItem = async (payload: updateBackendPayload, _id: string): Promise<incomingResponse> => {
    console.log(payload);
    return fetch(`${fetchBackEndURL}/items/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
        
    })
        .then(res => res.json())
        .then(res => res as incomingResponse)
        
}

export const deleteItem = async (_id: string): Promise<number> => {
    return fetch(`${fetchBackEndURL}/items/${_id}`, {
        method: 'Delete',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
        
    })
        .then(res => res.status)
}


// Dashboard*********************************************************
export interface getArtistData {
    error: Record<string, any>[] | []
    items?: Record<string, any>[]
    page?: Record<string, any>[]
}

export interface getMonthlyListenersData {
    errors: Record<string, any>[] | []
    items?: Record<string, any>[]
    page?: Record<string, any>
    related?: Record<string, any>
}

const dashboardURL = "https://sandbox.api.soundcharts.com/api/v2/artist"

export const getArtistUUID = async (name: string): Promise<getArtistData> => {
    const result = await fetch(`${dashboardURL}/search/${name}?offset=0&limit=20`, {
        method: 'GET',
        headers: {
            'x-app-id': 'soundcharts',
            'x-api-key': 'soundcharts',
        }
    })
    return result.json()
}

export const getMonthlyListeners = async (uuid: string): Promise<getMonthlyListenersData> => {
    const result = await fetch(`${dashboardURL}/${uuid}/streaming/spotify/listeners/2020/10`, {
        method: 'GET',
        headers: {
            'x-app-id': 'soundcharts',
            'x-api-key': 'soundcharts',
        }
    })
    return result.json()
}

