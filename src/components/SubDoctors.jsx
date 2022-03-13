import { useContext } from "react";
import usercontext from "../context/user/UserContex";
import Sub_item from "./Sub_item";

function SubDoctors() {
  const { subDoctors } = useContext(usercontext);
  return (
    <div className="subdoctors-box">
      <h3>sub-Doctors:</h3>
      {subDoctors.length == 0 ? (
        "there is no Doctors"
      ) : (
        <ul>
          {subDoctors.map((elem, i) => (
            <Sub_item key={i} name={elem} cat={"subDoctors"} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubDoctors;
