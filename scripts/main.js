import { ShipsList } from "./CargoShips.js"
import { HaulersList } from "./ShipHaulers.js"
import { DockList } from "./Docks.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `

<h1>Shipping Ship Ships</h1>

<article class="details">

    <section class="detail--column list details__cities">

        <h2>Cargo Ships</h2>

        ${ShipsList()}
    </section>

    <section class="detail--column list details__cities">
        <h2>Haulers</h2>

        ${HaulersList()}
    </section>

    <section class="detail--column list details__cities">
        <h2>Docks</h2>

        ${DockList()}
    </section>

</article>



`
mainContainer.innerHTML = applicationHTML