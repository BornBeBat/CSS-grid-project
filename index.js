/* =====================================================
============= Связанные списки
========================================================*/

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertAtBeginning(data) {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     insertAtEnd(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let cur = this.head;
//             while (cur.next) {
//                 cur = cur.next;
//             }
//             cur.next = newNode;
//         }
//     }

//     insertAfter(prevNode, data) {
//         if (!prevNode) {
//             console.log("Попереднього вузла не існує.");
//             return;
//         }
//         const newNode = new Node(data);
//         newNode.next = prevNode.next;
//         prevNode.next = newNode;
//   }
//   insertBefore(key, data) {
//         let cur = this.head;
//         let prev = null;
//         while (cur && cur.data !== key) {
//             prev = cur;
//             cur = cur.next;
//         }
//         if (!cur) {
//             console.log("вузла не існує.");
//             return;
//         }
//     const newNode = new Node(data);
//     newNode.next = cur
//     prev.next = newNode

//     }

//     deleteNode(key) {
//         let cur = this.head;
//         if (cur && cur.data === key) {
//             this.head = cur.next;
//             cur = null;
//             return;
//         }
//         let prev = null;
//         while (cur && cur.data !== key) {
//             prev = cur;
//             cur = cur.next;
//         }
//         if (!cur) {
//             return;
//         }
//         prev.next = cur.next;
//         cur = null;
//     }

//     searchElement(data) {
//       let cur = this.head;
//       while (cur) {
          
//         if (cur.data === data) {
//                 return cur;
//             }
//             cur = cur.next;
//         }
//         return null;
//     }

//     printList() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Створюємо зв'язаний список
// const llist = new LinkedList();

// // Вставляємо вузли в початок
// llist.insertAtBeginning(5);
// llist.insertAtBeginning(10);
// llist.insertAtBeginning(15);

// // Вставляємо вузли в кінець
// llist.insertAtEnd(20);
// llist.insertAtEnd(25);

// // Друк зв'язаного списку
// console.log("Связанный список:");
// llist.printList();

// // Видаляємо вузол
// llist.deleteNode(10);

// console.log("\\Связанный список после удаления 10");
// llist.printList();

// // Пошук елемента у зв'язаному списку
// console.log("\\Ищем элемент 15:");
// const element = llist.searchElement(15);
// if (element) {
//     console.log(element.data);
// }
// llist.insertBefore(20, 11);
// // Друк зв'язаного списку
// console.log("Связанный список со вставкой 11 перед 20:");
// llist.printList();
// Створення хеш-таблиці (Map)
// const hashTable = new Map();

// // Додавання елемента
// hashTable.set('key1', 'value1');
// hashTable.set('key2', 'value2');

// // Виведення результату
// console.log(hashTable); // Map(2) {'key1' => 'value1', 'key2' => 'value2'}
// // Видалення елемента
// hashTable.delete('key1');

// // Виведення результату
// console.log(hashTable); // Map(1) {'key2' => 'value2'}
// const value = hashTable.get('key2');
// console.log(value); // value2
// hashTable.set('key2', 'new value');
// console.log(hashTable); // Map(1) { 'key2' => 'new value' }
// function factorial(n) {
//   if (n === 0) {
// 		// базовий випадок
//     return 1;
//   } else {
// 		// рекурсивний випадок
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial()); // виведе 120

/* =====================================================
============= Рекурсия
========================================================*/
// function factorial(n) {
//   console.log("Виклик функції factorial з n = ", n);
//   if (n === 1) {
//     console.log("Базовий випадок, n = 1, повернення 1");
//     return 1;
//   } else {
//     const result = n * factorial(n - 1);
//     console.log("Повернення результату для n = ", n, ": ", result);
//     return result;
//   }
// }

// console.log(factorial(5));

// function fibonacciMemo(n, memo = {}) {
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n <= 1) {
//     return n;
//   } else {
//     const value = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
//     memo[n] = value;
//     return value;
//   }
// }

// // Тестуємо функцію
// console.log(fibonacciMemo(10));  // Виведе: 55

/* =====================================================
============= Алгоритмы сортировки
========================================================*/

// сортировка пузыриком

// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//               // Обмін елементів, якщо вони не впорядковані
//               console.log(arr);
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// const numbers = [5, 3, 8, 4, 2];
// bubbleSort(numbers);
// console.log(numbers);


// Сртировка вставками

// function insertionSort(arr) {
//     const n = arr.length;
//     for (let i = 1; i < n; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && key < arr[j]) {
//             arr[j + 1] = arr[j];
//             j -= 1;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// const numbers = [5, 3, 8, 4, 2];
// insertionSort(numbers);
// console.log(numbers);

// Сортировка выбором

// function selectionSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let minIdx = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//     }
//     return arr;
// }

// const numbers = [5, 3, 8, 4, 2];
// console.log(selectionSort(numbers));

// Быстрая сортировка

// function quicksort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const pivot = arr[Math.floor(arr.length / 2)];
//     const left = arr.filter(x => x < pivot);
//     const middle = arr.filter(x => x === pivot);
//     const right = arr.filter(x => x > pivot);
//   console.log(left);
//   console.log(middle);
//   console.log(right);
//     return [...quicksort(left), ...middle, ...quicksort(right)];
// }

// const result = quicksort([7, 12, 3, 5, 8, 11, 20, 1, 6, 14]);
// console.log(result); // Виведе: [2, 3, 4, 5, 8]

/* =====================================================
============= Алгоритмы поиска
========================================================*/
// Линейный поиск

// function linearSearch(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             return i;
//         }
//     }

//     return -1;
// }

// // Приклад використання:
// const array = [1, 3, 5, 7, 9, 11];
// const elementToFind = 7;
// const result = linearSearch(array, elementToFind);

// console.log(`Елемент ${elementToFind} знаходиться на ${result}`);

// Бинарный поиск

// function binarySearch(arr, x) {
//     let low = 0;
//     let high = arr.length - 1;
//     let mid = 0;

//     while (low <= high) {
//         mid = Math.floor((high + low) / 2);

//         if (arr[mid] < x) {
//             low = mid + 1;
//         } else if (arr[mid] > x) {
//             high = mid - 1;
//         } else {
//             return mid;
//         }
//     }

//     return -1;
// }

// const arr = [2, 3, 4, 10, 40];
// const x = 10;
// const result = binarySearch(arr, x);

// if (result !== -1) {
//     console.log(`Element is present at index ${result}`);
// } else {
//     console.log("Element is not present in array");
// }

// Интреполяционный поиск

// function interpolationSearch(arr, x) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high && x >= arr[low] && x <= arr[high]) {
//         const index = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]));
//         if (arr[index] === x) {
//             return index;
//         }
//         if (arr[index] < x) {
//             low = index + 1;
//         } else {
//             high = index - 1;
//         }
//     }

//     return -1;
// }

// const arr = [1, 3, 5, 7, 9, 11, 14, 16, 18, 20, 22, 25, 28, 30];
// const index = interpolationSearch(arr, 25);
// console.log(arr[index]); // 25


/* =====================================================
============= хеш таблица 
========================================================*/
// const hashTable = {};

// hashTable['John Doe'] = '+1234567890';
// hashTable['Jane Doe'] = '+0987654321';
// hashTable['Jacob Mercer'] = '+0487154395';

// for (const key in hashTable) {
// 	// використовуємо hasOwnProperty(), щоб перебирати лише власні властивості
//   if (hashTable.hasOwnProperty(key)) {
// 		console.log(`key is: ${key}, value is: ${hashTable[key]}`);
//   }
// }

/* =====================================================
============= хеш таблица через Map
========================================================*/

// const hashTable = new Map();

// hashTable.set('John Doe', '+1234567890');
// hashTable.set('Jane Doe', '+0987654321');
// hashTable.set('Jacob Mercer', '+0487154395');

// console.log(hashTable.get('Jacob Mercer'));

// hashTable.set('John Doe', '+2345678901');
// console.log(hashTable.get('John Doe'));

// console.log(hashTable.size);

// hashTable.delete('Jane Doe');

// console.log(hashTable.size);

// for (const [key, value] of hashTable) {
//   console.log(`${key} = ${value}`);
// }
