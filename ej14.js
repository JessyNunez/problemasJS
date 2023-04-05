let nums = [];
for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Ingresa un número: "));
  nums.push(num);
}
nums.sort();
console.log("El # mayor es: " + nums[4]);
console.log("El # menor es: " + nums[0]);
