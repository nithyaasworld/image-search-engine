import { useState } from "react";
import "./App.css";
import Notification from './Notification';

function App() {
  let [showNotificatoin, setShowNotification] = useState(false);
  let [message, setMessage] = useState("");
  let [isError, setIsError] = useState(false);

  const showNotificationMsg = () => {
    setIsError(false);
    setMessage("I am notification popup");
    setShowNotification(true);
  }
  const showErrorPopup = () => {
    setIsError(true);
    setMessage("I am an error popup");
    setShowNotification(true);
  }
  return (
    <>
    <Notification error={isError} text={message} showNotificatoin={showNotificatoin} setShowNotification={setShowNotification} />
    <div className="button-container">
      <div onClick={showNotificationMsg} class="button notification-message">Notification message</div>
      <div onClick={showErrorPopup} class="button notification-alert">Notification alert</div>
    </div>
    </>
  );
}

export default App;
