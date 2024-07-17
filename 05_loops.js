// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element);   
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    let sum = 5 * element ;
    console.log(`5 X ${element} = ${sum} `);
}

// while loop

let sum = 0 ;
let i = 1; 

while (i <= 10) {
    sum+= i;
    i++;
}

console.log(sum);

let a = 10;
while(a >= 1) {
    console.log(a);
    a--;
}

// do-while loop

let b = 1;

do {
    console.log(b);
    b++;
} while (b <= 5);

// nested loop

for (let i = 1; i <= 5; i++) {
  let pattern = '';
  for(let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

// continue and break

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++){
    if(i ===  7) {
      break
    }
    console.log(i);
}