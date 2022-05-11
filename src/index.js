import './style.css';
import {
  mainContainer,
  title,
  mainSection,
  scoresDisplay,
  addScoresDisplay,
  headingDiv,
  subTitle,
  refreshButton,
  subTitle2,
  unorderedList,
  nameInput,
  scoreInput,
  submitButton,
  footer,
} from './modules/declarations.js';
import refresh from './modules/refresh.js';
import postGame from './modules/postGame.js';

const component = () => {
  mainContainer.appendChild(title);

  headingDiv.appendChild(subTitle);

  refreshButton.addEventListener('click', () => {
    if (unorderedList.innerHTML === '') {
      refresh()
      .then((response) => {
        response.forEach((res) => {
          const unorderedListItem = document.createElement('li');
          unorderedListItem.classList.add('unorderedListItem');
          unorderedListItem.innerText = `${res.user} : ${res.score}`;
          unorderedList.appendChild(unorderedListItem);
        })
      })
    } else {
      unorderedList.innerHTML = '';
      refresh()
      .then((response) => {
        response.forEach((res) => {
        const unorderedListItem = document.createElement('li');
        unorderedListItem.classList.add('unorderedListItem');
        unorderedListItem.innerText = `${res.user} : ${res.score}`;
        unorderedList.appendChild(unorderedListItem);
      })
    })
  }
  });
  headingDiv.appendChild(refreshButton);

  scoresDisplay.appendChild(headingDiv);
  scoresDisplay.appendChild(unorderedList);

  mainSection.appendChild(scoresDisplay);

  addScoresDisplay.appendChild(subTitle2);
  addScoresDisplay.appendChild(nameInput);
  addScoresDisplay.appendChild(scoreInput);

  submitButton.addEventListener('click', (e) => {
    if (nameInput.value === '' || scoreInput.value === '') {
      e.preventDefault();
    } else {
      postGame(nameInput.value, scoreInput.value);
      nameInput.value = '';
      scoreInput.value = '';
    }
  });
  addScoresDisplay.appendChild(submitButton);

  mainSection.appendChild(addScoresDisplay);

  mainContainer.appendChild(mainSection);
  mainContainer.appendChild(footer);
  return mainContainer;
};

document.body.appendChild(component());