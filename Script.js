document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("add-book-btn");
  const list = document.getElementById("book-list");

  btn.addEventListener("click", function () {
    const bookName = prompt("Quel est le nom du livre à ajouter ?");
    if (bookName) {
      const li = document.createElement("li");
      li.textContent = bookName;
      list.appendChild(li);
    }
  });
});