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

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-list span');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var sectionId = this.getAttribute('data-section');
      var section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

const textToType = "I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.";

const typingElement = document.getElementById('typing-animation');

function typeWriter(text, index) {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index), 10); 
  }
}

typeWriter(textToType, 0);



// function fetchOneProject(id) {
//   let project = {};

//   for (let i = 0; i < worksData.length; i += 1) {
//     if (id === worksData[i].id) {
//       project = worksData[i];
//     }
//   }

//   const popContainer = document.querySelector('.container');
//   const popupModal = document.createElement('article');
//   popupModal.classList.add('article-popup');

//   const articleModal = document.createElement('div');
//   articleModal.classList.add('article-modal');
//   const crossIcon = document.createElement('span');
//   crossIcon.setAttribute('id', 'cross-article');
//   crossIcon.innerHTML = '<img src="./images/cross-article.png" alt="X"/>';
//   crossIcon.addEventListener('click', () => {
//     popContainer.removeChild(popupModal);
//   });

//   const title = document.createElement('h2');
//   title.classList.add('article-title');
//   title.innerText = project.title;

//   const frames = document.createElement('ul');
//   frames.classList.add('frames');
//   project.frame.forEach((tag) => {
//     const frame = document.createElement('li');
//     frame.classList.add('frame');
//     frame.innerText = tag;
//     frames.appendChild(frame);
//   });

//   const imgPrev = document.createElement('div');
//   imgPrev.classList.add('img-prev');
//   const articleImg = document.createElement('img');
//   articleImg.setAttribute('atl', project.title);
//   articleImg.setAttribute('src', project.imageUrl);
//   imgPrev.appendChild(articleImg);

//   const articleBlock = document.createElement('div');
//   articleBlock.classList.add('article-block');

//   const leftBlock = document.createElement('div');
//   leftBlock.classList.add('left-block');
//   const articleDetails = document.createElement('p');
//   articleDetails.classList.add('article-details');
//   articleDetails.innerText = project.projectDetails;
//   leftBlock.append(articleDetails);

//   const br = document.createElement('hr');

//   const rightBlock = document.createElement('div');
//   rightBlock.classList.add('right-block');

//   const articleTags = document.createElement('ul');
//   articleTags.classList.add('article-tags');

//   project.tags.forEach((tag) => {
//     const taglist = document.createElement('li');
//     taglist.classList.add('article-tag');
//     taglist.innerText = tag;
//     articleTags.append(taglist);
//   });

//   const actions = document.createElement('div');
//   actions.classList.add('actions');

//   const actBtn = document.createElement('a');
//   actBtn.classList.add('act-btn');
//   actBtn.setAttribute('href', project.liveLink);
//   actBtn.innerHTML = "See Live <img src='./images/live-link.png' alt='live-link'>";
//   actions.appendChild(actBtn);

//   const actBtnSource = document.createElement('a');
//   actBtnSource.classList.add('act-btn');
//   actBtnSource.setAttribute('href', project.sourceLink);
//   actBtnSource.innerHTML = "See Source <img src='./images/source-link.png' alt='source-link'>";
//   actions.appendChild(actBtnSource);

//   rightBlock.append(articleTags, br, actions);

//   articleBlock.append(leftBlock, rightBlock);

//   articleModal.append(crossIcon, title, frames, imgPrev, articleBlock);
//   popupModal.append(articleModal);

//   popContainer.append(popupModal);
// }

// const actionsBtn = document.querySelectorAll('.see-more-action');
// actionsBtn.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const { id } = e.target;
//     fetchOneProject(id);
//   });
// });


