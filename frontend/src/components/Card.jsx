import { useEffect, useRef, useState } from "react";
import Button from "./Button";

function Card({ format }) {
  const [formattedString, setFormattedString] = useState("");
  const [enteredString, setEnteredString] = useState("");
  const handleChange = (e) => {
    setEnteredString(e.target.value);
  };

  useEffect(() => {
    setFormattedString(format(enteredString));
  }, [enteredString]);

  return (
    <>
      <div className="flex justify-center">
        <div
          className="max-w-sm w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm
         dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex flex-col gap-5">
            <div href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Profit Calculator
              </h5>
            </div>

            <input
              className="bg-gray-700 rounded-2xl p-3"
              onChange={handleChange}
              defaultValue={enteredString}
              placeholder="paste here..."
              autoFocus
            />
            <div>{formattedString}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
