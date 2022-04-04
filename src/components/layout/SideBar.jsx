import './../../styles/sidebar.css';
import {
  FaGitkraken,
  FaAngleRight,
  FaIdCard,
  FaSlidersH,
  FaUserGraduate,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import utillsContext from '../../context/utills/utillsContext';
import { toggleSidebarAction } from '../../context/utills/action/utillsActionCreator';

function SideBar() {
  const { dispatch, sidebarShow } = useContext(utillsContext);

  const sideBarToggle = () => {
    dispatch(toggleSidebarAction());
  };

  const SideBarItem = ({ tooltip, to = '#', icon, className, title }) => {
    return (
      <li className={`sidebar-item group   ${className}`}>
        {tooltip && (
          <div
            className={`tooltip ${
              sidebarShow ? '' : 'group-hover:scale-100'
            } ml-3 p-4 tooltip `}
          >
            {tooltip}
          </div>
        )}

        <Link to={to}>
          {icon}
          <h3 className='sidebar_item-title'>{title}</h3>
        </Link>
      </li>
    );
  };

  return (
    <section className={`sidebar ${sidebarShow ? '' : 'sidebar-small'}`}>
      <div className='sidebar-brand  '>
        <FaGitkraken size={30} />
        <span className='sidebar-title'>
          <span className='sidebar_item-title'>Material Dashboard</span>
        </span>
      </div>
      <div className='sidebar-list noscrollbar '>
        <ul className='sidebar-links'>
          <SideBarItem
            className='active'
            icon={<FaUserGraduate size={20} />}
            title='Dashboard'
            tooltip={'Dashboard'}
          />
          <SideBarItem
            icon={<FaIdCard size={20} />}
            title='User-Profile'
            tooltip='Profiled'
          />
          <SideBarItem
            icon={<FaSlidersH size={20} />}
            title='Settings'
            tooltip='Settings'
          />
        </ul>
        <div className='sidebar-title'>
          <h2 className='sidebar_item-title'>Category 1</h2>
        </div>
        <ul className='sidebar-links'>
          <SideBarItem
            className=''
            icon={<FaUserGraduate size={20} />}
            title='Dashboard'
            tooltip={'Dashboard'}
          />
          <SideBarItem
            icon={<FaIdCard size={20} />}
            title='User-Profile'
            tooltip='Profiled'
          />
          <SideBarItem
            icon={<FaSlidersH size={20} />}
            title='Settings'
            tooltip='Settings'
          />
        </ul>
        <div className='sidebar-title'>
          <h2 className='sidebar_item-title'>Category 2</h2>
        </div>
        <ul className='sidebar-links'>
          <SideBarItem
            className=''
            icon={<FaUserGraduate size={20} />}
            title='Dashboard'
            tooltip={'Dashboard'}
          />
          <SideBarItem
            icon={<FaIdCard size={20} />}
            title='User-Profile'
            tooltip='Profiled'
          />
          <SideBarItem
            icon={<FaSlidersH size={20} />}
            title='Settings'
            tooltip='Settings'
          />
        </ul>
      </div>
      <div className='sidebar-toggle' onClick={sideBarToggle}>
        <div className='sidebar-item'>
          <Link to=''>
            <span>
              <FaAngleRight
                className={`transition-all ${
                  sidebarShow ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
