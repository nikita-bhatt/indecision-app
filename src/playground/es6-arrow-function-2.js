/*const add = function(a,b){
    //console.log(arguments);
    return a+b;
}
console.log(add(6,3,1));*/

const getAddition = (a,b) => {
    //console.log(arguments);
    return a+b;
};
console.log(getAddition(6,6));

const user = {
    name: 'Nikita Bhatt',
    cities: ['singali','pihoragarh','tanakpur'],
    placesLived(){
    //const that=this;
    return this.cities.map((city) => this.name + ' has lived in ' +city);
    } 
};
console.log(user.placesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyby: 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyby * number);
    }
};
console.log(multiplier.numbers);
console.log(multiplier.multiply());