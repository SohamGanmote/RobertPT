import styles from "./Button1.module.css";
const Button1 = (props) => {
  return <button className={styles.btn}>{props.text}</button>;
};
export default Button1;
