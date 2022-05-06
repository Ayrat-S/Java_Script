// JS Homework1_(31 paragraph)

//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// P.S. Для вывода в OUTPUT сообщений к допуску по возрасту, введите в const age_1 следующий возраст: 17, 18, 59, 60, 61.

const age_1 = 17;
const age_2 = 18;
const age_3 = 60;

let compare_for_middle_man_1 = age_1 >= age_2;
let compare_for_middle_man_2 = age_1 < age_3;
let compare_for_young_man = age_1 < age_2;
let compare_for_old_man = age_1 > age_3;

if (compare_for_old_man) {
    console.log("Keep calm and look Culture channel!")
} else if (compare_for_young_man) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then 18")
} else if (compare_for_middle_man_2) {
    console.log("Welcome  !")
} else if (compare_for_middle_man_1) {
    console.log("Welcome  !")
}