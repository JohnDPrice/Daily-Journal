export const Entry = (entryObject) => {
    return `
        <div class="entry-card col-sm-3 card p-3 ms-2">
            <h4 class="entry__conceptsCovered">${ entryObject.conceptsCovered }</h4>
            <p class="entry__date">Date ${ entryObject.date }</p>
            <p class="entry__text">Entry: ${ entryObject.journalEntry }</p>
            <p class="entry__mood">Mood: ${ entryObject.mood.label }</p>
        </div>
    `
}