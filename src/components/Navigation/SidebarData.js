import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const adminDataSet = [
  {
    id: 1,
    title: 'Doctors',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    className: 'nav-text',
  },
  {
    id: 2,
    title: 'Reservations',
    path: '/myreservations',
    icon: <IoIcons.IoIosPaper />,
    className: 'nav-text',
  },
  {
    id: 3,
    title: 'Book Appointments',
    path: '/book_appointment',
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: 'nav-text',
  },
  {
    id: 4,
    title: 'All Doctors',
    path: '/all_doctors',
    icon: <FaIcons.FaBriefcaseMedical />,
    className: 'nav-text',
  },
  {
    id: 5,
    title: 'Add Doctors',
    path: '/add_doctor',
    icon: <FaIcons.FaBriefcaseMedical />,
    className: 'nav-text',
  },
];

const userDataSet = [
  {
    id: 1,
    title: 'Doctors',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    className: 'nav-text',
  },
  {
    id: 2,
    title: 'Reservations',
    path: '/myreservations',
    icon: <IoIcons.IoIosPaper />,
    className: 'nav-text',
  },
  {
    id: 3,
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
