import React, {ChangeEvent, MouseEvent, useState} from 'react';


type FullInputType = {
    addText: (str: string) => void
}

const FullInput = (props: FullInputType) => {
    let [text, setText] = useState('')

    const onChangeInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setText(evt.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addText(text)
        setText('')
    }

    return (
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={(onClickButtonHandler)}>+</button>
        </div>
    );
};

export default FullInput;