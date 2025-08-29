import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter);

    const hanndleIncrement = (amount: number) => {
        dispatch(increment(amount));
    };
    const hanndleDecrement = () => {
        dispatch(decrement());
    };
    return (
        <div>
            <h2>Ola, welcome</h2>
            <span>{count.count}</span> <br />
            <button onClick={() => hanndleIncrement(1)}>Increment</button>
            <button onClick={() => hanndleIncrement(5)}>Increment by 5</button>
            <button onClick={hanndleDecrement}>Decrement</button>
        </div>
    );
}

export default App;
