import React from 'react';

type ButtonPropsType = {
    name: string,
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const{name, callBack}=props;
    const onClickButtonHandler = () => {
        {callBack()}
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>{name}</button>
        </div>
    );
};
