import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setText: (text: string) => void,
    text: string
}

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        props.setText(evt.currentTarget.value)
    }

    return (
        <div>
            <input value={props.text} onChange={onChangeInputHandler}/>
        </div>
    );
};

