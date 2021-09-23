import "../css/main.scss";

//Selectors
const cardContainer = document.querySelector(".card-container");
//Element Creator
const divElement = document.createElement("div");
divElement.classList.add("container");

//TODO:Random Picture Generator Array
//Dog IMG
const randomDogPictures = [];
for (let i = 1; i <= 4; i++) {
  randomDogPictures.push(
    `https://placedog.net/250/300?id=${Math.ceil(Math.random() * 30 + 1)}`
  );
}
//Duck IMG
const randomDuckPictures = [
  "https://images.unsplash.com/photo-1625461860170-884e56c2066f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHVja3x8fHx8fDE2MzIzNDY4Mzg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",
  "https://images.unsplash.com/photo-1501721857084-6b993d35774a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHVja3x8fHx8fDE2MzIzNDY4NDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",
  "https://images.unsplash.com/photo-1602023146507-cb7a3be1ac1b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHVja3x8fHx8fDE2MzIzNDY4NTE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",
  "https://images.unsplash.com/photo-1484704407203-402da6f3879d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHVja3x8fHx8fDE2MzIzNDcyNDI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",
];

//Animal Pictures Array List
const dogsAndDucks = [...randomDogPictures, ...randomDuckPictures];

//Age Generator
const randomAge = [];
for (let i = 1; i <= 10; i++) {
  randomAge.push(Math.ceil(Math.random() * 10 + 1));
}

//TODO:Information Arrays for DOGS & DUCKS
const dogDetail = [
  {
    name: "Nuka",
    img: dogsAndDucks[0],
    numberOfLegs: "4",
    age: randomAge[0],
  },
  {
    name: "Silhouette",
    img: dogsAndDucks[1],
    numberOfLegs: "4",
    age: randomAge[1],
  },
  {
    name: "Licorice",
    img: dogsAndDucks[2],
    numberOfLegs: "4",
    age: randomAge[2],
  },
  {
    name: "Phillicia",
    img: dogsAndDucks[3],
    numberOfLegs: "4",
    age: randomAge[3],
  },
];
const duckDetail = [
  {
    name: "Ash",
    img: dogsAndDucks[dogsAndDucks.length - 4],
    numberOfLegs: "2",
    age: randomAge[4],
  },
  {
    name: "Puffin",
    img: dogsAndDucks[dogsAndDucks.length - 3],
    numberOfLegs: "2",
    age: randomAge[5],
  },
  {
    name: "Oreo",
    img: dogsAndDucks[dogsAndDucks.length - 2],
    numberOfLegs: "2",
    age: randomAge[6],
  },
  {
    name: "Kitkat",
    img: dogsAndDucks[dogsAndDucks.length - 1],
    numberOfLegs: "2",
    age: randomAge[7],
  },
];

//Class Structure
class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
}

//DOG -> EXTENDS FROM ANIMAL
class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs), (this.age = age);
  }

  infos() {
    divElement.innerHTML += `
    <div class="card">
          <div class="circle">
            <h2>${this.name}</h2>
          </div>
          <div>
          <img class="card-image" src="${this.image}"></img>
          </div>
          <div class="content">
            <p class="text">Age: ${this.age} & Number of Legs: ${this.numberOfLegs}</p>
            <a href="#">Read More</a>
          </div>
        </div>
    `;
    cardContainer.appendChild(divElement);
  }
}

//DUCK -> EXTENDS FROM ANIMAL
class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs), (this.age = age);
  }

  infos() {
    divElement.innerHTML += `
    <div class="card">
          <div class="circle">
            <h2>${this.name}</h2>
          </div>
          <div>
          <img class="card-image" src="${this.image}"></img>
          </div>
          <div class="content">
            <p class="text">Age: ${this.age} & Number of Legs: ${this.numberOfLegs}</p>
            <a href="#">Read More</a>
          </div>
        </div>
    `;

    cardContainer.appendChild(divElement);
  }
}

dogDetail.forEach((dog) => {
  new Dog(dog.name, dog.img, dog.numberOfLegs, dog.age).infos();
});
duckDetail.forEach((duck) => {
  new Duck(duck.name, duck.img, duck.numberOfLegs, duck.age).infos();
});
