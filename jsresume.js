var name = 'Adrian Thomas';
var upperCase = name.toUpperCase();
var career = 'Web Developer';
var description = "My name is Adrian Thomas. I am from Gardendale, Al, just outside of Birmingham and I worked in retail all of my life.";
var interests = ["Playing Guitar", "Licking Doorbells", "Playing Video Games"];
function displayPosition (compNames , jobTitle , description ) {
    return '* ' + compNames + ' ' + jobTitle + " - " + description;
}

function displaySkills (boolean , skill ) {
    if ( boolean == true) {
        return "* Check it: " + skill;
    } else if (boolean == false) { 
        return '* ' + skill;
    } else {
        return "Invalid Answer";
    }

}


console.log('Name: ' + upperCase);
console.log('Career: ' + career);
console.log('Description: ' + description);
console.log('My Interests: ');
 for (var i = 0; i < interests.length; i++) {    
        console.log('* ' + interests[i]);
        }
console.log('My Previous Experience:')
console.log(displayPosition('Piggly Wiggly', 'Stocker', 'Stocked Shelves'));
console.log(displayPosition('Great American Tent Company', 'Worker', 'Put up tents for events'));
console.log(displayPosition('Mikes Handy Food Mart', 'Cashier', 'Rung up customers'));
console.log(displayPosition('Publix', 'Stocker', 'Stocked Shelves'));
console.log("My Skills: ");
console.log(displaySkills(true, "World's Fastest Person"));
console.log(displaySkills(21, "Javascript"));
console.log(displaySkills(false, "Html"));


// var jobs = {

//         Company: "Piggly Wiggly",
//         jobTtile: 'Stocker',
//         description: 'Stocked the store'

//     }


  
// for (var key in jobs) {
//   console.log(`jobs.${key} = ${jobs[key]}`);
// }

// function jobs (arr) {
//     for (var i = 0; i > arr.length; i++){
//         return arr[i];
//     }
// }
