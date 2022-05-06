// JS Homework1_(29 paragraph)

//  29. Создать if в котором будете проверять значение переменной age_1
// P.S. Для вывода в OUTPUT сообщений к допуску по возрасту, введите в const age_1 следующий возраст: 17, 18, 59, 60, 61.


const age_1 = 17;
const age_2 = 18;
const age_3 = 60;

let compare_for_midlle_man = age_1 >= age_2;
let compare_for_old_man = age_1 > age_3;

if (compare_for_old_man) {
	console.log("Keep calm and look Culture channel!")
} else if (compare_for_midlle_man) {
	console.log("Welcome  !")
} else {
	console.log("You don’t have access cause your age is " + age_1 + " It’s less then 18")
}