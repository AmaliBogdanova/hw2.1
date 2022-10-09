var age = +prompt('Введите свой возвраст')
if (age > 0 && age < 18 || age == 18){
    console.log('Вы еще молоды');
}else if (age > 18 && age < 50 || age == 50 ){
    console.log('Вам нужно работать');
}else if (age > 50 && age < 59 || age == 59 ){
    console.log('Вам скоро на пенсию');
}else if (age > 59 && age < 100 || age == 100 ){
    console.log('Вы пенсионер');
}else{
    console.log('Что-то пошло не так');
}