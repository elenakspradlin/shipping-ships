import { getHaulers, getShips, getDocks } from "./database.js"

export const HaulersList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {

        haulersHTML += `<li data-id="${hauler.id}"
            data-name="${hauler.name}"
            data-dockForeignKey="${hauler.dockId}"
            data-type="hauler"
        >${hauler.name}
        
        
        
        
        </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked? -- 
        if (itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked -- 
            const haulerId = itemClicked.dataset.id

            // Start a counter variable at 0 -- let i = 0; i < counter; i++?

            let counter = 0

            // Iterate all of the shipping ships -- for loop of the cargo ships
            const cargoShips = getShips()
            for (const cargoShip of cargoShips) {
                if (parseInt(haulerId) === cargoShip.shipHaulerId) {
                    counter++
                }
            }
            window.alert(`This hauler is carrying ${counter} shipping ships`)

            // Does the haulerId foreign key match the id? -- if cargoShips.shipHaulerId === shipHaulerId -- will need another for loop to go through cargo ships
            //use parseInt to get the hauler id property from the cargo ships

            // Increase the counter by 1

        }

    }
)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const haulers = getHaulers()


        // Was a shipping ship list item clicked?

        if (itemClicked.dataset.type === "cargoShip") {

            // Get the haulerId value of the shipping ship clicked

            const haulerId = itemClicked.dataset.shiphaulerforeignkey


            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            for (const hauler of haulers) {

                // Does the haulerId foreign key match the id of the current hauler?

                if (parseInt(haulerId) === hauler.id) {

                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip.name = `${hauler.name}`

                }

                // Show an alert to the user with this format...


                // Palais Royal is being hauled by Seawise Giant



            }
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }

)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {
            let haulingShip = []
            //const docks = getDocks() //Do I need this?
            const haulers = getHaulers()

            // Was a dock list item clicked?

            const dockId = itemClicked.dataset.id
            for (const hauler of haulers) {
                if (parseInt(dockId) === hauler.dockId) {
                    haulingShip.push(hauler.name)
                }

            }
            window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulingShip}`)



            // Check if item being clicked is a dock
            // Get the array of docks and haulers
            // Compare the dock dataset id tag to the hauler's dock id
            // Will need to iterate through the haulers to get that information
            // Create a default object for the found hauler

            // window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulingShip.name}`)






            /*
                Your job is to design an algorithms and implement it
            */
        }
    }
)