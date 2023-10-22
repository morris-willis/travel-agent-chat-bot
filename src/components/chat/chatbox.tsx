import { IMessage, IChoicesObject } from "@/types/Message";
import React, {useEffect, useState} from "react";
import {ChatBox, ChatInputStyles, HiddenSubmit, ChatBoxWrapper, FormWrapper} from '../../styles/components/chatbox'
import { DisplayMessages } from "./displayMessages";
import * as includesData from '../../components/data/includesData'
import Router from 'next/router'

export const Chatbox = (props:any) => {
    const [messages, setMessages] = useState<IMessage[]>([{user: 'bot', message: 'hello, can i help you find a hotel?'}])
    const [message, setMessage] = useState<IMessage>({user: 'customer', message: ''})
    // The choices Object form part of the control flow, making sure that users are at the right step
    const [choicesObject, setChoicesObject]= useState<IChoicesObject>({greeting: false, confirmationAsked: false, confirmationRecieved: false})
    //This function handles the submission of text in the form
    const handleMessageInput = (e: any) => {
        const newMessage = {
            user: 'customer',
            message: e.target.value
        }
        setMessage(newMessage)
    }
    // This function contains the majority of the logic for the chatbot. it takes the inputted message and choices object, and uses them to respond to the cutomer
    const handleSumbit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        let newMessages = [...messages]
        if (message){
            newMessages.unshift(message)
        }   
        if (!choicesObject.greeting){
                if (includesData.helloStrings.synonyms.some(i => message.message.toLowerCase().includes(i))){ 
                    newMessages.unshift(includesData.helloStrings.responseMessage)   
                    setChoicesObject({...choicesObject, greeting: true})        
                } else {
                    newMessages.unshift(includesData.noHelloString.responseMessage)
                }
        }else if(message.message.toLowerCase().includes('start again')){
                newMessages.unshift({user:'bot', message:'lets start again. would you like a hot, cold, or mild holiday?'})
                setChoicesObject({greeting:true, confirmationAsked:false, confirmationRecieved:false})
        }else if(!choicesObject?.TempRating){
            if(includesData.coldStrings.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift(includesData.coldStrings.responseMessage)
                setChoicesObject({...choicesObject, TempRating: 'cold'})
            }
            else if(includesData.warmStrings.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift(includesData.warmStrings.responseMessage)
                setChoicesObject({...choicesObject, TempRating: 'warm'})            
            }
            else if(includesData.mildStrings.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift(includesData.mildStrings.responseMessage)
                setChoicesObject({...choicesObject, TempRating: 'mild'})             
            } 
            else {
                newMessages.unshift(includesData.noTempGiven.responseMessage)
            }
        } else if(!choicesObject?.Continent && choicesObject?.TempRating){
            if(includesData.africaString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift({user: 'bot', message:`you have asked for a ${choicesObject.TempRating} holiday in Africa, is this correct?`})
                setChoicesObject({...choicesObject, Continent:'africa', confirmationAsked: true})
            }else if(includesData.asiaString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift({user: 'bot', message:`you have asked for a ${choicesObject.TempRating} holiday in Asia, is this correct?`})
                setChoicesObject({...choicesObject, Continent:'asia', confirmationAsked: true})
            }else if(includesData.northAmericaString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift({user: 'bot', message:`you have asked for a ${choicesObject.TempRating} holiday in North America, is this correct?`})
                setChoicesObject({...choicesObject, Continent:'northAmerica', confirmationAsked: true})
            }else if(includesData.oceaniaString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift({user: 'bot', message:`you have asked for a ${choicesObject.TempRating} holiday in Oceania, is this correct?`})
                setChoicesObject({...choicesObject, Continent:'oceania', confirmationAsked: true})
            }else if(includesData.europeString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift({user: 'bot', message:`you have asked for a ${choicesObject.TempRating} holiday in Europe, is this correct?`})
                setChoicesObject({...choicesObject, Continent:'europe', confirmationAsked: true})
            }else if(includesData.antarcticaString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift({user: 'bot', message:`you have asked for a ${choicesObject.TempRating} holiday in antarctica, is this correct?`})
                setChoicesObject({...choicesObject, Continent:'antarctica', confirmationAsked: true})
            }else if(includesData.arcticString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift({user: 'bot', message:`you have asked for a ${choicesObject.TempRating} holiday in the Arctic, is this correct?`})
                setChoicesObject({...choicesObject, Continent:'arctic', confirmationAsked: true})
            }else if(includesData.southAmericaString.synonyms.some(i => message.message.toLowerCase().includes(i))){
                newMessages.unshift(includesData.southAmericaString.responseMessage)
            }else {
                newMessages.unshift({user:'bot', message:"Im sorry, i didn't understand that, please enter a continent"})
            }                                                                                                  
        } else if(choicesObject.confirmationAsked){ 
            if(includesData.confirmString.synonyms.some(i=> message.message.toLowerCase().includes(i))){
                newMessages.unshift({user:'bot', message:'taking you to results'})
                Router.push({
                    pathname:'/results',
                    query:{tempRating: choicesObject.TempRating,
                    continent:choicesObject.Continent
                }})
            } else {
                newMessages.unshift({user:'bot', message:'lets start again. would you like a hot, cold, or mild holiday?'})
                setChoicesObject({greeting:true, confirmationAsked:false, confirmationRecieved:false})
            }
        // this last else statement is designed as a catch all if nothing else triggers. ideally if this was being used for development we may want some form of logging here to see if there is anything particular triggering it to imporve the program    
        } else{
            newMessages.unshift({user:'bot', message:"I'm sorry, I didnt understand that, try rephrasing your answer to include more specific words, or type 'start again' to go back the beginning of the process"})
        }
        //these two statements clear the input, and display the sent messages, allowing the next step to take place
        setMessages(newMessages)
        setMessage({user: 'customer', message: ''})
    }
  
    return (
        <ChatBoxWrapper>
            <ChatBox>
                <DisplayMessages messages={messages} />
            <FormWrapper onSubmit={handleSumbit}>
                <ChatInputStyles value={message?.message} onChange={handleMessageInput}/>
                <HiddenSubmit type='submit' hidden/>
            </FormWrapper>
            </ChatBox>
        </ChatBoxWrapper>
    )
}