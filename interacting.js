let tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};

let pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh bother");
    }
};

let piglet = { 
    character: "Piglet",
    greet: function(){
        console.log("Oh d-d-d-dear! I wasnt expecting company!");
    }
};

let kid = {
    character: "Christopher Robin",
    greet: function(){
        console.log("Hello there, my name is Christopher Robin.");
        }
};

let bees = { 
    character: "Bees",
    greet: function(){
        console.log("zZzZzZzZzZzZ");
    }
};

let rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("Welcome to the rabbit hole!");
    }
};

let owl = { 
    character: "Owl",
    greet: function(){
        console.log("Uh Uh Uh");
    }
};

let eeyore = {
    character: "Eeyore",
    greet: function(){
        console.log("Hello my name is Eeyore.");
    } 
};

let heffalumps = {
    character: "Heffalump",
    greet: function(){
        console.log("Hello I am Heffalump");
        }
};

let kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("Hi, my name is Kanga!");
    }
};

let gopher = {
    character: "Gopher",
    greet: function(){
        console.log("Welcome to my house, my name is Gopher.");
    }
};

tigger.north = pooh; 

pooh.north = kid; 
pooh.south = tigger; 
pooh.west = piglet; 
pooh.east = bees;

piglet.north = owl; 
piglet.east = pooh;

bees.north = rabbit; 
bees.west = pooh; 

rabbit.south = bees; 
rabbit.west = kid; 
rabbit.east = gopher;

gopher.west = rabbit; 

kid.north = kanga; 
kid.south = pooh; 
kid.west = owl; 
kid.east = rabbit;

owl.south = piglet; 
owl.east = kid;

kanga.north = eeyore; 
kanga.south = kid; 

eeyore.south=kanga;
eeyore.east=heffalumps;

heffalumps.west=eeyore;

let player = {
    location: tigger
};
    
function move (dir) {
    player.location=player.location[dir];
    if (player.location[dir]  === undefined){
        console.log("You may not go that way!");   
    }
    else{
        console.log(`You are now in ${player.location.character}'s house.`);
        player.location.greet(); 
    }
}
    
console.log ("Welcome to the game");   