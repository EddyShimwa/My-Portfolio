const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const crossIcon = document.getElementById('cross-icon');
const allNavLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
  mobileNav.classList.toggle('df');
}

hamburger.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
allNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', toggleNav);
});

// workData
const worksData = [
  {
    id: 'project1',
    title: 'Tonic',
    frame: ['CANOPY', 'Back End Dev', 2015],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/feature-img3.png',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project2',
    title: 'Multi-Post Stories',
    frame: ['FACEBOOK', 'FULL STACK DEV', 2015],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/feature-img2.png',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project3',
    title: 'Tonic',
    frame: ['CANOPY', 'Back End Dev', 2015],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: '../images/feature-img1.png',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project4',
    title: 'Multi-Post Stories',
    frame: ['FACEBOOK', 'FULL STACK DEV', 2015],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/feature-img4.png',
    projectDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
];

function fetchOneProject(id) {
  let project = {};

  for (let i = 0; i < worksData.length; i += 1) {
    if (id === worksData[i].id) {
      project = worksData[i];
    }
  }

  const popContainer = document.querySelector('.container');
  const popupModal = document.createElement('article');
  popupModal.classList.add('article-popup');

  const articleModal = document.createElement('div');
  articleModal.classList.add('article-modal');
  const crossIcon = document.createElement('span');
  crossIcon.setAttribute('id', 'cross-article');
  crossIcon.innerHTML = '<img src="./images/cross-article.png" alt="X"/>';
  crossIcon.addEventListener('click', () => {
    popContainer.removeChild(popupModal);
  });

  const title = document.createElement('h2');
  title.classList.add('article-title');
  title.innerText = project.title;

  const frames = document.createElement('ul');
  frames.classList.add('frames');
  project.frame.forEach((tag) => {
    const frame = document.createElement('li');
    frame.classList.add('frame');
    frame.innerText = tag;
    frames.appendChild(frame);
  });

  const imgPrev = document.createElement('div');
  imgPrev.classList.add('img-prev');
  const articleImg = document.createElement('img');
  articleImg.setAttribute('atl', project.title);
  articleImg.setAttribute('src', project.imageUrl);
  imgPrev.appendChild(articleImg);

  const articleBlock = document.createElement('div');
  articleBlock.classList.add('article-block');

  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');
  const articleDetails = document.createElement('p');
  articleDetails.classList.add('article-details');
  articleDetails.innerText = project.projectDetails;
  leftBlock.append(articleDetails);

  const br = document.createElement('hr');

  const rightBlock = document.createElement('div');
  rightBlock.classList.add('right-block');

  const articleTags = document.createElement('ul');
  articleTags.classList.add('article-tags');

  project.tags.forEach((tag) => {
    const taglist = document.createElement('li');
    taglist.classList.add('article-tag');
    taglist.innerText = tag;
    articleTags.append(taglist);
  });

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const actBtn = document.createElement('a');
  actBtn.classList.add('act-btn');
  actBtn.setAttribute('href', project.liveLink);
  actBtn.innerHTML = "See Live <img src='./images/live-link.png' alt='live-link'>";
  actions.appendChild(actBtn);

  const actBtnSource = document.createElement('a');
  actBtnSource.classList.add('act-btn');
  actBtnSource.setAttribute('href', project.sourceLink);
  actBtnSource.innerHTML = "See Source <img src='./images/source-link.png' alt='source-link'>";
  actions.appendChild(actBtnSource);

  rightBlock.append(articleTags, br, actions);

  articleBlock.append(leftBlock, rightBlock);

  articleModal.append(crossIcon, title, frames, imgPrev, articleBlock);
  popupModal.append(articleModal);

  popContainer.append(popupModal);
}

const actionsBtn = document.querySelectorAll('.see-more-action');
actionsBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const { id } = e.target;
    fetchOneProject(id);
  });
});

// Validation of the form
function onSubmit(e) {
  const inputEmail = document.getElementById('email');
  const formInfo = document.getElementById('form-info');
  const email = inputEmail.value;
  const message = document.getElementById('message').value;
  const name = document.getElementById('name').value;

  // Check if email value is lowercase or not
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    inputEmail.classList.add('invalid');
    formInfo.classList.add('error');
    formInfo.innerText = 'Error submitting form! The Email should be in lower case!!';
  } else {
    inputEmail.classList.remove('invalid');
    formInfo.classList.remove('error');
    const form = { message, name, email };
    localStorage.setItem('form', JSON.stringify(form))
  }
}
const email = document.getElementById('email');
const message = document.getElementById('message');
const name = document.getElementById('name');

var storedInfo = JSON.parse(localStorage.getItem('form'))
email.value = storedInfo.email;
name.value = storedInfo.name;
message.value = storedInfo.message;
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', onSubmit);

// Remove Error onchange from the form.
const inputEmail = document.getElementById('email');
const formInfo = document.getElementById('form-info');
inputEmail.addEventListener('change', () => {
  inputEmail.classList.remove('invalid');
  formInfo.classList.remove('error');
  formInfo.innerText = '';
});
