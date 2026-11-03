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

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )