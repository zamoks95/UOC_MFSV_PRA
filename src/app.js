import './scss/index.scss';
import $ from 'jquery';

$(document).ready(function() {
  $('.component-item:first()').click();
});

$('.sidebar__item').click(function() {
  $(this)
    .find('.sidebar__item__content')
    .slideDown('sidebar__item__content--active');

  $(this)
    .find('.sidebar__item__header__icon')
    .toggleClass('sidebar__item__header__icon--active');

  $('.sidebar__item')
    .not(this)
    .each(function() {
      $(this)
        .find('.sidebar__item__content')
        .slideUp('sidebar__item__content--active');
      $(this)
        .find('.sidebar__item__header__icon')
        .removeClass('sidebar__item__header__icon--active');
    });
});

$('.component-item').click(function() {
  console.log($(this).attr('data-id'));
});
