
// 1. Add details of single cat to page.

//var app = function() {

//  var uList = document.createElement('ul');
//  uList.classList.add('cat');

//  var lineItem1 = document.createElement('li');
//  lineItem1.innerText = 'Name: Bob (twin brother of Max)';

//  var lineItem2 = document.createElement('li');
//  lineItem2.innerText = 'Favourite food: Dreamies';

//  var lineItem3 = document.createElement('li');
//  lineItem3.innerHTML = '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">';

//  uList.appendChild(lineItem1);
//  uList.appendChild(lineItem2);
//  uList.appendChild(lineItem3);

//  var cats = document.getElementById('cats');
//  cats.appendChild(uList);

//};

// 2. Add details of multiple cats.

//var app = function() {

//  var catsArr = [
//    {
//      name: "Name: Max",
//      favFood: "Favourite food: Whiskas Temptations",
//      image: '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">'
//    },

//    {
//      name: "Name: Bob (twin brother of Max)",
//      favFood: "Favourite food: Dreamies",
//      image: '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">'
//    },

//    {
//      name: "Name: Joe (the 'other twin brother' of Max)",
//      favFood: "Favourite food: Mice",
//      image: '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">'
//    },
//  ];

//  var addCat = function(name, favFood, image){

//    var uList = document.createElement('ul');
//    uList.classList.add('cat');

//    var lineItem1 = document.createElement('li');
//    lineItem1.innerText = name;

//    var lineItem2 = document.createElement('li');
//    lineItem2.innerText = favFood;

//    var lineItem3 = document.createElement('li');
//    lineItem3.innerHTML = image;

//    uList.appendChild(lineItem1);
//    uList.appendChild(lineItem2);
//    uList.appendChild(lineItem3);

//    var cats = document.getElementById('cats');
//    cats.appendChild(uList);
//  };

//  for (var i = 0; i < catsArr.length; i++){
//    addCat(catsArr[i].name, catsArr[i].favFood, catsArr[i].image);
//  };

// 3. Add details of multiple cats - code refactors per Alex
var app = function() {

  var catsArr = [
    {
      name: "Name: Max",
      favFood: "Favourite food: Whiskas Temptations",
      image: '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">'
    },

    {
      name: "Name: Bob (twin brother of Max)",
      favFood: "Favourite food: Dreamies",
      image: '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">'
    },

    {
      name: "Name: Joe (the 'other twin brother' of Max)",
      favFood: "Favourite food: Mice",
      image: '<img width="500" src="http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg">'
    }
  ];

  var createElement = function(params){
    var element = document.createElement(params.tag);
    if (params.className) element.classList.add(params.className);
    if (params.text) element.innerText = params.text;
    if (params.html) element.innerHTML = params.html;
    return element;
  }

  var addCat = function(name, favFood, image){
    // Create elements.
    var uList = createElement({tag: 'ul', className: 'cat'});
    var lineItem1 = createElement({tag: 'li', text: name});
    var lineItem2 = createElement({tag: 'li', text: favFood});
    var lineItem3 = createElement({tag: 'li', html: image});
    // Append elements.
    uList.appendChild(lineItem1);
    uList.appendChild(lineItem2);
    uList.appendChild(lineItem3);
    var cats = document.querySelector('#cats');
    cats.appendChild(uList);
  }

  for (var i = 0; i < catsArr.length; i++){
    addCat(catsArr[i].name, catsArr[i].favFood, catsArr[i].image);
  };
};

window.onload = app;