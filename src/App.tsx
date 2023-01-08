import React from 'react';
import './App.css';
import Map from "./components/Map/Map";
import Map2 from "./components/Map/Map2";
import Buttons from "./components/Buttons/Buttons";
import Use from "./components/State/Use";
import Filter from "./components/Filter/Filter";
import Input1 from "./components/Inputs/Input1";

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
  return (
    <div className="App">
        {/*<Map students={students}/>*/}
        {/*<Map2 cars={topCars}/>*/}
        {/*<Buttons/>*/}
        {/*<Use/>*/}
        {/*<Filter/>*/}
        <Input1/>

    </div>
  );
}
export default App;
