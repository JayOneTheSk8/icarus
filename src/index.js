import chapters from "./chapters"

// Constants
const WINDOW_LIMIT = 1105
const chapterSrcMap = {}

// Elements
const body = document.getElementById('home')

const darkModeButton = document.getElementById('dark-mode-button')
const mobileDarkModeButton = document.getElementById('dark-mode-button-mobile')
const chapterNamesList = document.getElementById('chapter-list')

const chapterDropdown = document.getElementById('chapter-dropdown')
const chapterSelectContainer = document.getElementById('chapter-select-container')
const chapterSelect = document.getElementById('chapter-select')

const currentChapterTitle = document.getElementById('document-title')
const currentDocumentIFrame = document.getElementById('document-display')

// Variables
var usingMobile = false;

// Event Handlers
darkModeButton.onchange = (e) => {
    body.className = e.target.checked ? "dark-mode" : ""
    mobileDarkModeButton.checked = e.target.checked
}

mobileDarkModeButton.onchange = (e) => {
    body.className = e.target.checked ? "dark-mode" : ""
    darkModeButton.checked = e.target.checked
}

chapterSelect.onchange = (e) => {
    // Only if the chapter is not already displayed
    if (currentChapterTitle.innerText !== e.target.value) {
        // Set the current iframe's src to the chapter's url
        currentDocumentIFrame.src = chapterSrcMap[e.target.value]
        // Set the title
        currentChapterTitle.innerText = e.target.value
    }
}

// Functions
const changeToMobile = (setMobile) => {
    chapterDropdown.className = setMobile ? 'chapter-dropdown-mobile' : 'chapter-dropdown'
    chapterSelectContainer.className = setMobile ? 'chapter-select-container-mobile' : 'chapter-select-container'
    currentDocumentIFrame.className = setMobile ? 'document-display-mobile' : 'document-display'
    currentChapterTitle.className = setMobile ? 'document-title-mobile' : 'document-title'
    usingMobile = setMobile
}

const chapterClickFunc = (chapterUrl) => {
    return (e) => {
        // Only if the chapter is not already displayed
        if (currentChapterTitle.innerText !== e.target.innerText) {
            // Set the current iframe's src to the chapter's url
            currentDocumentIFrame.src = chapterUrl
            // Set the title
            currentChapterTitle.innerText = e.target.innerText
            // Set correct value in select
            chapterSelect.value = e.target.innerText
        }
    }
}

const handleResize = (e) => {
    // If the width is below the limit and it isn't already using mobile classes
    if (e.target.innerWidth < WINDOW_LIMIT && !usingMobile) {
        // Set the classes to mobile type
        changeToMobile(true)
    } else if (e.target.innerWidth >= WINDOW_LIMIT && usingMobile) {
        // Otherwise if we are using mobile
        // Set the classes to regular type
        changeToMobile(false)
    }
}

// Create Chapter Options
for (const chapter of chapters) {
    // Create chapter list div
    const chapEl = document.createElement('div')

    // Use class name and insert title
    chapEl.className = 'chapter-name'
    chapEl.innerText = chapter.title

    // Set onclick function and add to list
    chapEl.onclick = chapterClickFunc(chapter.url)
    chapterNamesList.appendChild(chapEl)

    // Add select option
    const chapOpt = document.createElement('option')

    // Use option class name and insert title
    chapOpt.className = 'chapter-option'
    chapOpt.innerText = chapter.title

    // Set value and add src to map for onchange function
    chapOpt.value = chapter.title
    chapterSrcMap[chapter.title] = chapter.url

    // Add to chapter select
    chapterSelect.appendChild(chapOpt)
}

// Start on chapter 1
currentChapterTitle.innerText = chapters[0].title
currentDocumentIFrame.src = chapters[0].url

// Add event listener to window
window.addEventListener('resize', handleResize)
// Resize if on mobile
if (window.innerWidth < WINDOW_LIMIT) {
    changeToMobile(true)
}