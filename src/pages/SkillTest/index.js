import './style.css';
import template from './index.html';

import { checkSkillTest } from '../../components/SkillCheck';

const PIN_SPEED = 20;

function SkillTest() { 

  const getRandom = () => {
    let position = Math.floor(Math.random() * 361) + 1;
    position = position < 90 ? 90 : position;
    position = position > 325 ? 325 : position;

    return position;
  }

  const restart = () => {
    const skillCheck = document.querySelector('.skillCheck-skillTest');
    skillCheck.style.opacity = 0;

    const pressPosition = document.querySelector('.skillCheck .skillCheck-pressPosition');
    pressPosition.style.opacity = 0;

    let timeRandom = Math.floor(Math.random() * 10) + 1;
    timeRandom = timeRandom < 3 ? 3 : timeRandom;
      
    setTimeout(() => {
      rotateSkillCheck(getRandom());
    }, timeRandom * 1000);
  }

  const rotatePressPosition = (random) => {
    const image = document.querySelector('.skillCheck .skillCheck-pressPosition');
    image.style.opacity = 1;

    let currentPosition = 0;
    const interval = setInterval(rotate, PIN_SPEED);
 
    function rotate() {
      image.style.transform = `rotate(${currentPosition}deg)`;

      checkSkillTest({ interval, currentPosition, checkPosition: random}, restart);
      currentPosition < 360 ? currentPosition = currentPosition + 4 : currentPosition = 0;     
    }
  }

  const rotateSkillCheck = (random = getRandom()) => {
    setTimeout(() => {
      const image = document.querySelector('.skillCheck-skillTest');

      if(image) {
        image.style.transform = `rotate(${random}deg)`;
        image.style.opacity = 1;

        rotatePressPosition(random);
      }
    }, 0);
  }

  const backgroundEffect = () => {
    setTimeout(() => {
      let background = Math.floor(Math.random() * 3) + 1;

      const page = document.querySelector('.skillTest');
      page.classList.add(`background${background}`);

      const button = document.getElementsByName('handleBackground');      
      button[0].addEventListener('click', () => {  
        page.classList.remove(page.classList[1]);      
        page.classList.add('withoutImage');
      });

      button[1].addEventListener('click', () => {
        background = Math.floor(Math.random() * 3) + 1
        page.classList.add(`background${background}`);
        page.classList.remove('withoutImage');
      });
    }, 0)
  }

  backgroundEffect();
  rotateSkillCheck();
  return template
}


export default SkillTest();