export const Form = () => {
    contentTarget.innerHTML = `
        <div class="mb-3 col-sm-6 notes-form pt-3 pb-3">
        <h2>Daily Journal</h2>
            <input type="date" class="form-control col-sm-3" id="note-date"/>
            <input type="text" class="form-control col-sm-3" placeholder="Concepts Covered" id="note-text" />
            <input type="text" class="form-control col-sm-3" placeholder="Journal Entry" id="journal-entry" />
        </div>
        <div class="row justify-content-center">
            <select id="noteForm--criminal" class="criminalSelect col-sm-4 jusitfy-content-center">
                <option value="0">Please select a mood</option>
                <option value="1">Happy</option>
                <option value="2">Frustrated</option>
                <option value="3">Mediocre</option>
            </select>
            <div class="row justify-content-center">
                <button id="saveJournalEntry" class="btn btn-primary col-sm-4 justfiy-content-center">Record Journal entry</button>
            </div>
        </div>`
}

const contentTarget = document.querySelector(".journal-form-container")