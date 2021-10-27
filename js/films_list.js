for (let i = 0; i < films.length; i++) {
  let newLi = document.createElement("LI");
  let newP = document.createElement("P");
  let newImg = document.createElement("IMG");
  let newOverview = document.createElement("P");
  let newGenres = document.createElement("Р4");

  newLi.textContent = films[i].title;
  newP.textContent = films[i].id;
  newImg.setAttribute("src", films[i].poster);
  newOverview.textContent = films[i].overview;
  newGenres.textContent = films[i].genres;

  newImg.setAttribute("width:", "300px"); //style of img width
  newImg.setAttribute("height:", "300px"); //style of img height

  list.appendChild(newLi);
  list.appendChild(newP);
  list.appendChild(newImg);
  list.appendChild(newOverview);
  list.appendChild(newGenres);
}
