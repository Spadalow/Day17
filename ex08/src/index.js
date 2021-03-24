const _ = require('lodash');


const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];

function getUsers() {
    var output = "";
    for (var i = 0; i < users.length; i++) {
        [output] = [users[i]];
        console.log(output);
    }
    return output;
}
function findUser(lastName, gender) {
    try {
        
        var user = _.find(users, { "lastName": lastName, "gender": gender });
        var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;

        console.log(iFindUser);
        return iFindUser;
    } catch (error) {
        error.message = "Cannot read property 'firstName' of undefined"
        console.log(error.message); 
        return error.message; 
    }
}

getUsers();
findUser("Doe", "male"); 
findUser("Doe", "female"); 
findUser("Carrey", "male"); 
findUser("Winslet", "female"); 
findUser("Bowie", "male"); 

module.exports = findUser;