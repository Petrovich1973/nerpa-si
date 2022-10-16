const nodes = {
    "FORT": {
        "back": 120,
        "online": 120
    },
    "MKS": {
        "back": 100,
        "online": 100
    },
    "COD99": {
        "back": 130,
        "online": 130
    },
    "CODbo": {
        "back": 60,
        "online": 60
    },
    "CODonline": {
        "back": 40,
        "online": 40
    },
    "LESkov": {
        "back": 55,
        "online": 55
    },
    "SHRAMko": {
        "back": 75,
        "online": 75
    },
    "POPoff": {
        "back": 12,
        "online": 12
    },
    "GLUshen": {
        "back": 90,
        "online": 90
    },
    "STRebuk": {
        "back": 30,
        "online": 30
    },
    "AllimKing": {
        "back": 210,
        "online": 210
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = {nodes, getRandomInt}
