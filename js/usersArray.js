'use strict';

// 1.1 Для 
function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 120),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

//  прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип. 
// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).

const schoolAgeWomenFullNames = users.filter((user) => user.age >= 6 && user.age <= 18 && !user.isMale).map((user) => user.getFullName());

console.log( schoolAgeWomenFullNames);

// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com

const isUserMailName = users.some((user) => user.email === "useremail94@gmail.com");

console.log('isUserMailName :>> ', isUserMailName);


// 1.4 Проверить, все ли пользователи подписаны (subscribed).

users.every((user) => user.isSubscribed);
console.log('users :>> ', users);

console.log( users.every((user) => user.isSubscribed)); 