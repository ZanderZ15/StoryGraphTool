class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title);
        this.engine.addChoice("Begin the story");
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation);
    }
}

class Location extends Scene {
    create(key) {
        let locationData = key;
        
        let choices = this.engine.storyData.Locations[locationData].Choices;
        let c_location = this.engine.storyData.Locations[locationData]
        this.engine.show(c_location.Body);
        
        if (choices != "") {
            for(let choice of choices) {
                if (choice.Target == "Small Cellar") {
                    if (butt) {
                        this.engine.addChoice(choice.Text, choice);
                        this.engine.show("The corridor must have lit up because of the button that you pressed.<br>You notice a trapdoor in the floor that you didnt see before.")
                    }
                } else if (choice.Target == "Treasure Room") {
                    if (big_key) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else if (choice.Target == "Small Looted") {
                    if (small_key) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else if (choice.Target == "Gold") {
                    if (!gold) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else if (choice.Target == "Jewels") {
                    if (!jewels) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else if (choice.Target == "Paintings") {
                    if (!paintings) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else if (choice.Target == "Artifacts") {
                    if (!artifacts) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else if (choice.Target == "Diamonds") {
                    if (!diamonds) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else if (choice.Target == "Weapons") {
                    if (!weapons) {
                        this.engine.addChoice(choice.Text, choice);
                    }
                } else {
                    this.engine.addChoice(choice.Text, choice);
                }   
            }
        } else {
            this.engine.addChoice("The end.")
        }
        //TREASURE ROOM SPECIFIC
        if (locationData == "Treasure Room") {
             if (!treasure_room) {
                this.engine.show(c_location.FirstEntry);
                treasure_room = true;
            }
            if (guardian <= 3){
                this.engine.show(c_location.Kitty[guardian]);
                this.engine.show("You choose to...");
            }
            if (guardian > 3) {
                this.engine.show("As you turn your back on the cat, you hear a snarl from behind you:<br>\"DIE\"");
                this.engine.gotoScene(End);
            }
        } else if (locationData == "Gold") {
            gold = true;
            guardian += 1;
            console.log(guardian);
        } else if (locationData == "Jewels") {
            jewels = true;
            guardian += 1;
            console.log(guardian);
        } else if (locationData == "Paintings") {
            paintings = true;
            guardian += 1;
            console.log(guardian);
        } else if (locationData == "Artifacts") {
            artifacts = true;
            guardian += 1;
            console.log(guardian);
        } else if (locationData == "Diamonds") {
            diamonds = true;
            guardian += 1;
            console.log(guardian);
        } else if (locationData == "Weapons") {
            weapons = true;
            guardian += 1;
            console.log(guardian);
        }
    }

    handleChoice(choice) {
        if(choice) {
            this.engine.show("***");
            this.engine.gotoScene(Location, choice.Target);
        } else {
            this.engine.gotoScene(End);
        }
    }
}


class End extends Scene {
    create() {
        this.engine.show("<hr>");
        if (guardian > 3) {
            this.engine.show("You")
        }
        if (smalloot) {
            this.engine.show("You raided the chamber of its small loot.");
        } if (gold) {
            this.engine.show("You stole some gold bars.");
        } if (jewels) {
            this.engine.show("You beheld some beautiful jewels.");
        } if (paintings) {
            this.engine.show("You took some skillfully made paintings.");
        } if (artifacts) {
            this.engine.show("You nabbed some artifacts that do pretty cool things.");
        } if (diamonds) {
            this.engine.show("You grabbed many of the great diamonds.");
        } if (weapons) {
            this.engine.show("You equipped yourself with some powerful weapons.");
        }
        this.engine.show(this.engine.storyData.Credits);
    }
}


// Main
var small_key = false;
var big_key = false;
var butt = false;
var guardian = 0;
var smalloot = false;
var treasure_room = false;
//treasure rooms
var gold = false;
var jewels = false;
var paintings = false;
var artifacts = false;
var diamonds = false;
var weapons = false;
Engine.load(Start, 'myStory.json');