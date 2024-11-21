import React from "react";
import { useEffect, useState } from "react";
const Todo = () => {

    const [arr, setArr] = useState([]);
    let [obj, setObj] = useState({});
    // const[count,setCount] = useState(1);

    const onChangeHandler = (event) => {
        setObj((prevObj) => ({ ...prevObj, [event.target.name]: event.target.value }))
    }
    const onAddHandler = () => {
        setArr((prevArr) => {
            if(!prevArr.some((s)=>s?.todo === obj?.todo)){
                prevArr.push(obj);
            };
            return [...prevArr]
        });
        setObj((prevObj) => ({ ...prevObj, todo: "" }));
    };

    const onRemoveHandler = (currentItem) => {
        setArr((prevArr) => {
            const currentIndex = prevArr.findIndex((f)=>f.todo===currentItem?.todo);
            if (prevArr.some((s) => s?.todo === prevArr[currentIndex]?.todo)) {
                prevArr.splice(currentIndex,1);
            }
            return [...prevArr];
        })
    }
    const List = arr && arr.map((item, index) => {
        return <li key={index}>{item.todo}<button type="button" onClick={() => onRemoveHandler(item)}>X</button></li>
    });
    return (
        <>
            <input
                type="input"
                name="todo"
                value={obj?.todo}
                onChange={onChangeHandler}
            ></input>
            <button
                type="button"
                onClick={onAddHandler}
            >
                Add
            </button>
            <ol style={{ listStyle: "number" }}>{List}</ol>
        </>
    );
};

export default Todo;