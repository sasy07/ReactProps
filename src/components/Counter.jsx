
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

const Counter = (props) => {
    console.log(props);

    return (
        <div>
            <p>شمارنده : {props.count}</p>
            <h3>{props.children}</h3>
        </div>
    )
}

export default Counter;