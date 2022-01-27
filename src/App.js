import './App.css';
import React, { useState } from "react";
import Counter from './Counter'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";


function App() {
  const [counters, changeCounters] = useState([
    { count: 0, counterName: "counter0", title: "Counter0", key: 0 }
  ])

  const generateCounters = () => {
    return counters.map((counter) => {
      return <Counter
        count={counter.count}
        counterName={counter.counterName}
        title={counter.title} key={counter.key}
        buttonHandler={() => buttonHandler(count.key)}
        resetCounter={() => resetCounter(count.key)}
      />
    })
  }


const addCounter = () => {
  changeCounters((prev) => [...prev, {
    count: 0,
    key: prev.length,
    counterName: `counter ${prev.length}`,
    title: `Counter ${prev.length}`,

  }])
}
const removeCounter = () => {
  changeCounters((prev) => prev.slice(0, prev.length - 1))
}
const resetAllCounter = () => {
  console.log("reset all")
}

const buttonHandler = (id) => {
  const updated = counters.map(value => {
    if (value.key === id) {
      return { key: value.key, title: value.title, counterName, count: value.count + 1 }
    } else {
      return value;
    }
  })
  changeCounters(updated)
}
// const resetCounter = () => {

//   // changeCount(0);
// }


return (
  <Card className="App">
    <Card.body>
    {generateCounters()}
    <Button onClick={() => addCounter()}>add counter</Button>
    <Button onClick={() => removeCounter()}>remove counter</Button>
    <Button onClick={() => resetAllCounter()}>reset all</Button>
    </Card.body>
  </Card>
);
}

export default App;

