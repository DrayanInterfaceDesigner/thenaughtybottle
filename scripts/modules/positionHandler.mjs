let isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

export function scrollToPosition(array, index, behavior = 'smooth') {

    let topOffset = _getSectionPosition(array, index)
    _setActiveSection(array, index)

    if(isSmoothScrollSupported) {
        window.scroll({
            top: topOffset.top,
            behavior: behavior
        });
    }
    else if (!isSmoothScrollSupported) {
        console.log('Smooth Positioning not supported')
    }

}

function _getSectionPosition(array, index) {

    let rect = array[index].getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop

    return { top: rect.top + scrollTop }
}


export function getActiveSection(array) {

    let activeSection = -1

    for(let i = 0; i <= (array.length - 1); i++) {
        if(array[i].classList.contains('active-from-as')) {
            return activeSection = i
        }
    }

    if(activeSection == -1) {
        activeSection = 0
        _setActiveSection(array, activeSection)
    }
    
    return activeSection
}


function _setActiveSection(array, index) {

    array.forEach(section => {
        if(section !== array[index]) {
            section.classList.remove('active-from-as')
        }
    })
    array[index].classList.add('active-from-as')
}