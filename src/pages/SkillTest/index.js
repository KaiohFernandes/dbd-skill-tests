import './style.css';
import template from './index.html';

const SAFE_ZONE = 25;

function SkillTest() { 
  // const random = Math.floor(Math.random() * 361); 
  let random = 300;

  const rotatePressPosition = () => {
    const image = document.querySelector('.skillCheck .skillCheck-pressPosition');
    image.style.opacity = 1;

    let i = 0;
    const interval = setInterval(rotate, 4   )

    function rotate() {
      image.style.transform = `rotate(${i}deg)`;

      i < 360 ? i++ : i = 0;

      if(i > random + SAFE_ZONE) {
        console.log('passou a skill');
        clearInterval(interval);
      } 

      window.onkeyup = e => {                   
        if(e.keyCode == 32) {

          if(i < random - SAFE_ZONE) {
            console.log('apertou antes');
            clearInterval(interval);  
          }

          if(i > random - SAFE_ZONE) {
            console.log('Skill Acertado'); 
            clearInterval(interval);
          }
        }
      }
    }
  }

  const rotateSkillCheck = () => {
    setTimeout(() => {      
      const image = document.querySelector('.skillCheck-skillTest');
    
      if(image) {
        image.style.transform = `rotate(${random}deg)`;
        image.style.opacity = 1;

        rotatePressPosition();
      }
    }, 10);
  }

  rotateSkillCheck();

  return template
}


export default SkillTest();