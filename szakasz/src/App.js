import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    { name: "Teszt kész", id: 1, isDone: true },
    { name: "Kenyeret venni", id: 2, isDone: true },
    { name: "Mosni", id: 3, isDone: false },
  ]);
  const [name, setName] = useState("");

  const addList = (name) => {
    const data = {
      name: name,
      id: Math.floor(Math.random() * 100000),
      isDone: false,
    };
    setList([data, ...list]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
  };

  const add = () => {
    addList(name);
    setName("");
  };

  const doneTodo = (id) => {
    const done = list.find((lis) => id == lis.id);
    done.isDone = !done.isDone;
    console.log(done.isDone);
    setList([...list]);
  };

  const removeTodo = (id) => {
    const newList = list.filter((lis) => id !== lis.id);
    setList([...newList]);
  };

  return (
    <div className="container">
      <div className="row col m-3">
        <div className="col-4"></div>
        <div className="col-4">
          <div>
            <form onSubmit={handleSubmit} className="valami">
              <input
                placeholder="Mi lesz a ToDo ?"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <button className="btn btn-primary" onClick={() => add()}>
                Hozzáadás
              </button>
            </form>
          </div>
          {list.map((lis) => (
            <div key={lis.id} className={lis.isDone ? "nincskesz" : "kesz"}>
              <input type="checkbox" onChange={() => doneTodo(lis.id)}></input>
              {lis.name}
              <button
                className="btn btn-danger"
                onClick={() => removeTodo(lis.id)}
              >
                Törlés
              </button>
            </div>
          ))}
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
