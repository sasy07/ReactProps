import {Component} from "react";

// class Counter extends Component {
//
//     //Stateless
//     //Statefull
//     render() {
//         console.log(this.props);
//         const {count} = this.props;
//
//         return (
//             <div>
//                 <p>شمارنده : {count}</p>
//             </div>
//         )
//     }
// }

const Counter = ({count}) => {
    console.log(count);

    return (
        <div>
            <p>شمارنده : {count}</p>
        </div>
    )
}

export default Counter;