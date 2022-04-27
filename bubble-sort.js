const listOfNumbers = [2, 4, 3, 6, 7, 9, 10, 1, 5, 8];

function bubbleSort(list) {
  console.log(
    'Implement bubble sort to sort this list : ',
    list.join(' - '),
    '\n',
    '-------------------------------------------------------------------------------'
  );

  //Implementing the algorithm
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        const temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;

        swapped = true;
      }
    }
  }

  console.log(
    'After implementing bubble sort the sorted list is : ',
    list.join(' - '),
    '\n',
    '-------------------------------------------------------------------------------'
  );
}

bubbleSort(listOfNumbers);
