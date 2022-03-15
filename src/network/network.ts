export interface incomingItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const fetchTodos = (): Promise<incomingItem[]> => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => res as incomingItem[])
}