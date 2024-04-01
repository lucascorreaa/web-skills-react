import React, { useState } from "react";
import menu from './assets/images/mi_check_list_icon.svg'
import edit from './assets/images/edit.png'
import inbox from './assets/images/inbox.png'
import logout from './assets/images/logout.png'
import help from './assets/images/help.png'
import settings from './assets/images/settings.png'
import user from './assets/images/user.png'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="menu-container">
        <div className="menu-trigger" onClick={() => {setOpen(!open)}}>
          <img src={menu} alt="" />
        </div>

        {
          open &&
          <div className="dropdown-menu">
              <h3>The Lucas <br/> <span>WebSite Designer</span></h3>
              <ul>
                <DropdownItem img={user} text="My Profile" /> 
                <DropdownItem img={edit} text="edit" /> 
                <DropdownItem img={inbox} text="inbox" /> 
                <DropdownItem img={settings} text="settings" /> 
                <DropdownItem img={help} text="help" /> 
                <DropdownItem img={logout} text="logout" /> 
             </ul>
          </div>
        
        }
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (

      <li className="dropdownItem">
        <img src={props.img} alt="" />
        <a href=""> {props.text} </a>
      </li>

  )
}

export default App;
