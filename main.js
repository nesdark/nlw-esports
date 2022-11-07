let delay = 0
for (c = 1; c < 4; c++) {
  let cards = document.querySelector(`section:nth-child(${c})`)
  cards.setAttribute("style", `animation-delay: ${delay}s;`)
  delay += 0.2
}
