console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  console.log('Apple clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  appleImage = document.createElement('img');
  appleImage.src = images.fruits.apple;
  imageHolder.appendChild(appleImage);
  apple = currentFruit;
});

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  console.log('Icecream cliked.');
  imageHolder = document.querySelector('.Holder--dessert');
  icecreamImage = document.createElement('img');
  icecreamImage.src = images.desserts.icecream;
  imageHolder.appendChild(icecreamImage);
  icecream = currentDessert;

  if (apple == currentFruit && icecream == currentDessert) {
    var appleIce = document.querySelector('.Holder--result');
    appiceImage = document.createElement('img');
    appiceImage.src = images.mixes.apple.icecream;
    appleIce.appendChild(appiceImage);
  }
});



// var orange = document.querySelector('.Fruit--orange');
// apple.addEventListener('click', function() {
//   console.log('Orange clicked.');
//   document.getElementById("Holder Holder--fruit");
//   orange.classList.remove('click');
  // update image in fruit holder
// });
