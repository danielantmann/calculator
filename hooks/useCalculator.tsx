import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "×",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");
  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const result = calculateSubResult();
    setPreviousNumber(`${result}`);
  }, [formula]);

  const clean = () => {
    setFormula("0");
    setNumber("0");
    setPreviousNumber("0");
    lastOperation.current = undefined;
  };

  const toggleSing = () => {
    if (!number.startsWith("-")) {
      return setNumber("-" + number);
    }
    setNumber(number.slice(1));
  };

  const deleteLast = () => {
    if (number.length <= 1 || (number.length === 2 && number.startsWith("-"))) {
      setNumber("0");
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith(".")) {
      setPreviousNumber(number.slice(0, -1));
    }
    setPreviousNumber(number), setNumber("0");
  };

  const operations = (operation: Operator) => {
    setLastNumber();
    lastOperation.current = operation;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");
    const num1 = +firstValue;
    const num2 = +secondValue;

    if (isNaN(num2)) {
      return num1;
    }

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.substract:
        return num1 - num2;

      case Operator.divide:
        return num1 / num2;

      case Operator.multiply:
        return num1 * num2;

      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    (lastOperation.current = undefined), setPreviousNumber("0");
  };
  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    formula,
    number,
    previousNumber,
    Operator,

    buildNumber,
    clean,
    toggleSing,
    deleteLast,
    operations,
    calculateResult,
  };
};
