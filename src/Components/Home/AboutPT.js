import styles from "./AboutPT.module.css";
import pt from "../../Assets/Home/pt.jpg";
import Button1 from "../UI/Button1/Button1";
const AboutPT = () => {
  const language = localStorage.getItem("language");
  return (
    <>
      {language === "English" ? (
        <div className={styles.AboutPT}>
          <div>
            <h1>Online & Individual Personal Trainer in Sangli</h1>
            <p>
              Throughout my fitness journey, I’ve helped hundreds of people to
              improve their relationship with food and their bodies. But more
              than that, they've extended their lives and put the spark back
              into their training. While variety is essential to keep you
              interested - too much variety might inhibit your progress. That's
              why, as a personal trainer in Sangli, I want to help you stick
              with a training programme long enough that you see real results.
            </p>
            <p>
              When my clients start training, they see their time in the gym as
              something else to juggle. But they soon learn that the
              flexibility, nutritional coaching and support they receive has a
              positive knock-on effect into the rest of their lives. They're
              more productive at work, they're more present for their families
              and importantly, they start to like themselves again.
            </p>
            <Button1 text="About" />
          </div>
          <img src={pt} alt="" />
        </div>
      ) : (
        <div className={styles.AboutPT}>
          <div>
            <h1>सांगली में ऑनलाइन एवं व्यक्तिगत प्रशिक्षक</h1>
            <p>
              अपनी पूरी फिटनेस यात्रा के दौरान, मैंने सैकड़ों लोगों को भोजन और
              उनके शरीर के साथ संबंध सुधारने में मदद की है। लेकिन इससे भी अधिक,
              उन्होंने अपना जीवन बढ़ाया है और अपने प्रशिक्षण में चिंगारी वापस ला
              दी है। हालाँकि आपकी रुचि बनाए रखने के लिए विविधता आवश्यक है - बहुत
              अधिक विविधता आपकी प्रगति को बाधित कर सकती है। इसीलिए, सांगली में
              एक निजी प्रशिक्षक के रूप में, मैं आपको एक प्रशिक्षण कार्यक्रम के
              साथ लंबे समय तक जुड़े रहने में मदद करना चाहता हूँ ताकि आप वास्तविक
              परिणाम देख सकें।
            </p>
            <p>
              जब मेरे ग्राहक प्रशिक्षण शुरू करते हैं, तो वे जिम में बिताए गए समय
              को कुछ और ही साधन के रूप में देखते हैं। लेकिन उन्हें जल्द ही पता
              चल जाता है कि उन्हें मिलने वाले लचीलेपन, पोषण संबंधी कोचिंग और
              समर्थन का उनके बाकी जीवन पर सकारात्मक प्रभाव पड़ता है। वे काम में
              अधिक उत्पादक होते हैं, वे अपने परिवारों के लिए अधिक उपस्थित होते
              हैं और महत्वपूर्ण बात यह है कि वे फिर से खुद को पसंद करने लगते
              हैं।​
            </p>
            <Button1 text="पीटी के बारे में" />
          </div>
          <img src={pt} alt="" />
        </div>
      )}
    </>
  );
};
export default AboutPT;
