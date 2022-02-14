/*function square(x)
{
    return (x*x);
}
console.log(square(3))

const squareArrow = (x) => {
    return x*x;
}

const squareArrow = (x) => x*x;

console.log(squareArrow(16));*/

function getFirstName(fullName)
{
    return fullName.split(' ')[0];
}
console.log(getFirstName('Nikita Bhatt'));

//const firstNameArrow = (fullName) => {
  //  return fullName.split(' ')[0];
//}
//console.log(firstNameArrow('Nikita Bhatt'));

const firstNameArrow = (fullName) => fullName.split(' ')[0];
console.log(firstNameArrow('Nikita Bhatt'));