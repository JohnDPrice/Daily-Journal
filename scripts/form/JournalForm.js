import { getEntries, useEntries, saveEntry } from "./JournalEntryDataProvider.js"
import { EntryList } from "./JournalEntryList.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const contentTarget = document.querySelector(".journal-form-container")

export const Form = (mood) => {
    contentTarget.innerHTML = `
        <div class="mb-3 col-sm-6 notes-form pt-3 pb-3">
        <h2>Daily Journal</h2>
            <input type="date" class="form-control col-sm-3" id="entry-date"/>
            <input type="text" class="form-control col-sm-3" placeholder="Concepts Covered" id="entry-concept" />
            <input type="text" class="form-control col-sm-3" placeholder="Journal Entry" id="journal-entry" />
        </div>
        <div class="row justify-content-center">
            <select id="entryForm--mood" class="moodSelect col-sm-4 jusitfy-content-center">
                <option value="0">Please select a mood</option>
                ${
                    mood.map((currentmoodInLoop) => {
                        const moodName = currentmoodInLoop.label
                        const moodID = currentmoodInLoop.id
                        return `<option value=${moodID}>${moodName}</option>`
                    })
                }
            </select>
            <div class="form-buttons-container row justify-content-center mt-2 mb-3">
                <button id="saveJournalEntry" class="btn btn-primary col-sm-3 justfiy-content-center">Record Journal Entry</button>
                <button id="showJournalEntries" class="btn btn-secondary col-sm-3 justfiy-content-center">Show Journal Entries</button>
            </div>
        </div>`
}

export const EntriesForm = () => {
    getMoods().then(() => {
        const allTheMoods = useMoods()
        Form(allTheMoods)
    })
}

// Handle browser-generated click event in component
const eventHub = document.querySelector(".journal-form-container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        console.log("You clicked the save entry button")
        // Make a new object representation of a note
        const newJournalEntry = {
            conceptsCovered: document.querySelector("#entry-concept").value,
            date: document.querySelector("#entry-date").value,
            journalEntry: document.querySelector("#journal-entry").value,
            moodId: parseInt(document.querySelector("#entryForm--mood").value),
        }
        console.log(newJournalEntry)
        
        console.log("This is a new note", newJournalEntry)
        // Change API state and application state
        saveEntry(newJournalEntry)
        // .then(EntryList)
    }
})