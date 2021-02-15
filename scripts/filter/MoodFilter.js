import { getMoods, useMoods } from "../form/MoodProvider.js"
import { FilterBar } from "./FilterBar.js"
import { EntryList } from "../form/JournalEntryList.js"


export const MoodFilter = (allMoods) => {

    return `
        <div class="mood-filter">
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--happy">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
        </div>
        `
}


const eventHub = document.querySelector(".filters")

eventHub.addEventListener("change", (eventObject) => {
    if (eventObject.target.name === "moodFilter") {
        console.log("You selected this mood:", eventObject.target.value)
        EntryList(eventObject.target.value)
    }
})