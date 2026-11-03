const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

cities.forEach( function (city) {
    console.log(city);
} ) 

cities.forEach( (city) => {
    console.log(city);
} )

function printMe(city){
    console.log(city);
}

cities.forEach(printMe)