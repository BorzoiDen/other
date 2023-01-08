import React, {useState} from 'react';
import Button from "../Buttons/Button";
import Filter2 from "./Filter2";

export type FilterType = 'Dollars' | 'RUBLS' | 'All';

const Filter = () => {

    const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
])

    let [filter, setFilter] = useState<FilterType>('All');

    let currentMoney = money;
    if(filter === 'Dollars'){
        currentMoney = money.filter(myMoney => myMoney.banknots === 'Dollars');
    } else if(filter === 'RUBLS'){
        currentMoney = money.filter(myMoney => myMoney.banknots === 'RUBLS');
    } else {
        currentMoney = money;
    }

    const onClickFilterHandler = (btnName: FilterType) => {
        setFilter(btnName);
    }

    return (
        <Filter2 arr={currentMoney} callBack={onClickFilterHandler}/>
    );
};

export default Filter;
