const cameron = {
  
}


let people = {

    Toshi: {
        age: 24,

        height: 174.46,
    
        weight: 230,
    
        location: 'Homertown'

    },

    Noshi: {
        age: 24,

        height: 175.36,
    
        weight: 225,
    
        location: 'Homertown'

    },

    Max: {
        age: 24,

        height: 180.32,

        weight: 185,

        location: 'Homertown',

        bench: 22,

        forty: 4.34


    },

    Maxwell: {
        age: 24,

        height: 177.62,

        weight: 190,

        location: 'Homertown',

        bench: 32,

        forty: 4.36


    }

    
   


}

people.Maxwell.age = 16;
people.Max.age = 16;


console.table(people)


class Player{
    constructor(name, height, age) {
        this.name = name;
        this.height = height;
        this.age = age;

    }
}


class Track_athlete {
    constructor(first_name, last_name, height, weight) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.height = height;
        this.weight = weight;
    }
}


