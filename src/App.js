import { useState } from "react";
import { data } from "./data.js";

const App = () => {
  const [currentDetails, setCurrentDetails] = useState(data[0]);
  const tabHandler = (id) => {
    const newId = id;
    setCurrentDetails(data[newId]);
  };
  return (
    <section>
      <div className="tabs_container">
        <ul className="tabs">
          {data.map((item) => {
            return (
              <button key={item.id} onClick={() => tabHandler(item.id)}>
                {currentDetails.id === item.id ? (
                  <li className="active_tab">{item.name.toUpperCase()}</li>
                ) : (
                  <li>{item.name.toUpperCase()}</li>
                )}
              </button>
            );
          })}
        </ul>
      </div>
      <Details item={currentDetails} />
    </section>
  );
};

const Details = (props) => {
  const { name, designation, period, discription } = props.item;
  return (
    <article>
      <h1>{designation}</h1>
      <h2>{name.toUpperCase()}</h2>
      <h3>
        {period.start} - {period.end}
      </h3>
      <ul className="discription">
        {discription.map((item) => {
          return <li key={Math.random()}>{item}</li>;
        })}
      </ul>
    </article>
  );
};

export default App;
