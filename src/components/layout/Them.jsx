import "../../styles/them.css";
import { useRef } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useContext } from "react";
import utillsContext from "../../context/utills/utillsContext";
import { setThemAction } from "../../context/utills/action/utillsActionCreator";
function Them() {
  const{dispatch,them}=useContext(utillsContext)
  const themContainer = useRef();
  const handleToggleThem = (e) => {
    themContainer.current.classList.toggle('show')
  };
  const changeThemColor = (e) => {
    dispatch(setThemAction(e.target.classList[0]))
console.log(them)
    const changeCssVar = (varName, varValue) => {
      document.documentElement.style.setProperty(varName, varValue);
    };
    switch (e.target.classList[0]) {
      case "dark":
        changeCssVar("--body-bg-clr", "0,0,0");
        changeCssVar("--primary-clr", "255,255,255");
        changeCssVar("--section-bg-clr", "46, 46, 51");
        changeCssVar("--border-clr", "100, 100, 100");
        changeCssVar("--hover-clr", "255,255,255");
        break;
      case "light":
        changeCssVar("--body-bg-clr", "234,235,235");
        changeCssVar("--primary-clr", "15,23,42");
        changeCssVar("--section-bg-clr", "255,255,255");
        changeCssVar("--border-clr", "51, 65, 85");
        changeCssVar(" --tw-shadow-color", " #000");

        break;
      case "red":
        changeCssVar("--item-bg-clr", "220,38,38");
        break;
      case "sky":
        changeCssVar("--item-bg-clr", "14,165,233");
        break;
      case "indigo":
        changeCssVar("--item-bg-clr", "99,102,241");
        break;
      case "green":
        changeCssVar("--item-bg-clr", "34,197,94");
        break;
      case "blue":
        changeCssVar("--item-bg-clr", "59,130,246");
        break;
      default:
        changeCssVar(`--item-bg-clr`, "220,38,38");
        break;
    }
  };
  return (
    <div className="them-container" ref={themContainer}>

      <div
        onClick={handleToggleThem}
        className="them-toggle"
      >
        <FaAngleLeft />
      </div>
      <h3 className="them-title">Select your favorit!</h3>
      <div className="them-status">
        <div className="dark them-item " onClick={changeThemMode}>
          Dark
        </div>
        <div className="light them-item " onClick={changeThemMode}>
          Light
        </div>
      </div>
      <ul className="them-color">
        <div className="red border-red-600 them-item " onClick={changeThemColor}>
          red
        </div>
        <div className="sky border-sky-500 them-item " onClick={changeThemColor}>
          sky
        </div>
        <div
          className="indigo border-indigo-500 them-item "
          onClick={changeThemColor}
        >
          indigo
        </div>
        <div
          className="green border-green-500  them-item "
          onClick={changeThemColor}
        >
          green
        </div>
        <div className="blue border-blue-500  them-item " onClick={changeThemColor}>
          blue
        </div>
      </ul>
    </div>
  );
}

export default Them;
