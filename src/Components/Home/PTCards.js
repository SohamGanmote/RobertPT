import styles from "./PTCards.module.css";
import pullup from "../../Assets/Home/PTCards/pullups.png";
import eating from "../../Assets/Home/PTCards/healthyEating.png";
import dumbell from "../../Assets/Home/PTCards/dumbbell.png";
const language = localStorage.getItem("language");
const Cards = (props) => {
  return (
    <>
      {language === "English" ? (
        <div className={styles.card}>
          <img src={props.src} alt="" />
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          <span>LEARN MORE</span>
        </div>
      ) : (
        <div className={styles.card}>
          <img src={props.src} alt="" />
          <h1>{props.h1h}</h1>
          <p>{props.ph}</p>
          <span>अधिक जानें</span>
        </div>
      )}
    </>
  );
};
const PTCards = () => {
  return (
    <>
      <div className={styles.parentCards}>
        <div className={styles.cardsDiv}>
          <Cards
            src={pullup}
            h1="ATHLETIC FIGURE"
            p="If your busy professional life pushed your physical fitness to the backseat, there is a solution. The RCotterill PT  online plans will help you achieve your desired body image in no time."
            h1h="एथलेटिक फिगर"
            ph="
        यदि आपके व्यस्त पेशेवर जीवन ने आपकी शारीरिक फिटनेस को पीछे धकेल दिया है, तो इसका एक समाधान है। रॉबर्ट पीटी ऑनलाइन योजनाएं."
          />
          <Cards
            src={dumbell}
            h1="CONFIDENCE BOOST"
            p="We don't only focus on the image in the mirror, but also how you feel in your skin. Achieving milestones with your body will transfer into your daily life as increased confidence."
            h1h="विश्वास वर्धन"
            ph="
        हम न केवल दर्पण में छवि पर ध्यान केंद्रित करते हैं, बल्कि इस पर भी ध्यान केंद्रित करते हैं कि आप अपनी त्वचा में कैसा महसूस करते हैं"
          />
          <Cards
            src={eating}
            h1="QUALITY OF LIFE"
            p="The ultimate goal is for you to enjoy your life to the fullest, engage in social situations confidently and take up events you always wanted without limitations of your body."
            h1h="जीवन स्तर"
            ph="आप अपने जीवन का भरपूर आनंद लें, सामाजिक परिस्थितियों में आत्मविश्वास से शामिल हों और उन घटनाओं को अपनाएं जो आप हमेशा से चाहते थे।"
          />
        </div>
      </div>
    </>
  );
};
export default PTCards;
