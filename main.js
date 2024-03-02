const app = document.getElementById('typewriter'); 


const typewriter = new Typewriter( app, {
    loop: true,
    delay: 75
});



typewriter
  .typeString('Ya Elegiste el Tuyo?...')
  .pauseFor(200)
  .start();