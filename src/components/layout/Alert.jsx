import "./../../styles/alert.css";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import alertContext from "./../../context/alert/AlertContext";
import { clearAlertAction } from "../../context/alert/action/alertActionCreator";
function Alert() {
  const { msgs, dispatch } = useContext(alertContext);
  const alertClose = (payload) => {
    dispatch(clearAlertAction(payload));
  };
  if (msgs.length == 0) {
    return null;
  } else {
    return (
      <div className="alert-list">
        {msgs.map((msg, i) => {
          return (
            <div
              className={`alert-box ${msg.type ? msg.type : "info"} `}
              key={i}
            >
              <p className="alert-msg">{msg.text}</p>
              <button
                className="alert-close"
                onClick={() => alertClose(msg.id)}
              >
                <FaTimes />
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Alert;
