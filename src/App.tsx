import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter);

    const hanndleIncrement = () => {
        dispatch(increment());
    };
    const hanndleDecrement = () => {
        dispatch(decrement());
    };
    console.log(count);
    return (
        <div>
            <h2>Ola, welcome</h2>
            <span>{count.count}</span>
            <button onClick={hanndleIncrement}>Increment</button>
            <button onClick={hanndleDecrement}>Decrement</button>
        </div>
    );
}

export default App;
