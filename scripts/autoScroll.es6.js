// autoScroll.js version 1.0 
// Code by Drayan [Yandra V.]
// github: https://github.com/DrayanInterfaceDesigner

// Free for comercial use :) Just keep the credits above

import scroll from './modules/scroll.mjs'

export default function autoScroll(parentContainerID, sectionArray, delay = 1000) {

    const parentContainer = document.getElementById(parentContainerID)
    let sectionArr = parentContainer.querySelectorAll(sectionArray)
    scroll(sectionArr, delay)

}

autoScroll('app', 'section', 700)


// How to use:

// parentContainerID stands for the "app" container. The one that holds everything (do not use the body element).
// Example:
// <div id="app"> 
//     <div class="section"></div>
//     <div class="section"></div>
//     <div class="section"></div>
// </div>

// sectionArray stands for the "section" on the example above. Just pass the common class between all the sections
// you want to scroll. 

// delay is the time of the scroll lock (how much time the user needs to wait untill scroll again)
