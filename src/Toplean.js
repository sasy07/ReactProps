import {Component} from 'react';

import Counter from "./components/Counter";

import './Toplearn.css';

class Toplearn extends Component {

    render() {
        return (
            <div className="Toplearn">
                <h1>شمارنده من</h1>
                <br/>
                <Counter count={5} firstName="Sasan"/>
                <Counter myArray={[0,1,2,5]} isLoggedIn={true}/>
                <Counter count={10}>
                    این شمارنده من است
                </Counter>
            </div>
        )
    }
}

// const Toplearn = () => {
//     return (
//         <div className="Toplearn">
//             <h1>شمارنده من</h1>
//             <br />
//             <Counter />
//         </div>
//     )
// }

export default Toplearn;