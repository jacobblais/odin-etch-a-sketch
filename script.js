const container = document.getElementById("container");

function createRow() {
    let sidelen = 0;
    while (sidelen <= 0 || sidelen > 100) {
        sidelen = prompt("What is the width of the square?");
    }

    container.innerHTML = "";

    for (let i = 0; i < sidelen; i++) {
        const row = document.createElement("div");
        row.style = "display: flex; flex-grow: 1;";
        container.appendChild(row);

        for (let j = 0; j < sidelen; j++) {
            const div = document.createElement("div");
            div.style = "border: 1px solid black; background-color: white; flex-grow: 1;";
            row.appendChild(div);

            div.addEventListener("mouseover", () => div.style.backgroundColor = "black");
        }
    }
}

const refresh = document.getElementById("refresh");
refresh.addEventListener("click", createRow);