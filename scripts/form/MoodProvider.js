let moods = []

export const useMoods = () => {
    return moods.slice()
}

// Fetches Entries Array from local API
export const getMoods = () => {
    return fetch('http://localhost:9099/moods')
        .then(response => response.json())
        .then(parsedMoods => {
            moods = parsedMoods
        })
}