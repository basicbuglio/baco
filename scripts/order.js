const selectCompressive = document.getElementById('compressive-select');
const selectExtensive = document.getElementById('extensive-select');
const selectTorsion = document.getElementById('torsion-select');
const selectSpecial = document.getElementById('special-select');

const compressiveForm = document.querySelector('.form--compressive');
const extensiveForm = document.querySelector('.form--extensive');
const torsionForm = document.querySelector('.order__contacts--torsion');
const specialForm = document.querySelector('.order__contacts--special');


const hideUnselected = () => {
  compressiveForm.style.display = 'none';
  extensiveForm.style.display = 'none';
  torsionForm.style.display = 'none';
  specialForm.style.display = 'none';
}

const displayForm = (type) => {
  hideUnselected();
  if (type === extensiveForm || type === compressiveForm) {
    type.style.display = 'block';
  } else {
    type.style.display = 'flex';
  }
  type.scrollIntoView({behavior: 'smooth'});
}

selectExtensive.addEventListener('click', displayForm.bind(null, extensiveForm));
selectCompressive.addEventListener('click', displayForm.bind(null, compressiveForm));
selectTorsion.addEventListener('click', displayForm.bind(null, torsionForm));
selectSpecial.addEventListener('click', displayForm.bind(null, specialForm));


 