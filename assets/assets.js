import user_image from './user_image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import vue from './vue.png';
import react from './react.png';
import git from './git.png';
import mongodb from './mongodb.png';
import mysql from './mysql.png'
import postgresql from './postgresql.png'
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './avatar.jpg';
import hand_icon from './hand-icon.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import send_icon from './send-icon.png';
import work1 from './work-1.png';
import work2 from './work-2.png';
import work3 from './work-3.png';
import work4 from './work-4.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    vue,
    react,
    git,
    mongodb,
    mysql,
    postgresql,
    mail_icon,
    mail_icon_dark,
    profile_img,
    hand_icon,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    send_icon,
    work1,
    work2,
    work3,
    work4
};

export const workData = [
    {
        title: 'Apple Store',
        description: 'Ecommerce Website',
        bgImage: work1,
        demo: 'https://shop-dunk-zeta.vercel.app/'
    },
    {
        title: 'Messenger clone',
        description: 'Chat app',
        bgImage: work2,
        demo: 'https://chat-app-mern-yrpv.onrender.com/'
    },
    {
        title: 'Notes',
        description: 'Note app',
        bgImage: work3,
        demo: 'https://note-app-mern-wheat.vercel.app/'
    },
    {
        title: 'Vật Vờ Shop',
        description: 'Ecommerce Website',
        bgImage: work4,
        demo: 'https://vat-vo-shop.vercel.app/'
    },
]

export const serviceData = [
    { icon: 'Monitor', title: 'Frontend', description: 'Building modern, responsive user interfaces.' },
    { icon: 'Server', title: 'Backend', description: 'Developing APIs and server-side logic.' },
    { icon: 'Layers', title: 'Fullstack', description: 'Delivering complete solutions from UI to database.' },
    { icon: 'Palette', title: 'Web design', description: 'Designing creative and user-friendly websites.' },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Framework', description: 'JavaScript, TypeScript, ReactJS, VueJS, NextJS, Java, Spring boot' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'FPT Polytechnic Da Nang' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    { icon: react, name: "React" },
    { icon: vue, name: "Vue" },
    { icon: mysql, name: "MySQL" },
    { icon: postgresql, name: "PostgreSQL" },
    { icon: mongodb, name: "MongoDB" },
    { icon: firebase, name: "Firebase" },
    { icon: git, name: "Git" },
    { icon: figma, name: "Figma" },
    { icon: vscode, name: "VS Code" },
];