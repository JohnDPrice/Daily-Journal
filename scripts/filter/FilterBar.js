import { MoodFilter } from "./MoodFilter.js"
import { getMoods, useMoods } from "../form/MoodProvider.js"

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const contentTarget = document.querySelector(".filters")

export const FilterBar = () => {
        getMoods().then(() => {
        const allMoods = useMoods()
    
        const render = () => {
        contentTarget.innerHTML = `
            ${MoodFilter(allMoods)}
        `
    }

        render()
    })
}