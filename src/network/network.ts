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

const fetchBackEndURL = "https://grocery-list-backend-001.herokuapp.com/"

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