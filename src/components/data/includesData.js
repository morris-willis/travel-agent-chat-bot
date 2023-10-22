// this file contains keywords in the synonyms section, and responses to the keywords in the response message. As the complexity increases it may be nessacery to split these into smalelr files with more specific objects inside them
export const helloStrings = {
    synonyms : ['hello', 'hi', 'start again', 'yes'],
    responseMessage: {user:'bot',  message:'If you need to start again at anytime, just say start again. Lets start with some basic questions. would you like a warm, mild, or cold holiday?'},
}
export const noHelloString = {
    responseMessage: { user: 'bot', message:'im sorry, i didnt understand that. try saying yes or hello'}
}

export const coldStrings = {
    synonyms: ['cold', 'chill', 'cool'],
    responseMessage: {user: 'bot', message:'you have asked for a cold destination. do you have a preferred continent?'}
}

export const warmStrings = {
    synonyms: ['warm', 'hot'],
    responseMessage: {user: 'bot', message:'you have asked for a warm destination. do you have a preferred continent?'}
}

export const mildStrings ={
    synonyms: ['mild'],
    responseMessage: {user: 'bot', message:'you have asked for a mild destination. do you have a preferred continent?'}
}
export const noTempGiven = {
    responseMessage: { user: 'bot', message: 'im sorry, i didnt understand that. would you like a warm, mild, or cold holiday? '
    }
}
export const africaString = {
    synonyms: ['africa']
}
export const asiaString = {
    synonyms: ['asia']
}
export const northAmericaString = {
    synonyms: ['north america']
}
export const oceaniaString = {
    synonyms: ['australia', 'Oceania']
}
export const europeString = {
    synonyms: ['europe']
}
export const antarcticaString = {
    synonyms: ['antarctica', 'south pole']
}
export const arcticString = {
    synonyms:['arctic', 'north pole']
}
export const southAmericaString = {
    synonyms: ['south america'],
    responseMessage: {user: 'bot', message: 'you have asked about South America, unfortunatley, we do not have any hotels there at this time, try another continent'}
}

export const confirmString = {
    synonyms: ['yes', 'ye']
}