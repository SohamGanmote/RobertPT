import styles from "./BeBetter.module.css";
import PTCards from "./PTCards";
const BeBetter = () => {
  const language = localStorage.getItem("language");
  return (
    <>
      {language === "English" ? (
        <div className={styles.BeBetter}>
          <h1>BE A BETTER YOU</h1>
          <h2>PERSONAL TRAINING IN SANGLI</h2>
          <p>
            Whether you want to lose weight, tone up, gain lean muscle or you
            are happy as you are but would like a healthier lifestyle, Robert PT
            is the right choice for you. Everyone wants to feel comfortable in
            their own skin, therefore, even if you are working a busy schedule,
            finding it hard to meet your fitness goals or would like to get fit,
            Robert PT gives you the flexibility to reach your full potential
            with a variety of different online and individual personal training
            plans.
          </p>
        </div>
      ) : (
        <div className={styles.BeBetter}>
          <h1>बेहतर बनें</h1>
          <h2>सांगली में व्यक्तिगत प्रशिक्षण</h2>
          <p>
            चाहे आप वजन कम करना चाहते हों, टोन अप करना चाहते हों, दुबली
            मांसपेशियाँ बढ़ाना चाहते हों ,रॉबर्ट पीटी आपके लिए सही विकल्प है. हर
            कोई आरामदायक महसूस करना चाहता है उनकी अपनी त्वचा, इसलिए, भले ही आप
            काम में व्यस्त हों, आपको अपने फिटनेस लक्ष्यों को पूरा करने में
            कठिनाई हो रही है या आप फिट होना चाहेंगे, रॉबर्ट पीटी आपको अपनी पूरी
            क्षमता तक पहुंचने की सुविधा देता है विभिन्न प्रकार के ऑनलाइन और
            व्यक्तिगत व्यक्तिगत प्रशिक्षण के साथ.
          </p>
        </div>
      )}
      <PTCards />
    </>
  );
};
export default BeBetter;
