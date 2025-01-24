function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
    i++;
  }
}

myFunction();

/*This code will produce the following output:
0
1
2
3
4
5*/