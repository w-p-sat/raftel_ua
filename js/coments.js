const form = document.getElementById("commentForm");
const container = document.getElementById("commentsContainer");
const stars = document.querySelectorAll(".rating-svg svg");
const ratingValueOutput = document.getElementById("svgRatingValue");

let selectedRating = 0;

// ⭐ Hover-ефекти і вибір зірок
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("hovered", i >= index);
    });
  });

  star.addEventListener("mouseout", () => {
    stars.forEach(s => s.classList.remove("hovered"));
  });

  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-value"));
    ratingValueOutput.textContent = `Оцінка: ${selectedRating}`;
    stars.forEach((s, i) => {
      s.classList.toggle("selected", parseInt(s.getAttribute("data-value")) <= selectedRating);
    });
  });
});

// 📨 Відправка форми
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("commentText").value.trim();

  // ❗ Перевірка: обов’язково або коментар, або рейтинг
  if (!name || (!comment && selectedRating === 0)) {
    alert("Будь ласка, введіть коментар або поставте оцінку.");
    return;
  }

  const now = new Date();
  const dateTime = now.toLocaleString("uk-UA");

  const commentBlock = document.createElement("div");
  commentBlock.classList.add("comment");

  // 👤 Аватарка SVG
  const initial = name[0].toUpperCase();
  const avatarSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  avatarSVG.setAttribute("width", "40");
  avatarSVG.setAttribute("height", "40");
  avatarSVG.setAttribute("viewBox", "0 0 40 40");
  avatarSVG.classList.add("avatar-svg");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "20");
  circle.setAttribute("cy", "20");
  circle.setAttribute("r", "20");
  circle.setAttribute("fill", "#ffd700");

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", "50%");
  text.setAttribute("y", "50%");
  text.setAttribute("dominant-baseline", "middle");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("font-size", "18");
  text.setAttribute("fill", "#fff");
  text.setAttribute("font-family", "Arial, sans-serif");
  text.textContent = initial;

  avatarSVG.appendChild(circle);
  avatarSVG.appendChild(text);

  // 📄 Коментар
  const content = document.createElement("div");
  content.classList.add("comment-content");

  const topRow = document.createElement("div");
  topRow.classList.add("top-row");

  const author = document.createElement("h4");
  author.textContent = name;

  const timestamp = document.createElement("span");
  timestamp.classList.add("timestamp");
  timestamp.textContent = dateTime;

  topRow.appendChild(author);
  topRow.appendChild(timestamp);

  // ⭐ Рейтинг
  const ratingLine = document.createElement("div");
  ratingLine.classList.add("rating-line");
  if (selectedRating > 0) {
    ratingLine.textContent = `Оцінка: ${selectedRating} ★`;
  }

  const commentText = document.createElement("p");
  commentText.textContent = comment;

  content.appendChild(topRow);
  if (selectedRating > 0) content.appendChild(ratingLine);
  if (comment) content.appendChild(commentText);

  commentBlock.appendChild(avatarSVG);
  commentBlock.appendChild(content);
  container.appendChild(commentBlock);

  // 🧹 Очистка форми
  form.reset();
  selectedRating = 0;
  ratingValueOutput.textContent = "Оцінка: 0";
  stars.forEach(s => s.classList.remove("selected"));
});