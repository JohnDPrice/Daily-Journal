let entries = []

export const useEntries = () => {
    return entries.slice()
}

// Fetches Entries Array from local API
export const getEntries = () => {
    return fetch('http://localhost:9099/entries?_expand=mood')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

// Adds new entry to entries Array on local API 
export const saveEntry = entry => {
    return fetch('http://localhost:9099/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    // .then(dispatchStateChangeEvent)
}