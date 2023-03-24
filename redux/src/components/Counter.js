import classes from './Counter.module.css';
import { countActions } from '../store';
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const { count, showCount } = useSelector(state => {
    debugger;
    return state.counter
  });
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(countActions.increment())
  }
  const increaseHandler = () => {
    dispatch(countActions.increase(10))
  }
  const decrementHandler = () => {
    dispatch(countActions.decrement())
  }
  const reset = () => {
    dispatch(countActions.reset())
  }

  const toggleCounterHandler = () => {
    dispatch(countActions.toggle())
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCount && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREMENT by 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={reset}>Reset</button>
      </div>
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
