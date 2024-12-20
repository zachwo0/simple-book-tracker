let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let chapterEl = document.getElementById("chapter-el")
let chapterBtn = document.getElementById("chapter-btn")
let bookBtn = document.getElementById("book-btn")
let saveBtn = document.getElementById("save-btn")
let bookCount = 0
let chapterCount = 0


function increment(type) {
    
    if (type === "chapter") {
        chapterCount ++;
        chapterEl.textContent = "Total Chapters: " + chapterCount
    }
    else if (type === "book") {
        bookCount ++;
        countEl.textContent = "Total Books: " + bookCount;
    }
}

function handleBookClick() {
    increment("book")
}

function handleChapterClick() {
    increment("chapter")
}


function handleSaveClick() {
    const now = new Date();
    const timestamp = now.toLocaleString();
    let countStr = `[${timestamp}] <br> Total Books: ${bookCount} | Total Chapters: ${chapterCount} <br>`
    saveEl.innerHTML += countStr;
}

saveBtn.addEventListener("click", handleSaveClick)
chapterBtn.addEventListener("click", handleChapterClick)
bookBtn.addEventListener("click", handleBookClick)