var sum = 9.99;//pizza basic price
var toppings = [

  {
    topping_name: 'Anchovy',
    labelSource: './assets/anchovy.svg',
    price: 0.99
  },
  {
    topping_name: 'Bacon',
    labelSource: './assets/bacon.svg',
    price: 0.99
  },
  {
    topping_name: 'Basil',
    labelSource: './assets/basil.svg',
    price: 0.99
  },
  {
    topping_name: 'Chili',
    labelSource: './assets/chili.svg',
    price: 0.99
  },
  {
    topping_name: 'Mozzarella',
    labelSource: './assets/mozzarella.svg',
    price: 0.99
  },
  {
    topping_name: 'Mushroom',
    labelSource: './assets/mushroom.svg',
    price: 0.99
  },
  {
    topping_name: 'Olive',
    labelSource: './assets/olive.svg',
    price: 0.99
  },
  {
    topping_name: 'Onion',
    labelSource: './assets/onion.svg',
    price: 0.99
  },
  {
    topping_name: 'Pepper',
    labelSource: './assets/pepper.svg',
    price: 0.99
  },
  {
    topping_name: 'Pepperoni',
    labelSource: './assets/pepperoni.svg',
    price: 0.99
  },
  {
    topping_name: 'Peppers',
    labelSource: './assets/peppers.svg',
    price: 0.99
  },
  {
    topping_name: 'Sweetcorn',
    labelSource: './assets/sweetcorn.svg',
    price: 0.99
  }

];

var pressedButton = [];

function toppingOnClick(topping) {
  var selectedName = topping.topping_name;
  return function () {
    if (pressedButton.includes(selectedName)) {
      var index = pressedButton.indexOf(selectedName);
      pressedButton.splice(index, 1);
      document.getElementById(selectedName).classList.remove('active');
      var remove_list = document.getElementById(`list_item_${selectedName}`)
      remove_list.parentNode.removeChild(remove_list);
      sum = sum - topping.price;
      document.querySelector(".total-price").innerText = "Total:$" + sum.toFixed(2);
    }
    else {
      pressedButton.push(topping.topping_name);
      document.getElementById(selectedName).classList.add('active');
      var item_name = document.createElement('span');
      item_name.innerText = selectedName;
      var price = document.createElement('span');
      price.innerText = "$" + topping.price;
      var topping_list_item = document.createElement('li');
      topping_list_item.appendChild(item_name);
      topping_list_item.appendChild(price);
      topping_list_item.id = `list_item_${selectedName}`;
      document.querySelector('.list-toppings').appendChild(topping_list_item);
      sum = sum + topping.price;
      document.querySelector(".total-price").innerText = "Total:$" + sum.toFixed(2);
    }
  }
}

function createToppingsForm() {
  toppings.forEach((value, index, arr) => {
    var topping = value;
    var btn = document.createElement('button');
    btn.className = 'button';
    btn.type = 'button';
    btn.id = topping.topping_name;
    btn.classList.add('button');
    var result = toppingOnClick(topping);
    btn.onclick = result;
    var topping_img = document.createElement('img');
    topping_img.src = topping.labelSource;
    var topping_span = document.createElement('span');
    topping_span.innerText = topping.topping_name;
    btn.appendChild(topping_img);
    btn.appendChild(topping_span);
    document.querySelector('#new-toppings-area').appendChild(btn);
  });
  document.querySelector(".total-price").innerText = "Total:$9.99";

}

function createToppings() {
  createToppingsForm();
}

window.addEventListener('DOMContentLoaded', createToppings);
