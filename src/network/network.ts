export interface incomingItem {
    _id: string,
    content: string,
    done: boolean
}

export interface incomingResponse {
    response: incomingItem[]
}

const fetchBackEndURL = "http://localhost:6061"

export const fetchTodos = (): Promise<incomingResponse> => {
    return fetch (`${fetchBackEndURL}/todos`)
        .then(res => res.json())
        .then(res => res as incomingResponse)
}