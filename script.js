// Generates a random number from 0 to num -1 

const getRandomNumber = (num) => {
    let rng = Math.floor(Math.random()* num);
    return rng;
}

// function check -> will be commented out
// console.log(getRandomNumber(5));

// Object containing all the options

const characterInfo = {
    sex: ['male', 'female'],
    group: ['Pirate', 'Marine', 'Cipher Pol', 'Revolutionary Army'],
    devil_fruit: ['zoan', 'paramecia', 'logia', 'no'],
    haki: ['All three forms', 'Busoshoku and Kenbunshoku', 'only Kenbunshoku', 'no'],
};

// The array where the random wrestler will be pushed 

let charProfile = [];

// looping the object in order to produce the message

for (let category in characterInfo) { // for every property of the object 
    let indx = getRandomNumber(characterInfo[category].length) // generate a random number from zero to the length of the property's array -1
    switch (category) {
        case 'sex':
            charProfile.push(`Your character's sex is ${characterInfo[category][indx]}`);
            break;
        case 'group':
            if (characterInfo[category][indx] === 'Pirate') {
                charProfile.push(`your character is a ${characterInfo[category][indx]}`);
            }  else if (characterInfo[category][indx] === 'Marine') {
                charProfile.push(`your character is a ${characterInfo[category][indx]} officer`);
            }  else if (characterInfo[category][indx] === 'Cipher Pol') {
                charProfile.push(`your character is a ${characterInfo[category][indx]} agent`);
            }  else {
                charProfile.push(`your character is a ${characterInfo[category][indx]} officer`);
            }
            break;   
        case 'devil_fruit':
            charProfile.push(`you have eaten ${characterInfo[category][indx]} devil's fruit`);
            break;    
        case 'haki':
            if (characterInfo[category][indx] === 'all three forms') {
                charProfile.push(`you can use ${characterInfo[category][indx]} of haki`);
            }  else if (characterInfo[category][indx] === 'Busoshoku and Kenbunshoku') {
                charProfile.push(`you can use ${characterInfo[category][indx]} haki`);
            }  else if (characterInfo[category][indx] === 'Only Kenbunshoku') {
                charProfile.push(`you can use ${characterInfo[category][indx]} haki`);
            }  else {
                charProfile.push(`you can use ${characterInfo[category][indx]} haki`);
            }
            break;    
    }
}

//  Printing the randomly generated One Piece character 
console.log(charProfile.join(' '));


//  Printing the secret message 

if (charProfile[1] === 'your character is a Pirate') {
    console.log('I will become the king of Pirates !');
} else if  (charProfile[1] === 'your character is a Marine officer') {
    console.log('I will become the fleet admiral !');
} else if (charProfile[1] === 'your character is a Cipher Pol agent') {
    console.log('I will become a Cipher Pol Aigis 0 !');
} else {
    console.log('We will bring peace to the world !')
}


