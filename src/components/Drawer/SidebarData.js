import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  { 
    title: 'Engineering',
    path: '/eng',
    icon: <FaIcons.FaGraduationCap />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Computer Science',
        path: '/overview/users',
        icon: <RiIcons.RiComputerLine />
      },
      {
        title: 'Electronics and Communication',
        path: '/overview/revenue',
        icon: <FcIcons.FcElectronics />
      },
      
    ]
  },
  {
    title: 'Exams',
    path: '/exam',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'JEE',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'UPSC',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'NEET',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Medicine',
    path: '/med',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Government',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Management',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'MBA',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'BBA',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Research',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Accountant',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
    
    
  }
];