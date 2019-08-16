var buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', function() {
  var inputBox = document.querySelector('input').value;
  var greeting = document.querySelector('p');
  return greeting.innerText = `Hi ${inputBox}, your awesome!`;
});
