import React from 'react';
import {FilterType} from "./Filter";

type BanknotesType = {
    banknots: string,
    value: number,
    number: string
}

// type FilterType = 'Dollars' | 'RUBLS' | 'All';

type Filter2PropsType = {
    arr: BanknotesType[],
    callBack: (btnName: FilterType) => void,
}

const Filter2 = (props: Filter2PropsType) => {
    return (
        <>
            <ul>
                {props.arr.map((myBanknotes: any, index: number) => {
                    return(
                        <li key={index}>
                            <span>{myBanknotes.banknots} </span>
                            <span>{myBanknotes.value} </span>
                            <span> {myBanknotes.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>props.callBack('RUBLS')}>Только рубли</button>
            <button onClick={()=>props.callBack('Dollars')}>Только доллары</button>
            <button onClick={()=>props.callBack('All')}>Все</button>
        </>
    );
};

export default Filter2;