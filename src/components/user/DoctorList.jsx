import { useContext } from 'react';
import usercontext from '../../context/user/UserContext';
import ListItem from './ListItem';

function DoctorList() {
  const { subDoctors } = useContext(usercontext);
  return (
    <>
      <h3>sub-Doctors:</h3>
      {subDoctors.length === 0 ? (
        'there are no Doctors'
      ) : (
        <ul>
          {subDoctors.map((elem, i) => (
            <ListItem key={i} name={elem} cat={'subDoctors'} />
          ))}
        </ul>
      )}
    </>
  );
}

export default DoctorList;
