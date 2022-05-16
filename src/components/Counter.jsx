import {Component} from "react";

class Counter extends Component {

    //Stateless
    //Statefull

    static defaultProps ={
        count : 140
    }
    render() {
        console.log(this.props);
        const {count} = this.props;

        return (
            <div>
                <p>شمارنده : {count }</p>
            </div>
        )
    }
}

// const Counter = (props) => {
//     console.log(props);
//
//     return (
//         <div>
//             <p>شمارنده : {props.count || 90}</p>
//             <h3>{props.children}</h3>
//         </div>
//     )
// }

// Counter.defaultProps={
//     count : 25
// }
export default Counter;