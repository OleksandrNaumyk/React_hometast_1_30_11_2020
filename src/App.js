import React, {Component} from 'react';
import CarComponents from './components/CarComponents';

class App extends Component {

    car = [
        {model: 'Volvo', owner: 'Sasha', dtp: false},
        {model: 'BMW', owner: 'Vasya', dtp: true},
        {model: 'Mercedes', owner: 'Oleh', dtp: false},
        {model: 'Opel', owner: 'Vasya', dtp: true},
        {model: 'Citroen', owner: 'Stepan', dtp: false},
        {model: 'BMW', owner: 'Sergiy', dtp: false},
        {model: 'Volvo', owner: 'Stepan', dtp: true},
        {model: 'Mercedes', owner: 'Sasha', dtp: true},
        {model: 'Lada', owner: 'Vasya', dtp: true},
    ];

    render() {
        return (
            <div>
                {
                    this.car.map((car) => {
                        return (<CarComponents item={car}/>)
                    })
                }
            </div>
        );
    }
}

export default App;
