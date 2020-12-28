import './scss/index.scss';
import $ from 'jquery';
import { simulation1 } from './js/simulation1';
import { simulation2 } from './js/simulation2';
import { simulation3 } from './js/simulation3';
import { simulation4 } from './js/simulation4';
import { simulation5 } from './js/simulation5';

{
  simulation1();
  simulation2();
  simulation3();
  simulation4();
  simulation5();
}

let currentStep = 0;
const totalSteps = 5;
$('#arrow-left').click(function() {
  if (currentStep <= 0) {
    currentStep = totalSteps;
  } else {
    currentStep -= 1;
  }
  changeSectionVisibility();
});
$('#arrow-right').click(function() {
  if (currentStep >= totalSteps) {
    currentStep = 0;
  } else {
    currentStep += 1;
  }
  changeSectionVisibility();
});

function changeSectionVisibility() {
  $('section').fadeOut();
  $('#simulation1').html('');
  $('#simulation2').html('');
  $('#simulation3').html('');
  $('#simulation4').html('');
  $('#simulation5').html('');
  switch (currentStep) {
    case 1:
      simulation1();
      break;
    case 2:
      simulation2();
      break;
    case 3:
      simulation3();
      break;
    case 4:
      simulation4();
      break;
    case 5:
      simulation5();
      break;
    default:
      break;
  }
  $('section[data-id="' + currentStep + '"]').fadeIn();
}
