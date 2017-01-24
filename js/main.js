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
      icecream: 'img/BananaIceCream.jpeg',
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
  console.log('Icecream clicked.');
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

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  console.log('Orange clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  orangeImage = document.createElement('img');
  orangeImage.src = images.fruits.orange;
  imageHolder.appendChild(orangeImage);
  orange = currentFruit;
});

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  console.log('Icecream clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  icecreamImage = document.createElement('img');
  icecreamImage.src = images.desserts.icecream;
  imageHolder.appendChild(icecreamImage);
  icecream = currentDessert;

  if (orange == currentFruit && icecream == currentDessert) {
    var orangeIce = document.querySelector('.Holder--result');
    oraniceImage = document.createElement('img');
    oraniceImage.src = images.mixes.orange.icecream;
    orangeIce.appendChild(oraniceImage);
  }
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  console.log('Banana clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  bananaImage = document.createElement('img');
  bananaImage.src = images.fruits.banana;
  imageHolder.appendChild(bananaImage);
  banana = currentFruit;
});

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  console.log('Icecream clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  icecreamImage = document.createElement('img');
  icecreamImage.src = images.desserts.icecream;
  imageHolder.appendChild(icecreamImage);
  icecream = currentDessert;

  if (banana == currentFruit && icecream == currentDessert) {
    var bananaIce = document.querySelector('.Holder--result');
    baniceImage = document.createElement('img');
    baniceImage.src = images.mixes.banana.icecream;
    bananaIce.appendChild(baniceImage);
  }
});

var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  console.log('Apple clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  appleImage = document.createElement('img');
  appleImage.src = images.fruits.apple;
  imageHolder.appendChild(appleImage);
  apple = currentFruit;
});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  console.log('Cake clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  cakeImage = document.createElement('img');
  cakeImage.src = images.desserts.cake;
  imageHolder.appendChild(cakeImage);
  cake = currentDessert;

  if (apple == currentFruit && cake == currentDessert) {
    var appleCake = document.querySelector('.Holder--result');
    appcakeImage = document.createElement('img');
    appcakeImage.src = images.mixes.apple.cake;
    appleCake.appendChild(appcakeImage);
  }
});

var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  console.log('Apple clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  appleImage = document.createElement('img');
  appleImage.src = images.fruits.apple;
  imageHolder.appendChild(appleImage);
  apple = currentFruit;
});

var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function() {
  console.log('Pie clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  pieImage = document.createElement('img');
  pieImage.src = images.desserts.pie;
  imageHolder.appendChild(pieImage);
  pie = currentDessert;

  if (apple == currentFruit && pie == currentDessert) {
    var applePie = document.querySelector('.Holder--result');
    appieImage = document.createElement('img');
    appieImage.src = images.mixes.apple.pie;
    applePie.appendChild(appieImage);
  }
});

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  console.log('Orange clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  orangeImage = document.createElement('img');
  orangeImage.src = images.fruits.orange;
  imageHolder.appendChild(orangeImage);
  orange = currentFruit;
});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  console.log('Cake clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  cakeImage = document.createElement('img');
  cakeImage.src = images.desserts.cake;
  imageHolder.appendChild(cakeImage);
  cake = currentDessert;

  if (orange == currentFruit && cake == currentDessert) {
    var orangeCake = document.querySelector('.Holder--result');
    orcakeImage = document.createElement('img');
    orcakeImage.src = images.mixes.orange.cake;
    orangeCake.appendChild(orcakeImage);
  }
});

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  console.log('Orange clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  orangeImage = document.createElement('img');
  orangeImage.src = images.fruits.orange;
  imageHolder.appendChild(orangeImage);
  orange = currentFruit;
});

var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function() {
  console.log('Pie clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  pieImage = document.createElement('img');
  pieImage.src = images.desserts.pie;
  imageHolder.appendChild(pieImage);
  pie = currentDessert;

  if (orange == currentFruit && pie == currentDessert) {
    var orangePie = document.querySelector('.Holder--result');
    orpieImage = document.createElement('img');
    orpieImage.src = images.mixes.orange.pie;
    orangePie.appendChild(orpieImage);
  }
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  console.log('Banana clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  bananaImage = document.createElement('img');
  bananaImage.src = images.fruits.banana;
  imageHolder.appendChild(bananaImage);
  banana = currentFruit;
});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  console.log('Cake clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  cakeImage = document.createElement('img');
  cakeImage.src = images.desserts.cake;
  imageHolder.appendChild(cakeImage);
  cake = currentDessert;

  if (banana == currentFruit && cake == currentDessert) {
    var bananaCake = document.querySelector('.Holder--result');
    bancakeImage = document.createElement('img');
    bancakeImage.src = images.mixes.banana.cake;
    bananaCake.appendChild(bancakeImage);
  }
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  console.log('Banana clicked.');
  imageHolder = document.querySelector('.Holder--fruit');
  bananaImage = document.createElement('img');
  bananaImage.src = images.fruits.banana;
  imageHolder.appendChild(bananaImage);
  banana = currentFruit;
});

var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function() {
  console.log('Pie clicked.');
  imageHolder = document.querySelector('.Holder--dessert');
  pieImage = document.createElement('img');
  pieImage.src = images.desserts.pie;
  imageHolder.appendChild(pieImage);
  pie = currentDessert;

  if (banana == currentFruit && pie == currentDessert) {
    var bananaPie = document.querySelector('.Holder--result');
    banpieImage = document.createElement('img');
    banpieImage.src = images.mixes.banana.pie;
    bananaPie.appendChild(banpieImage);
  }
});


var reset = document.querySelector('.reset');
cake.addEventListener('click', function() {
    document.getElementById('.Holder--fruit').reset();
    document.getElementById('.Holder--dessert').reset();
    document.getElementById('.Holder--result').reset();
});
