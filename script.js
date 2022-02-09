var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var Interval;
var images = [
  'deadpool',
  'halk',
  'ironman',
  'captain',
  // 'batman',
  'blackpanter',
  'antman',
  'spiderman',
  'groot'
  // 'droid'

];

var clone = images.slice(0);
var cards = images.concat(clone);


function shuffle(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards);

for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  myCards.appendChild(card);

  card.onclick = function () {

    if (this.className != 'flipped' && this.className != 'correct') {
      this.className = 'flipped';
      var result = this.dataset.item;
      resultsArray.push(result);
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }

    if (resultsArray.length > 1) {

      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter++;
        win();
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }

    }

  }

};


var check = function (className) {

  var x = document.getElementsByClassName("flipped");
  setTimeout(function () {
    for (var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
  }, 500);

}



var modal = document.getElementById("myModal");
var win = function () {
  if (counter === images.length) {
    clearInterval(Interval);
    modal.style.display = "block";
    text1.innerHTML = "You won!  \n \n Your time was " + timer.innerHTML;
  }

}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const timer = document.getElementById('time');
var min = 0;
var sec = 0;
var milS = 0;

function startTimer() {
  milS = parseInt(milS);
  sec = parseInt(sec);
  min = parseInt(min);
  milS++;

  if (milS == 60) {
    sec = sec + 1;
    milS = 0;
  }

  if (sec == 60) {
    min = min + 1;
    sec = 0;
    milS = 0;
  }

  timer.innerHTML = (min % 10 == min ? ('0' + min) : min) + ':' + (sec % 10 == sec ? ('0' + sec) : sec) + ':' + (milS % 10 == milS ? ('0' + milS) : milS);
}


function restart() {
  window.location.reload();
}

function exit() {
  document.location.replace('https://google.com');
}
