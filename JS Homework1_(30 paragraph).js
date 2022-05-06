// JS Homework1_(30 paragraph)

//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// P.S. Для вывода в OUTPUT сообщений к допуску по возрасту, введите в const age_1 следующий возраст: 17, 18, 19.

const age_1 = 17;
const age_2 = 18;

let compare_1 = age_1 < age_2;

if (compare_1) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then 18")
}