import styles from "./Footer.module.css";
const Footer = () => {
  const language = localStorage.getItem("language");
  return (
    <div className={styles.fort}>
      {language === "English" ? (
        <>
          <div className={styles.footer}>
            <div className={styles.address}>
              <h1>Address</h1>
              <p>Balagi Nagar, Kupwad Road, Sangli 416416.</p>
            </div>
            <div className={styles.services}>
              <h1>Services</h1>
              <p>Online Coaching</p>
              <p>Personal Training</p>
              <p>Group Training</p>
            </div>
            <div className={styles.support}>
              <h1>Support</h1>
              <p>Whatsapp</p>
              <p>Instagram</p>
              <p>Email</p>
            </div>
            <div>
              <h1>Language</h1>
              <p
                onClick={() => {
                  localStorage.setItem("language", "English");
                  window.location.reload();
                }}
              >
                English
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("language", "Hindi");
                  window.location.reload();
                }}
              >
                हिंदी
              </p>
            </div>
          </div>
          <div className={styles.credites}>
            <p>© COPYRIGHT 2023. ALL RIGHTS RESERVED.</p>
            <h1>
              Website Design by{" "}
              <a
                href="https://www.instagram.com/soham___g___/"
                target="_blank"
                rel="noreferrer"
              >
                Soham Ganmote
              </a>
            </h1>
          </div>
        </>
      ) : (
        <>
          <div className={styles.footer}>
            <div className={styles.address}>
              <h1>पता</h1>
              <p>बलागी नगर, कुपवाड रोड, सांगली 416416.</p>
            </div>
            <div className={styles.services}>
              <h1>सेवाएं</h1>
              <p>ऑनलाइन कोचिंग</p>
              <p>व्यक्तिगत प्रशिक्षण</p>
              <p>समूह प्रशिक्षण</p>
            </div>
            <div className={styles.support}>
              <h1>समर्थन</h1>
              <p>व्हाट्सएप</p>
              <p>इंस्टाग्राम</p>
              <p>ईमेल</p>
            </div>
            <div>
              <h1>भाषा</h1>
              <p
                onClick={() => {
                  localStorage.setItem("language", "English");
                  window.location.reload();
                }}
              >
                English
              </p>
              <p
                onClick={() => {
                  localStorage.setItem("language", "Hindi");
                  window.location.reload();
                }}
              >
                हिंदी
              </p>
            </div>
          </div>
          <div className={styles.credites}>
            <p>© कॉपीराइट 2023</p>
            <h1>
              वेबसाइट डिज़ाइन{" "}
              <a
                href="https://www.instagram.com/soham___g___/"
                target="_blank"
                rel="noreferrer"
              >
                सोहम गनमोटे
              </a>{" "}
              द्वारा.
            </h1>
          </div>
        </>
      )}
    </div>
  );
};
export default Footer;
