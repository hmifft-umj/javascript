const galleryContents = document.getElementsByClassName("gallery__contents")[0];

for (let i = 1; i <= 30; i++) {
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const image = document.createElement("img");
  const date = document.createElement("p");

  title.textContent = i < 10 ? `Foto Tanggal 0${i}` : `Foto Tanggal ${i}`;
  image.setAttribute("src", `https://picsum.photos/seed/${i}/410`);
  image.setAttribute("alt", `${i}.png`);
  date.textContent = i < 10 ? `0${i}-06-2023` : `${i}-07-2023`;

  card.setAttribute("class", "card__wrapper");
  card.append(title, image, date);
  galleryContents.append(card);
}
