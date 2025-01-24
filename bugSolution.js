function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++; // Increment i to avoid infinite loop
  }
}

myFunction();

/*This code will produce the following output:
0
1
2
3
4
5
6
7
8
9*/