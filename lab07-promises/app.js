function addTitle(title) {
  document.querySelector("#title").innerHTML = title;
}

function addChapter(title, content) {
  const newStory = document.querySelector("template").content.cloneNode(true);
  newStory.querySelector("#chapterTitle").innerHTML = title;
  newStory.querySelector("#chapterContent").innerHTML = content;
  document.querySelector("#start").appendChild(newStory);
}

let book = await fetch("http://localhost:3000/book").then((x) => x.json());
addTitle(book.title);

let fetches = [];
for (let chapterUrl of book.chapterUrls) {
  fetches.push(
    fetch(`http://localhost:3000${chapterUrl}`).then((x) => x.json())
  );
}

// for (let request of fetches) {
//   let chapter = await request;
//   console.log(chapter);
//   addChapter(chapter.title, chapter.content);
// }

let chapters = await Promise.all(fetches);
chapters.forEach(chapter => addChapter(chapter.title, chapter.content));