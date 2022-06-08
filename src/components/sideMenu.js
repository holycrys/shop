import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';



export const sideMenu = [
    {
        name: 'Dresses',
        id: '/dresses',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                name: 'Dresses 1',
                id: '/dresses/dresses1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                name: 'Dresses 2',
                id: '/dresses/dresses2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        name: 'Reports',
        id: 'reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                name: 'Reports1',
                id: 'reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                name: 'Reports2',
                id: 'reports2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        name: 'Products',
        id: 'products',
        icon: <FaIcons.FaCartPlus />
    },
    {
        name: 'Messages',
        id: 'messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                name: 'Message 1',
                id: 'message1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                name: 'Message 2',
                id: 'message2',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        name: 'Suport',
        id: 'suport',
        icon: <IoIcons.IoMdHelpCircle />
    }
]
