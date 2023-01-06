import React, {MouseEvent} from 'react';


const Buttons = () => {
    const onClickHandler = (name: string) => {
        console.log(name);
    }
    // {   const foo1 = () => {
    //         console.log(100200);
    //     }
    //
    //     const foo2 = (num: number) => {
    //         console.log(num);
    //     }
    // }
    return (
        <div>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Igor')}>MyButton-1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>MyButton-2</button>
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}

        </div>
    );
}
export default Buttons;