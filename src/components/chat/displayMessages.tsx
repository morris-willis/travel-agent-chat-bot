import React from "react";
import { IMessage } from "@/types/Message";
import { ChatBotLine, ChatUserLine } from "@/styles/components/chatbox";
import { MessageHistory } from "@/styles/components/chatbox";
export const DisplayMessages =(props: IMessage[] | any) =>{
// The simple logic here allows us to display messages from the user and the bot differently, which helps the user to understand the flow
    return (
        <MessageHistory>
        {props.messages.map((message: { user: string; message: any; },) => 
        {if(message.user==='bot'){
            return(
                <ChatBotLine>{message.message}</ChatBotLine>
            )}
        else if(message.user === 'customer'){
            return(
                <ChatUserLine>{message.message}</ChatUserLine>
                )
        }
        })}
        </MessageHistory>
    )
}