const un = process.env.PUBLIC_URL + '/un.jpg'
const deux = process.env.PUBLIC_URL + '/deux.jpg'
const trois = process.env.PUBLIC_URL + '/trois.jpg'
const quatre = process.env.PUBLIC_URL + '/quatre.jpg'
const cinq = process.env.PUBLIC_URL + '/cinq.jpg'
const six = process.env.PUBLIC_URL + '/six.jpg'
const sept = process.env.PUBLIC_URL + '/sept.jpg'
const huit = process.env.PUBLIC_URL + '/huit.jpg'
const neuf = process.env.PUBLIC_URL + '/neuf.jpg'
const dix = process.env.PUBLIC_URL + '/dix.jpg'
const onze = process.env.PUBLIC_URL + '/onze.jpg'
const douze = process.env.PUBLIC_URL + '/douze.jpg'
const treize = process.env.PUBLIC_URL + '/treize.jpg'
const quatorze = process.env.PUBLIC_URL + '/quatorze.jpg'
const quinze = process.env.PUBLIC_URL + '/quinze.jpg'
const seize = process.env.PUBLIC_URL + '/seize.jpg'
const dixsept = process.env.PUBLIC_URL + '/dix-sept.jpg'
const dixhuit = process.env.PUBLIC_URL + '/dix-huit.jpg'
const dixneuf = process.env.PUBLIC_URL + '/dix-neuf.jpg'
const vingt = process.env.PUBLIC_URL + '/vingt.jpg'
const vingtun = process.env.PUBLIC_URL + '/vingt-un.jpg'
const vingtdeux = process.env.PUBLIC_URL + '/vingt-deux.jpg'

const initialData = {
    cards: {
        "arc1": { id: "arc1", content: "Bateleur", design: `${un}` },
        "arc2": { id: "arc2", content: "Pretresse", design: `${deux}` },
        "arc3": { id: "arc3", content: "Imperatrice", design: `${trois}` },
        "arc4": { id: "arc4", content: "Empereur", design: `${quatre}` },
        "arc5": { id: "arc5", content: "Pape", design: `${cinq}` },
        "arc6": { id: "arc6", content: "Amoureux", design: `${six}` },
        "arc7": { id: "arc7", content: "Chariot", design: `${sept}` },
        "arc8": { id: "arc8", content: "Force", design: `${huit}` },
        "arc9": { id: "arc9", content: "Hermite", design: `${neuf}` },
        "arc10": { id: "arc10", content: "Roue de fortune", design: `${dix}` },
        "arc11": { id: "arc11", content: 'Justice', design: `${onze}` },
        "arc12": { id: "arc12", content: 'Pendu', design: `${douze}` },
        "arc13": { id: "arc13", content: 'Arcane sans Nom', design: `${treize}` },
        "arc14": { id: "arc14", content: 'Temperance', design: `${quatorze}` },
        "arc15": { id: "arc15", content: 'Diable', design: `${quinze}` },
        "arc16": { id: "arc16", content: 'Tour', design: `${seize}` },
        "arc17": { id: "arc17", content: 'Etoile', design: `${dixsept}` },
        "arc18": { id: "arc18", content: 'Lune', design: `${dixhuit}` },
        "arc19": { id: "arc19", content: 'Soleil', design: `${dixneuf}` },
        "arc20": { id: "arc20", content: 'Jugement', design: `${vingt}` },
        "arc21": { id: "arc21", content: 'Monde', design: `${vingtun}` },
        "arc22": { id: "arc22", content: 'Fou', design: `${vingtdeux}` },
    },

    columns: {
        "initialDeck": {
            id: "initialDeck",
            title: "Les Arcanes",
            taskIds: ["arc1", "arc2", "arc3", "arc4", "arc5", "arc6", "arc7", "arc8", "arc9", "arc10", "arc11", "arc12", "arc13", "arc14", "arc15", "arc16", "arc17", "arc18", "arc19", "arc20", "arc21", "arc22"]
        },
        "pos1": {
            id: "pos1",
            title: "Situation initiale",
            taskIds: []
        },
        "pos2": {
            id: "pos2",
            title: "En opposition",
            taskIds: []
        },
        "pos3": {
            id: "pos3",
            title: "En atout",
            taskIds: []
        },
        "pos4": {
            id: "pos4",
            title: "En résultante",
            taskIds: []
        },
    },

    // columnOrder: ["initialDeck"],
    columnOrder: ["initialDeck", "pos1", "pos2", "pos3", "pos4"],
}

export default initialData