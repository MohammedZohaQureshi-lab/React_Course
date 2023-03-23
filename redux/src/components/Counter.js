import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const toggleCounterHandler = () => { };
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", amount: 5 })
  }
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={incrementHandler}>INCREMENT by 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.count}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//           <button onClick={this.incrementHandler.bind(this)}>INCREMENT by 5</button>
//           <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProp = state => {
//   return {
//     count: state.count
//   }
// }
// const mapDispatchToProp = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' })
//   }
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Counter);
