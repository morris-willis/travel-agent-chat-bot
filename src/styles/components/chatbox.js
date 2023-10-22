import styled from 'styled-components'

export const ChatBoxWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
`

export const ChatBox= styled.div`
border: 5px solid black;
border-radius: 5px;
padding: 10px;
width: 400px;
height: 400px;
`
export const ChatBotLine = styled.p`
align-self: flex-start;
padding: 5px;
color: black;
background-color: #a8b1bd;
border:1px black;
border-radius: 5px;
`

export const ChatUserLine = styled.p`
padding: 5px;
color: white;
background-color: #3287fc;
align-self: flex-end;
border:1px black;
border-radius: 5px;
`

export const MessageHistory = styled.div`
display: flex;
flex-direction: column-reverse;
min-height: 350px;
max-height: 350px;
overflow: hidden;
`
export const ChatInputStyles = styled.input`
width: 90%;
border-radius: 5px;
`
export const FormWrapper = styled.form`
position: relative;
margin 10px;
display: flex;
justify-content: center;
`
export const HiddenSubmit = styled.input`
display: hidden`