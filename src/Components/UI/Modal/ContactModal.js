import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Modal.module.css";
const Modal = (props) => {
  const language = localStorage.getItem("language");

  const [page, setPage] = useState(1);

  let options1 = [];

  let options2 = [];

  if (language === "Hindi") {
    options1 = [
      "कोई विकल्प चुनें",
      "फैट लोस्स ",
      "मसल गेन ",
      "कांटेस्ट प्रेपरेशन ",
      "हेअल्थी लाइफस्टाइल ",
    ];

    options2 = ["कोई विकल्प चुनें", "लड़का", "लड़की"];
  } else {
    options1 = [
      "Select an option",
      "Fat Loss",
      "Muscle Gain",
      "Contest Prep",
      "Healthy Lifestyle",
    ];

    options2 = ["Select an option", "Male", "Female"];
  }

  const handleOptionChange = (event) => {
    if (page === 1) props.setSelectedGoal(event.target.value);
    if (page === 2) props.setSelectedGender(event.target.value);
  };

  const currentDate = new Date();

  return (
    <>
      <div className={styles.backDrop} onClick={props.closeModal} />
      {language === "English" ? (
        <div className={styles.popUp}>
          {page === 1 && (
            <>
              <h1>Let's Get Started</h1>
              <div>
                <h2>What's Your Goal?</h2>
                <select
                  value={props.selectedGoal}
                  onChange={handleOptionChange}
                >
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
                  <input
                    type="text"
                    placeholder="John"
                    value={props.details.firstName}
                    onChange={(e) =>
                      props.setDetails({
                        ...props.details,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Enter Phone No </label>
                  <input
                    type="number"
                    placeholder="+91 8574647384"
                    value={props.details.phone}
                    onChange={(e) =>
                      props.setDetails({
                        ...props.details,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Enter Your Age </label>
                  <input
                    type="number"
                    placeholder="18+"
                    value={props.details.age}
                    onChange={(e) =>
                      props.setDetails({
                        ...props.details,
                        age: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  onClick={() => setPage(4)}
                  disabled={!props.details.firstName ? true : false}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {page === 4 && (
            <>
              <h1>Let's Get Started</h1>
              <div style={{ textAlign: "center" }}>
                <h2>Select a Date</h2>
                <DatePicker
                  selected={props.selectedDate}
                  onChange={(date) => props.setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select a date"
                  minDate={currentDate}
                />
                {props.selectedDate && (
                  <p>You selected: {props.selectedDate.toLocaleDateString()}</p>
                )}
                <br />
                <button onClick={props.submitWhatsApp}>Submit</button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className={styles.popUp}>
          {page === 1 && (
            <>
              <h1>आएँ शुरू करें</h1>
              <div>
                <h2>आपका लक्ष्य क्या है?</h2>
                <select
                  value={props.selectedGoal}
                  onChange={handleOptionChange}
                >
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
                  अगला
                </button>
              </div>
            </>
          )}

          {page === 2 && (
            <>
              <h1>आएँ शुरू करें</h1>
              <div>
                <h2>तुम लड़का हो या लड़की?</h2>
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
              <h1>आएँ शुरू करें</h1>
              <div style={{ textAlign: "center" }}>
                <div>
                  <label>प्रथम नाम दर्ज करें*</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={props.details.firstName}
                    onChange={(e) =>
                      props.setDetails({
                        ...props.details,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>फ़ोन नंबर दर्ज करें</label>
                  <input
                    type="number"
                    placeholder="+91 8574647384"
                    value={props.details.phone}
                    onChange={(e) =>
                      props.setDetails({
                        ...props.details,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>अपनी आयु दर्ज करें</label>
                  <input
                    type="number"
                    placeholder="18+"
                    value={props.details.age}
                    onChange={(e) =>
                      props.setDetails({
                        ...props.details,
                        age: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  onClick={() => setPage(4)}
                  disabled={!props.details.firstName ? true : false}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {page === 4 && (
            <>
              <h1>आएँ शुरू करें</h1>
              <div style={{ textAlign: "center" }}>
                <h2>तारीख</h2>
                <DatePicker
                  selected={props.selectedDate}
                  onChange={(date) => props.setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select a date"
                  minDate={currentDate}
                />
                <br />
                <button onClick={props.submitWhatsApp}>Submit</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default Modal;
