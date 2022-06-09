import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const adminDataSet = [
  {
    title: 'Doctors',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    className: 'nav-text',
  },
  {
    title: 'Reservations',
    path: '/myreservations',
    icon: <IoIcons.IoIosPaper />,
    className: 'nav-text',
  },
  {
    title: 'Book Appointments',
    path: '/book_appointment',
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: 'nav-text',
  },
  {
    title: 'All Doctors',
    path: '/all_doctors',
    icon: <FaIcons.FaBriefcaseMedical />,
    className: 'nav-text',
  },
  {
    title: 'Add Doctors',
    path: '/add_doctor',
    icon: <FaIcons.FaBriefcaseMedical />,
    className: 'nav-text',
  },
];

const userDataSet = [
  {
    title: 'Doctors',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    className: 'nav-text',
  },
  {
    title: 'Reservations',
    path: '/myreservations',
    icon: <IoIcons.IoIosPaper />,
    className: 'nav-text',
  },
  {
    title: 'Book Appointments',
    path: '/book_appointment',
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: 'nav-text',
  },
];

function SidebarData(role) {
  if (role === 'admin') {
    return adminDataSet;
  } return userDataSet;
}

export default SidebarData;
