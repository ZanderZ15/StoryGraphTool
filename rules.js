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
        let location = this.engine.storyData.Locations[locationData]
        this.engine.show(location.Body);
        if (choices != "") {
            for(let choice of choices) {
                if (choice.Target == "Small Cellar") {
                    if (butt) {
                        console.log("The corridor is lit");
                        this.engine.addChoice(choice.Text, choice);
                    } else {
                        console.log("Aint lit");
                    }
                } else if (choice.Target == "Treasure Room") {
                    if (big_key) {
                        this.engine.addChoice(choice.Text, choice);
                    } else {
                        console.log("NO BIG KEY");
                    }
                } else if (choice.Target == "Small Looted") {
                    if (small_key) {
                        this.engine.addChoice(choice.Text, choice);
                    } else {
                        console.log("False");
                    }
                } else if (choice.Target == "Treasure Room") {
                    if (guardian == 0) {
                        this.engine.addChoice(choice.Text, choice);
                    } else if (guardian == 1) {
                        this.engine.addChoice(choice.Text, choice);
                    } else if (guardian == 2) {
                        this.engine.addChoice(choice.Text, choice);
                    } else if (guardian == 3) {
                        this.engine.addChoice(choice.Text, choice);
                    } else if (guardian > 3) {
                        console.log("False");
                    }
                } else {
                    this.engine.addChoice(choice.Text, choice);
                }
                
                
                
            }
        } else {
            this.engine.addChoice("The end.")
        }
    }

    handleChoice(choice) {
        if(choice) {
            this.engine.show("***");
            //console.log(choice);
            //this.engine.show(choice);
            this.engine.gotoScene(Location, choice.Target);
        } else {
            this.engine.gotoScene(End);
        }
    }
}


class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}


// Main
var small_key = false;
var big_key = false;
var butt = false;
var guardian = -1;
var smalloot = false;

Engine.load(Start, 'myStory.json');