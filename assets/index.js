document.getElementById("btn").addEventListener("click", ()=>{
    obtenerPosts();
});

const obtenerPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let list = document.getElementById("list");
    let box = document.getElementById("box")
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.forEach(e=>{
            if(e.id <= 6){
                
                list.innerHTML += `<li><h4>${e.title}</h4>${e.body}</li>`
            }
        }) 
        box.style.border = "2px solid black";
    } catch (err) {
        console.log(err);
    }
};
