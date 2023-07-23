import styles from "./Footer.module.css";
import Text from "./text";
const Footer = () => {
  const language = localStorage.getItem("language");
  let text = Text("Soham", "male", "muscle gain", 9325293606);
  const phoneNo = "917775920250";
  return (
    <div className={styles.fort}>
      {language === "English" ? (
        <>
          <div className={styles.footer}>
            <div className={styles.address}>
              <h1>Address</h1>
              <p>Madvnagar, Sangli 416416.</p>
            </div>
            <div className={styles.services}>
              <h1>Services</h1>
              <p>Online Coaching</p>
              <p>Personal Training</p>
              <p>Group Training</p>
            </div>
            <div className={styles.support}>
              <h1>Support</h1>
              <p>
                <a
                  href={`https://api.whatsapp.com/send?phone=${phoneNo}&text=${text}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Whatsapp
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/robertawale333/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbFbLNXhkWGHnzFXbWZZcVKlHZZXNTMhrlZCvmzMMcBQTHjVmKrtjWSpdthMgGCnxdcQrQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </p>
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
              Website Design by
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
              <p>माधवनगर, सांगली 416416.</p>
            </div>
            <div className={styles.services}>
              <h1>सेवाएं</h1>
              <p>ऑनलाइन कोचिंग</p>
              <p>व्यक्तिगत प्रशिक्षण</p>
              <p>समूह प्रशिक्षण</p>
            </div>
            <div className={styles.support}>
              <h1>समर्थन</h1>
              <p>
                <a
                  href={`https://api.whatsapp.com/send?phone=${phoneNo}&text=${text}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  व्हाट्सएप
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/robertawale333/"
                  target="_blank"
                  rel="noreferrer"
                >
                  इंस्टाग्राम
                </a>
              </p>
              <p>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbFbLNXhkWGHnzFXbWZZcVKlHZZXNTMhrlZCvmzMMcBQTHjVmKrtjWSpdthMgGCnxdcQrQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  ईमेल
                </a>
              </p>
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
