var id = 1;

function Cat(name, picture) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.status = ["Happy", "Bite-y"];
    this.petCount = 0;
    id++
}

var catLady = {
    cats: []
}

var cat1 = new Cat('Mr. Snibbly', "http://www.dailyhazel.com/wp-content/uploads/2014/04/cat-markings-3.jpg");
var cat2 = new Cat('Fred', "http://www.swapmeetdave.com/Humor/Cats/Cat-with-hat.jpg");
var cat3 = new Cat('George', "http://image1.masterfile.com/getImage/NDAwLTA1Njk0MTAyZW4uMDAwMDAwMDA=AIa21d/400-05694102en_Masterfile.jpg");

catLady.cats.push(cat1, cat2, cat3);


function draw(cats) {
    // draw all my cats to the screen in given html format
    var template = '';

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        //check number of pets, to determine status
        var statusIndex = 0;
        if (cat.petCount > 5) {
            statusIndex = 1;
        }
        template += `
       <div class ="cat">
            <img src="${cat.picture}">
            <h3>Name: ${cat.name}</h3>
            <p>Status: ${cat.status[statusIndex]}</p>
            <p>Number of Pets: ${cat.petCount}</p>
            <button type="button" onclick="pet(${cat.id})">Pet me!</button>
            <button type="button" onclick="catnip(${cat.id})">Catnip</button>
         </div>
        `
    }
    document.getElementById('cats').innerHTML = template;
}
draw(catLady.cats);

function pet(catId) {
    //find by id
    //increment pet count
    var catToPet = findCatById(catLady.cats, catId);
    catToPet.petCount++;
    draw(catLady.cats);
}
function catnip(catId) {
    var catToNip = findCatById(catLady.cats, catId);
    catToNip.petCount = 0;
    draw(catLady.cats);
}
function findCatById(catArray, catId) {
    for (var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if (catId === cat.id) {
            return cat;

        }

    }

    console.error("No such cat")

}


