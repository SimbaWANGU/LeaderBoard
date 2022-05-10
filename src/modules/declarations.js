import Image from '../images/footsteps-silhouette-variant.png';

const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');

const title = document.createElement('h1');
title.innerText = 'Leaderboard';
title.classList.add('title');

const mainSection = document.createElement('div');
mainSection.classList.add('mainSection');

const scoresDisplay = document.createElement('div');
scoresDisplay.classList.add('scoresDisplay');

const headingDiv = document.createElement('div');
headingDiv.classList.add('headingDiv');

const subTitle = document.createElement('h2');
subTitle.classList.add('subTitle');
subTitle.innerText = 'Recent Scores';

const refreshButton = document.createElement('button');
refreshButton.classList.add('refreshButton');
refreshButton.innerText = 'Refresh';

const unorderedListItem1 = document.createElement('li');
unorderedListItem1.classList.add('unorderedListItem');
unorderedListItem1.innerText = 'Name: 100';

const unorderedListItem2 = document.createElement('li');
unorderedListItem2.classList.add('unorderedListItem');
unorderedListItem2.innerText = 'Name: 90';

const unorderedListItem3 = document.createElement('li');
unorderedListItem3.classList.add('unorderedListItem');
unorderedListItem3.innerText = 'Name: 80';

const unorderedListItem4 = document.createElement('li');
unorderedListItem4.classList.add('unorderedListItem');
unorderedListItem4.innerText = 'Name: 70';

const unorderedListItem5 = document.createElement('li');
unorderedListItem5.classList.add('unorderedListItem');
unorderedListItem5.innerText = 'Name: 60';

const unorderedList = document.createElement('ul');
unorderedList.classList.add('unorderedList');

unorderedList.appendChild(unorderedListItem1);
unorderedList.appendChild(unorderedListItem2);
unorderedList.appendChild(unorderedListItem3);
unorderedList.appendChild(unorderedListItem4);
unorderedList.appendChild(unorderedListItem5);

const addScoresDisplay = document.createElement('div');
addScoresDisplay.classList.add('addScoresDisplay');

const subTitle2 = document.createElement('h2');
subTitle2.classList.add('subTitle');
subTitle2.innerText = 'Add your Scores';

const nameInput = document.createElement('input');
nameInput.classList.add('dataInput');
nameInput.placeholder = 'Your name';

const scoreInput = document.createElement('input');
scoreInput.classList.add('dataInput');
scoreInput.placeholder = 'Your Score';

const submitButton = document.createElement('button');
submitButton.classList.add('submitButton');
submitButton.innerText = 'Submit';

const footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerText = ' .';

const image = document.createElement('img');
image.classList.add('footerImage');
image.src = Image;

footer.appendChild(image);

export {
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
};