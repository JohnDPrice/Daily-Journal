import { Entry } from "./Entry.js";
import { getEntries, useEntries } from "./JournalEntryDataProvider.js";

// // Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".journal-entry-list")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".journal-form-container")

eventHub.addEventListener("click", eventObject => {
    if(eventObject.target.id === "showJournalEntries"){
        console.log("You clicked the show notes button")
        EntryList()
    }
})


// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export function EntryList() {
    getEntries().then(() => {
            const allTheEntries = useEntries()

            // const arrayOfEntriesHTMLRepresentations = allTheEntries.map(entry => {
            //     console.log(Form(entry))
                
            //     const html = Form(entry)

            //     return html
            // })
            let arrayOfEntriesHTMLRepresentations = ""

            for(const entry of allTheEntries){
                arrayOfEntriesHTMLRepresentations += Entry(entry)
            }

            const stringOfAllRepresentations = arrayOfEntriesHTMLRepresentations

            contentTarget.innerHTML = `<h3>Journal Entries</h3>${stringOfAllRepresentations}`

            
        })
}