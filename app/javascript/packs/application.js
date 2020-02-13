/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// load libaries
import 'bootstrap';
import 'select2';
// Check if loaded
console.log('Hello World from Webpacker')
// define elements & result array
const dose = document.querySelector('#dose');
const addmore = document.querySelector('#add-more');
const selector = document.querySelector('.select2-multiple');
const result = document.querySelector('#results');
const results = [];
let ingredient
let dosage
// // Add more ingredient if has dose
// if (dose.value.length > 0){
//   addmore.disabled = false;
// }
// check if ingredient is added
$(document).ready(function() {
   $('.select2-multiple').select2({maximumSelectionLength: 1}).change(x=> {
    if (x.target.value !== '' ){
      ingredient = x.target.value;
      clearfields('');
    }
   });
});

addmore.addEventListener('click', (event) => {
  event.preventDefault();
  if (dose.value.length > 0){
    dosage = dose.value;
    results.push({ingredient: ingredient,dose: dosage})
    clearfields('none');
    console.log(results);
    document.querySelector(`.ingredient-${ingredient.trim().replace(' ','')}`).remove();
    result.value += `${ingredient}:${dosage}$`;
    $('.select2-multiple').val(null).trigger('change');
  }
  else
    alert('Please enter dosage!')
});

function clearfields(display){
  dose.value = '';
  addmore.style.display = display;
  dose.style.display = display;
}
