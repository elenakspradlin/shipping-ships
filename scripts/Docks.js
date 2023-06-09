import { getDocks } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}"
            data-location="${dock.location}"
            data-capacity="${dock.maxCapacity}"
            data-type="dock"
        
        >${dock.location} can hold ${dock.maxCapacity} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}