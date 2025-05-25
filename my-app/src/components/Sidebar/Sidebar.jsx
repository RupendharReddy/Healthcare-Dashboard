import React from 'react';
import { generalLinks, toolLinks, settingLink } from '../../data/sidebarLinks';
import './Sidebar.css';

// Manually defined SVGs for each icon name
const iconMap = {
  dashboard: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Z" />
    </svg>
  ),
  history: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M480-80q-83 0-156.5-31.5T193-200q-55-55-86.5-128.5T75-480h80q0 142 101.5 241T480-140q67 0 125-25t102.5-68.5Q751-277 776-335t25-125q0-67-25-125t-68.5-102.5Q664-731 606-756t-125-25q-84 0-157 39.5T220-645h100v80H80v-240h80v100q47-76 126.5-118T480-880q100 0 186 48t136 134q50 86 50 186t-50 186q-48 86-134 134t-186 48Zm40-160-160-160 56-56 104 104 104-104 56 56-160 160Z" />
    </svg>
  ),
  calendar_today: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M240-120q-33 0-56.5-23.5T160-200v-560q0-33 23.5-56.5T240-840h40v-40h80v40h240v-40h80v40h40q33 0 56.5 23.5T800-760v560q0 33-23.5 56.5T720-120H240Zm0-80h480q0 0 0 0t0 0V-600H240v400Zm0-480h480v-80H240v80Zm0 0v-80 80Z"/>
    </svg>
  ),
  event_note: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M280-200h400v-80H280v80Zm0-160h400v-80H280v80Zm-40 240q-33 0-56.5-23.5T160-200v-560q0-33 23.5-56.5T240-840h40v-40h80v40h240v-40h80v40h40q33 0 56.5 23.5T800-760v560q0 33-23.5 56.5T720-120H240Z"/>
    </svg>
  ),
  bar_chart: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M200-160v-480h120v480H200Zm220 0v-640h120v640H420Zm220 0v-320h120v320H640Z"/>
    </svg>
  ),
  chat: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M160-120v-520q0-33 23.5-56.5T240-720h480q33 0 56.5 23.5T800-640v280q0 33-23.5 56.5T720-280H320L160-120Zm160-320h320v-80H320v80Zm0-120h320v-80H320v80Z"/>
    </svg>
  ),
  support_agent: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M480-480Zm0 400q-50 0-96.5-13T295-140q-17-17-26-37.5T260-221v-12q0-26 17.5-45.5T320-300h5q10 0 20-3t19-7q33-13 69.5-19.5T540-340v-60q-63-13-101.5-64.5T400-580v-20q0-50 26-92t70-65q-1-3-1.5-6t-.5-6q0-33 23.5-56.5T576-840q26 0 45.5 15.5T656-784q38 11 70 34t56 54q48 61 62.5 135.5T840-480q0 83-43.5 153.5T720-200q-14 31-41 50.5T621-120q-24 0-42.5-10T540-160q-27 20-57 30t-63 10Z"/>
    </svg>
  ),
  settings: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" fill="#000000">
      <path d="M480-440q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440Zm0 320q-140-35-230-155T160-520q0-91 35.5-171T296-835l64 65q-44 38-69 92t-25 118q0 100 57.5 177.5T480-240q96 0 169.5-67T720-480q0-63-25-117.5T626-690l64-65q75 74 120.5 171T856-520q0 140-90 260T480-120Z"/>
    </svg>
  )
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        Health<span className="highlight">care.</span>
      </div>
      <div className="sidebar-group">
        <h4>General</h4>
        <ul>
          {generalLinks.map((link, index) => (
            <li key={index}>
              <span className="icon">{iconMap[link.icon]}</span>
              <span className="link-text">{link.name}</span>
            </li>
          ))}
        </ul>
        <h4>Tools</h4>
        <ul>
          {toolLinks.map((link, index) => (
            <li key={index}>
              <span className="icon">{iconMap[link.icon]}</span>
              <span className="link-text">{link.name}</span>
            </li>
          ))}
        </ul>
        {/* <h4>General</h4> */}
        <ul>
            <li>
              <span className="icon">{iconMap[settingLink.setting]}</span>
              <span className="link-text">{settingLink.name}</span>
            </li>
        </ul>

      </div>
    </aside>
  );
};

export default Sidebar;
