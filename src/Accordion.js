import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test 1"
        num={22}
        key="test 1"
      >
        <p>ciaooooooooooooo</p>
        <ul>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
          <li>ciao</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
