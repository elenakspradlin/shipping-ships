// need to build out the databases for the cargo ships, the ship haulers, and the docks
// cargo ships should have an id, name, and shipHaulerId property
// ship haulers should have an id, name, and dockId property
// docks should have an id, a location, and a max capacity (with a decimal),
// need to create functions that export and return copies of this data


const database = {
    docks: [{
        id: 1,
        location: "Shanghai, China",
        maxCapacity: 43.5,
    },
    {
        id: 2,
        location: "Busan, South Korea",
        maxCapacity: 21.6,

    },
    {
        id: 3,
        location: "Rotterdam, The Netherlands",
        maxCapacity: 14.35,
    },
    {
        id: 4,
        location: "Antwerp, Belgium",
        maxCapacity: 12.04,
    }],

    shipHaulers: [{
        id: 1,
        name: "Pioneering Spirit",
        dockId: 1
    },
    {
        id: 2,
        name: "Boaty McBoatface",
        dockId: 2
    },
    {
        id: 3,
        name: "Seawise Giant",
        dockId: 3
    },
    {
        id: 4,
        name: "Tiny",
        dockId: 4
    },
    {
        id: 5,
        name: "I <3 Javascript",
        dockId: 1
    },
    {
        id: 6,
        name: "Emotional Support Hauler",
        dockId: 2
    }],

    cargoShips: [{
        id: 1,
        name: "Esso Atlantic",
        shipHaulerId: 1
    },
    {
        id: 2,
        name: "Prairial",
        shipHaulerId: 2
    },
    {
        id: 3,
        name: "Palais Royal",
        shipHaulerId: 3
    },
    {
        id: 4,
        name: "Rivoli",
        shipHaulerId: 4
    },
    {
        id: 5,
        name: "Champs Elysee",
        shipHaulerId: 5
    },
    {
        id: 6,
        name: "Ever Ace",
        shipHaulerId: 6
    },
    {
        id: 7,
        name: "Nissei Maru",
        shipHaulerId: 1
    },
    {
        id: 8,
        name: "MSC Gulsun",
        shipHaulerId: 2
    },
    {
        id: 9,
        name: "HMM Rottendam",
        shipHaulerId: 3
    },
    {
        id: 10,
        name: "CMA CGM Trocadero",
        shipHaulerId: 4
    }]
}



export const getDocks = () => {
    return database.docks.map(dock => ({ ...dock }))
}

export const getHaulers = () => {
    return database.shipHaulers.map(shipHauler => ({ ...shipHauler }))
}

export const getShips = () => {
    return database.cargoShips.map(cargoShip => ({ ...cargoShip }))
}

