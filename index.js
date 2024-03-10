var line = document.getElementById("grab")
var btn = document.querySelector("#button")

btn.addEventListener("click", () => {
    var url = "https://rizzonator.onrender.com/rizzgen/pick-one"
    fetch(url).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            console.log(response)
        }
    }).then((data) => {
        line.innerHTML = data.line
    }).catch((err) => {
        console.error(err)
    })
})