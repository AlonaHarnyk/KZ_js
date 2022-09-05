// // // Конструктор – это обычная функция, к которой применили оператор new. Это приводит к созданию нового объекта и вызову функции в контексте этого объекта.

// // // Любая функция, кроме стрелочной, может быть использована в качестве конструктора, то есть вызвана оператором new. При вызове стрелки из-за new будет ошибка.

// // // Процесс создания объекта через конструктор происходит следующим образом:

// // // Создается новый пустой объект.
// // // Функция-конструктор вызывается в контексте этого объекта.
// // // Ключевое слово this внутри конструктора получает ссылку на этот объект.
// // // Конструктор выполняется и, как правило, модифицирует this (созданный объект), добавляя свойства и методы.
// // // Возвращается this.

// // // const Hotel = function (name, stars, capacity) {
// // //   // this = {};

// // //   // в this пишем свойства и методы
// // //   this.name = name;
// // //   this.stars = stars;
// // //   this.capacity = capacity;

// // //   // return this;
// // // };

// const Hotel1 = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };


// const hotel1 = new Hotel1('Resort Hotel', 5, 100);
// console.log(hotel1);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const Hotel2 = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel2 = new Hotel2('Sunrise Hotel', 5, 100);

// console.log(hotel2);
// // // // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// // hotel2.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// // // hotel2.addGuests(50);
// // // hotel2.removeGuests(50);

// // Function.prototype

//// Создадим функцию-конструктор Guest, которая будет создавать нам экземпляры объектов гостя отеля.

// const Guest = function (name, room) {
// this.name=name;
// this.room = room;
// };

// // Так как функция – это тоже объект, у каждой функции, кроме стрелочных, есть свойство prototype в котором первоначально сохраняется объект с единственным полем конструктора, указывающим на саму функцию-конструктор.

// // Guest.prototype = {
// // constructor: Guest,
// // };

// // У стрелочных функций нет свойства prototype, потому что их нельзя вызывать из-за new, и, соответственно, в нем нет нужды.

// // Свойство Function.prototype:
// // Является объектом
// // У него можно записывать свойства и методы
// // Свойства и методы prototype будут доступны по ссылке __proto__ объекту
// // В качестве prototype первоначально есть метод constructor

// const Guest = function (name, room) {
// this.name=name;
// this.room = room;
// };

// // console.log(Guest.prototype); //{constructor:ƒ}

// // // При создании объекта через new в поле __proto__ записывается ссылка на объект, хранящийся в качестве prototype функции - конструктора.

// const x = new Guest('a', 5)

// console.log(x)

// // Эту особенность мы можем использовать для того, чтобы добавлять в объект prototype методы, которые будут доступны по ссылке абсолютно всем объектам, созданным через new Guest(...).

// // Причем если мы создадим миллион экземпляров гостя, набор методов будет не у каждого свой, а только один, общий, сохраняющийся в свойстве Guest.prototype и доступен всем потомкам по ссылке, записываемой в поле __proto__ объекта при создании через прототипное наследование и цепочка прототипов.

// const Guest = function (name, room) {
// this.name=name;
// this.room = room;
  
// };

// Guest.prototype.showGuestInfo = function() {
// console.log(`name: ${this.name}, room: ${this.room}`);
// };

// console.log(Guest.prototype);

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

//// Так как в свойстве prototype лежит объект, то при прототипном подражании происходит присвоение по ссылке, поэтому если мы изменим значение свойства prototype, то это новое значение получат и все свойства, имеющие ссылку на объект prototype

//// Иногда случаются задачи, когда объекты, созданные функцией-конструктором, должны иметь доступ к полям и методам прототипа объявленным в другой функции-конструкторе.

// // Например мы пишем игру и нам необходимо подготовить логику для системы персонажей, где есть общий конструктор Hero с дефолтными полями общими для всех классов, типа имени, здоровья, количества опыта и т.д. После чего нам необходимо сделать конструкторы для Warrior и Wizard, экземпляры которых также должны иметь доступ к полям Hero, но одновременно иметь свои собственные.

// const Hero = function (name, xp) {
// this.name=name;
// this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
// console.log(`${this.name} gained ${amount} experience points`);
// this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000}

// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500}

// // // Далее необходимо создать Warrior, потому что нет смысла добавлять в Hero абсолютно все поля всех классов. Поэтому нам необходимо создать еще функцию-конструктора, но при этом она должна быть связана с Hero.

// // // Для решения этой задачи мы можем использовать метод call(), вызвав функцию-конструктор Hero и передав ей объект, создаваемый Warrior как контекст.

// const Warrior = function (name, xp, weapon) {
// /*
// * При выполнении функции Warrior вызываем функцию Hero
// * в контексте создаваемого объекта в Warrior, а также передаем
// * аргументы для инициализации полей this.name и this.xp
// *
// * this это будущий экземпляр Warrior
// */
// Hero.call(this, name, xp);

// this.weapon = weapon;
// };

// Warrior.prototype.attack = function() {
// console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// poly.attack(); // Poly attacks with sword

// poly.gainXp(); // Uncaught TypeError: poly.gainXp is not a function

// Поля из Hero.prototype не добавляются в цепочку прототипов по умолчанию. Необходимо явно указать связь поля Warrior.prototype и Hero.prototype.

// // // /*
// // // * Используем Object.create() для того, чтобы сначала записать
// // // * у Warrior.prototype пустой объект, у __proto__ которого будет
// // // * Ссылка на Hero.prototype. Это необходимо сделать до того
// // // * как добавлять методы
// // // */
// Warrior.prototype = Object.create(Hero.prototype);

// Warrior.prototype.attack = function() {
// console.log(`${this.name} attacks with ${this.weapon}`);
// };
// poly.gainXp(300); // Poly gained 300 experience points

// // // Полный пример кода
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// // console.log(Warrior.prototype)

// Warrior.prototype = Object.create(Hero.prototype);

// // console.log(Warrior.prototype)
// Warrior.prototype.constructor = Warrior;

// console.log(Warrior.prototype)

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly)

// poly.gainXp(300); // Poly gained 300 experience points