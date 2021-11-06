import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.css";
function Spinner() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={50} />
    </div>
  );
}

export default Spinner;
