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

const component = () => {
  mainContainer.appendChild(title);

  headingDiv.appendChild(subTitle);
  headingDiv.appendChild(refreshButton);

  scoresDisplay.appendChild(headingDiv);
  scoresDisplay.appendChild(unorderedList);

  mainSection.appendChild(scoresDisplay);

  addScoresDisplay.appendChild(subTitle2);
  addScoresDisplay.appendChild(nameInput);
  addScoresDisplay.appendChild(scoreInput);
  addScoresDisplay.appendChild(submitButton);

  mainSection.appendChild(addScoresDisplay);

  mainContainer.appendChild(mainSection);
  mainContainer.appendChild(footer);
  return mainContainer;
};

document.body.appendChild(component());