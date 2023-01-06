import React from 'react';


type CarType = {
    manufacturer: string,
    model: string,
}

type CarsType = {
    cars: CarType[]
}

const Map2 = (props: CarsType) => {
    return (
        <table>
            {props.cars.map((car, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
};

export default Map2;