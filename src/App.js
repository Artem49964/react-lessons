import {useDispatch, useSelector} from "react-redux";

function App() {


    const dispatch = useDispatch()

    const store = useSelector(state => state)

    const increment = () => {
        dispatch({type:'INC'})
    }

    const decrement = () => {
        dispatch({type:'DEC'})
    }


    const res = () => {
        dispatch({type:'RES'})
    }


    return (
        <div>

            <h1>{store}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={res}>reset</button>

        </div>
    );
}

export default App;
