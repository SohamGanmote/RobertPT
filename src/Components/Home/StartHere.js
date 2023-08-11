import styles from "./StartHere.module.css";
import Button1 from "../UI/Button1/Button1";
import pt from "../../Assets/Home/home.jpg";
import useWhatsAppModal from "../WhatsAppModal/useWhatsAppModal";
import Modal from "../UI/Modal/ContactModal";
const StartHere = () => {
  const language = localStorage.getItem("language");

  const {
    displayModal,
    selectedGoal,
    selectedGender,
    details,
    selectedDate,
    openModal,
    closeModal,
    setSelectedGoal,
    setSelectedGender,
    setDetails,
    setSelectedDate,
    submitWhatsApp,
  } = useWhatsAppModal();

  return (
    <>
      {language === "English" ? (
        <div className={styles.home}>
          <div className={styles.description}>
            <h1>Take Your Fitness</h1>
            <h2>To The Next Level</h2>
            <p>
              PREMIUM ONLINE & INDIVIDUAL PERSONAL TRAINING FAREHAM WITH ROBERT
              AWALE
            </p>
            <Button1 text="Start Here" onClick={openModal} />
          </div>
          <img src={pt} alt="" />
        </div>
      ) : (
        <div className={styles.home}>
          <div className={styles.description}>
            <h1>अपनी फिटनेस को</h1>
            <h2>अगले स्तर तक ले जाएं</h2>
            <p>
              रॉबर्ट अवले सर के साथ ऑनलाइन और व्यक्तिगत व्यक्तिगत प्रशिक्षण लें
            </p>
            <Button1 text="शुरू करें" onClick={openModal} />
          </div>
          <img src={pt} alt="" />
        </div>
      )}
      {displayModal && (
        <Modal
          selectedGoal={selectedGoal}
          selectedGender={selectedGender}
          setSelectedGoal={setSelectedGoal}
          setSelectedGender={setSelectedGender}
          details={details}
          setDetails={setDetails}
          submitWhatsApp={submitWhatsApp}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          closeModal={closeModal}
        />
      )}
    </>
  );
};
export default StartHere;
