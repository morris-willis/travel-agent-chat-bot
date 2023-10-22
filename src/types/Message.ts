export interface IMessage{
    user: string,
    message: string,
    id?: string,
}
 export interface IChoicesObject{
    greeting: boolean,
    confirmationRecieved: boolean,
    confirmationAsked: boolean
    TempRating?: string,
    Continent?: string,
 }