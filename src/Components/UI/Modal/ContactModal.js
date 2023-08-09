import { useState } from "react";
import styles from "./Modal.module.css";
const Modal = (props) => {
  const [page, setPage] = useState(1);

  const options1 = [
    "Select an option",
    "Fat Loss",
    "Muscle Gain",
    "Contest Prep",
    "Healthy Lifestyle",
  ];

  const options2 = ["Select an option", "Male", "Female"];

  const handleOptionChange = (event) => {
    if (page === 1) props.setSelectedGoal(event.target.value);
    if (page === 2) props.setSelectedGender(event.target.value);
  };

  return (
    <>
      <div className={styles.backDrop} />
      <div className={styles.popUp}>
        {page === 1 && (
          <>
            <h1>Let's Get Started</h1>
            <div>
              <h2>What's Your Goal?</h2>
              <select value={props.selectedGoal} onChange={handleOptionChange}>
                {options1.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setPage(2)}
                disabled={
                  props.selectedGoal === "Select an option" ? true : false
                }
              >
                Next
              </button>
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <h1>Let's Get Started</h1>
            <div>
              <h2>What's Your Gender?</h2>
              <select
                value={props.selectedGender}
                onChange={handleOptionChange}
              >
                {options2.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setPage(3)}
                disabled={
                  props.selectedGender === "Select an option" ? true : false
                }
              >
                Next
              </button>
            </div>
          </>
        )}

        {page === 3 && (
          <>
            <h1>Let's Get Started</h1>
            <div style={{ textAlign: "center" }}>
              <div>
                <label>Enter First Name*</label>
                <input type="text" placeholder="John" />
              </div>
              <div>
                <label>Enter Last Name*</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div>
                <label>Enter Phone No* </label>
                <input type="number" placeholder="+91 8574647384" />
              </div>
              <button>Submit</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Modal;
