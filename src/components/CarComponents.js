import React, {Component} from 'react';
import './car.css';

class CarComponents extends Component {


    render() {

        let {item} = this.props;

        return (
            <div className={'carColor'}>
                {item.owner} - {item.model} - {item.dtp.toString()}
            </div>
        );
    }
}

export default CarComponents;
