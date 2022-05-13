import chapters from "./chapters"

const currentChapterTitle = document.getElementById('document-title')
const currentDocumentIFrame = document.getElementById('document-display')
const chapterNamesList = document.getElementById('chapter-list')
const body = document.getElementById('home')
const darkModeButton = document.getElementById('dark-mode-button')

darkModeButton.onchange = (e) => body.className = e.target.checked ? "dark-mode" : ""

const chapterClickFunc = (chapterUrl) => {
    return (e) => {
        // Only if the chapter is not already displayed
        if (currentChapterTitle.innerText !== e.target.innerText) {
            // Set the current iframe's src to the chapter's url
            currentDocumentIFrame.src = chapterUrl
            // Set the title
            currentChapterTitle.innerText = e.target.innerText
        }
    }
}

for (const chapter of chapters) {
    // Create chapter list div
    const chapEl = document.createElement('div')

    // Use class name and insert title
    chapEl.className = 'chapter-name'
    chapEl.innerText = chapter.title

    // Set onclick function and add to list
    chapEl.onclick = chapterClickFunc(chapter.url)
    chapterNamesList.appendChild(chapEl)
}

// Start on chapter 1
currentChapterTitle.innerText = chapters[0].title
currentDocumentIFrame.src = chapters[0].url
