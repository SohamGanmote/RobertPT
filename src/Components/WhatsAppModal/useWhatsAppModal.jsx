import { useState } from "react";
import Text from "../Footer/text";

function useWhatsAppModal() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("Select an option");
  const [selectedGender, setSelectedGender] = useState("Select an option");
  const [details, setDetails] = useState({});
  const [selectedDate, setSelectedDate] = useState();

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  const submitWhatsApp = () => {
    const text = Text(
      details.firstName,
      selectedGender,
      selectedGoal,
      details.phone,
      details.age,
      selectedDate
    );
    const phoneNo = "7775920250";
    window.location.replace(
      `https://api.whatsapp.com/send?phone=${phoneNo}&text=${text}`
    );
  };

  return {
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
  };
}

export default useWhatsAppModal;
