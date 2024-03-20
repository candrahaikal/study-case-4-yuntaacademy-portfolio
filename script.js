let textWrappers = document.querySelectorAll('#jumbotron-title .letters');
let skillsCards = document.querySelectorAll('.card');

// Anime JS
textWrappers.forEach((textWrapper) => {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
})

anime.timeline({loop: true})
  .add({
    targets: '#jumbotron-title .letter',
    translateY: ["1.4em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 30 * i
  }).add({
    targets: '#jumbotron-title',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000
  });



// Cursor Effect
skillsCards.forEach((card) => {
  card.onmousemove = function (e){
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  }
})

