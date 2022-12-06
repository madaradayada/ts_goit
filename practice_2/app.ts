// Задайте правильные ts типы, для классических js;

let age: number;
age = 50;

let str: string;
str = 'Max';

let toggle: boolean;
toggle = true;

let empty = null;
empty = null;

let notInitialize = undefined;
notInitialize = undefined;

let callback = (a: number) => 5;
callback = (a) => { return 100 + a };

// Задавайте тип для переменной в которую можно сохранить любое значение.

let anything: any; 
anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some:unknown;
some = 'Text';

let strn: string;

if(typeof some === 'string') {
    strn = some;
}

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

let person: [string, number];

person = ['Max', 21];

//  Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Load {LOADING, READY};

const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
}

// Сделайте переменную, которая может принимать или строку или число.

let union: string | number;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let literal: 'enable' | 'disable';

// Укажите типы для следующих функций

function showMessage(message:string):void {
    console.log(message);
  }
  
  
  function calc(num1:number, num2:number):number {
    return num1 + num2;
  }
  
  function customError():never {
    throw new Error('Error');
  }

//    Создайте свой тип данных на основе имеющихся данных.

type Page = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
      createAt: Date;
      updateAt: Date;
    }
  }