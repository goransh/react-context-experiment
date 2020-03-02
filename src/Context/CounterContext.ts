import {useState} from "react";
import {createSuperContext} from "./SuperContext";

export interface CounterContext {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const [counter, useCounter] = createSuperContext<CounterContext>(() => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(Math.max(0, count - 1));

    return {count, increment, decrement};
});
