
gsap.registerPlugin(TextPlugin);

const imgGroup = document.querySelector('.hero');
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    console.log('Событие есть!');
    const x = (window.innerWidth - e.pageX * speed)/100;
    const y = (window.innerHeight - e.pageY * speed)/100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
};

if(screen.width < 1024) {
  imgGroup.addEventListener("mousemove", parallax);
}






//replaces yourElement's text with "This is the new text" over the course of 2 seconds

// let runText = document.querySelector('.run-text');
// gsap.to(".run-text",
//   {duration: 2, text: "Покупайте в сети магазинов Светофор", ease: "none"});

//replaces word-by-word because the delimiter is " " (a space)
// gsap.to(yourElement, {duration: 2, text: {value: "This is the new text", delimiter: " "}, ease: "none"});

gsap.to('.run-text',
{duration: 2,
  text: "Покупайте в сети магазинов Светофор",
  delay: 1
});

//GOOD:
gsap.to('.run-text', {
  duration: 1,
  text: {
      value: "Покупайте в сети магазинов Светофор",
      newClass: "class2",
      delimiter: " "
  }
});
