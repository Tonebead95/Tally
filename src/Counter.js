import React, { useState } from "react";

function Counter(props) {
    
    return (
        <div className={props.counterName}>
            <h1>{props.title}</h1>
            <p>{props.count}</p>
            <Button onClick={() => props.buttonHandler()}>increase number</Button>
            <Button onClick={() => props.resetCounter()}>reset</Button>
        </div>
    );
}

export default Counter;