import { getShips } from "./database.js"


export const ShipsList = () => {
    const cargoShips = getShips()

    let shipsHTML = "<ul>"

    for (const cargoShip of cargoShips) {

        shipsHTML += `<li data-id="${cargoShip.id}"
                            data-name="${cargoShip.name}"
                            data-shipHaulerForeignKey="${cargoShip.shipHaulerId}"
                            data-type="cargoShip"
        
        >${cargoShip.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}