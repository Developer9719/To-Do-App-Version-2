import './pageLoad.js' // Runs the IIFE for intital setup for the site
import  { customizedHTML } from './structure.js';

export const siteTitle = 'To-Do App';
export let pageTitle = "Home";

// Change the title element of the site
document.querySelector('title').textContent = siteTitle + ' | ' + pageTitle;

// Create the basic and customized page layout
customizedHTML();