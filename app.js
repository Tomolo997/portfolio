const containerSkills = document.querySelector('.container__skills');
const containerProjects = document.querySelector('.container__Projects');
const containerContact = document.querySelector('.container__contact');

const navigationItemSkills = document.querySelector('.navigationItemSkills');
const navigationItemProjects = document.querySelector(
  '.navigationItemProjects'
);
const navigationItemContact = document.querySelector('.navigationItemContact');

navigationItemSkills.addEventListener('click', function (e) {
  containerSkills.classList.add('active');
  containerProjects.classList.remove('active');
  containerContact.classList.remove('active');
});
navigationItemProjects.addEventListener('click', function (e) {
  containerSkills.classList.remove('active');
  containerProjects.classList.add('active');
  containerContact.classList.remove('active');
});
navigationItemContact.addEventListener('click', function (e) {
  containerSkills.classList.remove('active');
  containerProjects.classList.remove('active');
  containerContact.classList.add('active');
});
