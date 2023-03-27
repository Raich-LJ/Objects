// ANSWER TO QUESTION 1
function instagramPost(handleOfAuthor, content, image, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor; 
    this.content = content;
    this.image = image;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}


// ANSWER TO QUESTION 2
const bukola = new instagramPost('Bukola', 'Beach Party', './images/Beach_party.jpg', 200, 500);
const anthony = new instagramPost ('Anthony', 'New Ride', './images/2021-Mercedes-Benz-SL-Class-Exterior.jpg', 400, 300);

console.log(bukola);
console.log(anthony);




// ANSWER TO QUESTION 3A
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    }
}
const musa = createPerson('Musa', 16, 'Abule-Egba');
console.log(musa);

// ANSWER TO QUESTION 3B
function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    }
}

const musaJAMBScores = createJambScores(70, 85, 82, 94);
console.log(musaJAMBScores);

const Musa = Object.assign(musa, musaJAMBScores)
console.log({Musa})




// ANSWER TO QUESTION 4
// There are 3 ways to clone an object. 
// 1 - Using Object.assign()
// 2 - Using spread syntax
// 3 - Using the method JSON.parse(JSON.stringify)

// Option 1 - Using Object.assign()

const firstMovie = {
    actor: 'Tom Cruise',
    title: ' Mission: Impossible – Ghost Protocol',
    yearPublished: 2010,
    }

    // Option 1 - - Using Object.assign()
    const secondMovie = Object.assign({}, firstMovie);
    console.log(firstMovie);
    console.log(secondMovie);
    
    secondMovie.title = 'The Mummy';
    
    console.log('After change title of second movie')
    console.log(firstMovie)
    console.log(secondMovie)
    
    // Option 2 - Using spread syntax i.e, ...
    const thirdMovie = {...firstMovie};
    thirdMovie.title = ' Mission: Impossible – Rogue Nation';
    console.log({firstMovie});
    console.log({secondMovie});
    
    // Option 3 - Using the method JSON.parse(JSON.stringify)
    const forthMovie = JSON.parse(JSON.stringify(firstMovie));
    forthMovie.title = 'Top Gun: Maverick';
    console.log({firstMovie});
    console.log({forthMovie});




//ANSWER TO QUESTION 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar', 
}

// for..in loops
// for each property in presidentialCandidates
for(const property in presidentialCandidates) {
    // action to be carried out on each property
    console.log(presidentialCandidates[property] + 'is the Presidential Candidate of' + [property]);
}