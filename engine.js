class Engine {

    static load(...args) {
        window.onload = () => new Engine(...args);
    }

    constructor(firstSceneClass, storyDataUrl) {

        this.firstSceneClass = firstSceneClass;
        this.storyDataUrl = storyDataUrl;

        this.header = document.body.appendChild(document.createElement("h1"));
        this.output = document.body.appendChild(document.createElement("div"));
        this.actionsContainer = document.body.appendChild(document.createElement("div"));

        fetch(storyDataUrl).then(
            (response) => response.json()
        ).then(
            (json) => {
                this.storyData = json;
                this.gotoScene(firstSceneClass)
            }
        );
    }

    gotoScene(sceneClass, data) {
        if (data == "Bed") {
            small_key = true;
        } else if (data == "Big Key") {
            big_key = true;
        } else if (data == "Pressed Button") {
            butt = true;
        } else if (data == "Small Looted") {
            smalloot = true;
        } else if (data == "Treasure Room") {
            guardian += 1;
            console.log(guardian);  
        }
        this.scene = new sceneClass(this);
        this.scene.create(data);
        document.getElementById("quick-start-container").scrollIntoView();
    }

    addChoice(action, data) {
        let button = this.actionsContainer.appendChild(document.createElement("button"));
        button.innerText = action;
        button.onclick = () => {
            while(this.actionsContainer.firstChild) {
                this.actionsContainer.removeChild(this.actionsContainer.firstChild)
            }
            this.scene.handleChoice(data);
        }
    }

    setTitle(title) {
        document.title = title;
        this.header.innerText = title;
    }

    show(msg) {
        let div = document.createElement("div");
        div.innerHTML = msg;
        this.output.appendChild(div);
    }

}

class Scene {
    constructor(engine) {
        this.engine = engine;
        engine.windcor = false;
        engine.key1 = false;
        engine.key2 = false;
        engine.butt = false;
        engine.guardian = 0;
        engine.smalloot = false;
    }

    wind() {
        x;
    }

    create() { }

    update() { }

    handleChoice(action) {
        console.warn('no choice handler on scene ', this);
    }
}
/*"ExampleTarget": {
            "Body": "ExampleText.",
            "Choices": [
                {
                    "Text": "EX",
                    "Target": "EX"
                },
                {
                    "Text": "EX",
                    "Target": "EX"
                }
            ]
        },*/