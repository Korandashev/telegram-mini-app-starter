export default () => {
  const handleClose = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <div style="padding: 20px">
      Mini app starter
      <div style="margin-top: 20px">
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
