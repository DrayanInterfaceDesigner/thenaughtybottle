import {scrollToPosition, getActiveSection} from './positionHandler.mjs'
import overflowBlock from './overflowBlock.js'

let 
hasScrolled,
currentPage,
nextPage,
previousPage,
scrollDelay

hasScrolled = false
previousPage = currentPage - 1

export default function main(array, delay) {

    scrollDelay = delay
    currentPage = getActiveSection(array)
    _resetCurrentOnPageRestart(array)
    overflowBlock()

    window.addEventListener('resize', () => {_onWindowResize(array)})
    window.addEventListener('wheel', (event)=> {_scroll(array, event)})
}

function _scroll(array, event) {

    if(!hasScrolled) {
        if(_isScrollUp(event) && currentPage > 0) {

            previousPage = currentPage - 1
            scrollToPosition(array, previousPage)
            _setScrollInterval(scrollDelay)
            currentPage -= 1

        }
        else if (!_isScrollUp(event) && currentPage !== (array.length - 1)) {

            nextPage = currentPage + 1
            scrollToPosition(array, nextPage)
            _setScrollInterval(scrollDelay)
            currentPage += 1

        }
    }
    
}

function _resetCurrentOnPageRestart(array) {
    _setScrollInterval(1000 + (0.40 * array.length) * 200)
    scrollToPosition(array, currentPage)
}

function _onWindowResize(array) {
    scrollToPosition(array, currentPage)
}

function _isScrollUp(event) {
    if (event.wheelDelta) return event.wheelDelta > 0;
    return event.deltaY < 0;
}

function _setScrollInterval(delay) {
    hasScrolled = true
    setTimeout(()=>{hasScrolled = false}, delay)
}