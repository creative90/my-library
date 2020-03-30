/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
$(document).ready(() => {
  const element = $('meta[name="active-menu"]').attr('content');
  $(`#${element}`).addClass('active');
});
