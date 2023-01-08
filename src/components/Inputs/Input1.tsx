import React, {useState} from 'react';
import FullInput from "./FullInput/FullInput";
import {Input} from "./FullInput/Input";
import {Button} from "./FullInput/Button";

type MessageType = {
    message: string
}
const Input1 = () => {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    let [text, setText] = useState('')

    const addMessage = (str: string) =>{
        let newText = {message: str}
        setMessage([newText, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(text);
        setText('')
    }

    return (
        <div>
            <>
                <Input setText={setText} text={text}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
            {
                message.map((el: MessageType, index: number) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })
            }
                {/*<FullInput addText={addMessage}/>*/}
            </>
        </div>
    );
};

export default Input1;