import React, { useContext } from 'react';
import { CalculatorContext } from 'context';
import { evaluate } from 'mathjs';

const Keypad = () => {
  const { value, setValue } = useContext(CalculatorContext);
  return (
    <div className="keypad">
      <button className="div1" name="AC" onClick={() => setValue('')}>
        AC
      </button>
      <button
        className="div2"
        name="("
        onClick={(e) => setValue(value + e.target.name)}
      >
        (
      </button>
      <button
        className="div3"
        name=")"
        onClick={(e) => setValue(value + e.target.name)}
      >
        )
      </button>
      <button
        className="div4"
        name="/"
        onClick={(e) => setValue(value + e.target.name)}
      >
        /
      </button>
      <button
        className="div5"
        name="7"
        onClick={(e) => setValue(value + e.target.name)}
      >
        7
      </button>
      <button
        className="div6"
        name="8"
        onClick={(e) => setValue(value + e.target.name)}
      >
        8
      </button>
      <button
        className="div7"
        name="9"
        onClick={(e) => setValue(value + e.target.name)}
      >
        9
      </button>
      <button
        className="div8"
        name="*"
        onClick={(e) => setValue(value + e.target.name)}
      >
        x
      </button>
      <button
        className="div9"
        name="4"
        onClick={(e) => setValue(value + e.target.name)}
      >
        4
      </button>
      <button
        className="div10"
        name="5"
        onClick={(e) => setValue(value + e.target.name)}
      >
        5
      </button>
      <button
        className="div11"
        name="6"
        onClick={(e) => setValue(value + e.target.name)}
      >
        6
      </button>
      <button
        className="div12"
        name="-"
        onClick={(e) => setValue(value + e.target.name)}
      >
        -
      </button>
      <button
        className="div13"
        name="1"
        onClick={(e) => setValue(value + e.target.name)}
      >
        1
      </button>
      <button
        className="div14"
        name="2"
        onClick={(e) => setValue(value + e.target.name)}
      >
        2
      </button>
      <button
        className="div15"
        name="3"
        onClick={(e) => setValue(value + e.target.name)}
      >
        3
      </button>
      <button
        className="div16"
        name="+"
        onClick={(e) => setValue(value + e.target.name)}
      >
        +
      </button>
      <button
        className="div17"
        name="0"
        onClick={(e) => setValue(value + e.target.name)}
      >
        0
      </button>
      <button
        className="div18"
        name="."
        onClick={(e) => setValue(value + e.target.name)}
      >
        .
      </button>
      <button
        className="div19"
        name="="
        onClick={() => setValue(evaluate(value))}
      >
        =
      </button>
    </div>
  );
};

export default Keypad;
