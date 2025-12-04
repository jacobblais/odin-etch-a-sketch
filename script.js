const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.style = "display: flex; flex-grow: 1;";
    container.appendChild(row);

    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.style = "border: 1px solid black; background-color: white; flex-grow: 1;";
        row.appendChild(div);
    }
}