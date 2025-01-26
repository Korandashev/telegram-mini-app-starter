import * as styles from "./Main.module.css";

export default () => {
  const handleClose = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <div className={styles.page}>
      Mini app starter
      <div style="margin-top: 20px">
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
