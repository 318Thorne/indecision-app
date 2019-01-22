// argumetns object - no longer bound with arro functions

// this keyword - no longer bound

const user  = {
    name: "",
    cities: ["sydney", "newcastle"],
    printPlacesLived(){
        console.log(this.cities);
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in" + city);
        })
    }
};
user.printPlacesLived();

const multipler = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}