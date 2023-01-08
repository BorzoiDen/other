import React, {MouseEvent} from 'react';
import Button from "./Button";


const Buttons = () => {
    const ButtonFoo1 = (name: string, num: number) => {
        console.log('действие для кнопки ' + name + ' с номером ' + num);
    }

    const ButtonFoo2 = (name: string, num: number) => {
        console.log('действие для кнопки ' + name + ' с номером ' + num);
    }
    const ButtonFoo3 = () => {
        console.log("Тупая кнопка");
    }
    return (
        <>
            <Button name={'First'} callBack={()=>ButtonFoo1('1', 1)}/>
            <Button name={'Second'} callBack={()=>ButtonFoo2('2', 2)}/>    {/*данные передаются*/}
            <Button name={'Stupid'} callBack={ButtonFoo3}/> {/*данные не передаются*/}
        </>
    );
}
export default Buttons;



// const [money, setMoney] = useState([
//     { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//     { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//     { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
// ])