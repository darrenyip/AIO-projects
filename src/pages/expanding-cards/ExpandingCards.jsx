import { useState } from "react";
// import "./expanding-cards.css";
import { Panel, Container } from "./expandStyles";
import { Data } from "./data";
function ExpandingCards(props) {
  const [activeId, setActiveId] = useState(1);

  return (
    <Container className="container">
      {Data.map((el, index) => (
        <Panel
          key={index}
          isActive={activeId == el.id}
          onClick={() => setActiveId(el.id)}
          style={{ backgroundImage: `url(${el.url})` }}
        >
          <h3 className="h3">{el.title}</h3>
        </Panel>
      ))}
    </Container>
  );
}

export default ExpandingCards;
