const SAFE_ZONE = 30;

const addMessage = message => {
  const list = document.querySelector('.skillTest-addPontuation ul');
  const listItem = document.createElement('li');
  listItem.append(message);

  list.appendChild(listItem)
}

export default function checkSkillTest({ interval, currentPosition, checkPosition }, callback) {
  if(currentPosition > checkPosition + SAFE_ZONE) {
    clearInterval(interval);

    addMessage('Skill check error: -50 points');    
    callback();
  }

  window.onkeyup = e => {                   
    if(e.keyCode == 32) {
      const safePosition = checkPosition - SAFE_ZONE;
      if(currentPosition < safePosition) {
        clearInterval(interval);
        addMessage('Skill check error: -50 points');
        callback();
      }

      if(currentPosition > safePosition) {
        clearInterval(interval);
        addMessage('Skill check success: 300 points');
        callback();
      }
    }
  }
}