function loadElementsTable() {
    fetch('http://localhost:3000/table', {
        method: 'get'
    }).then(response => response.json())
        .then((data) => {
            for (let i = 1; i <= data.length; i++) {
                var node = document.createElement("DIV");
                var button = document.createElement("P");
                var btn = document.createElement("BUTTON");
                var image = document.createElement("IMG");
                var imagelink = "tabla" + i.toString() + ".jpg";
                image.src = imagelink;
                image.classList.add("image");
                image.width = 75;
                image.height = 75;
                btn.innerText = "Adauga in cos";
                btn.addEventListener("click", function () {
                    var newitem = {
                        nume: data[i - 1].nume,
                        pret: data[i - 1].pret,
                        cantitate: 1,
                        id: data[i-1].id
                    }
                    fetch('http://localhost:3000/comanda', {
                        method: 'post', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newitem)
                    }).then(function (response) {
                        console.log(response);
                        if(response.status!=500)
                            window.alert("Produsul a fost adaugat in cos !");
                        else
                            window.alert("Produsul este deja in cos !");
                    })
                    console.log(data[i - 1]);
                });
                var textnode = document.createTextNode(data[i - 1].nume + " " + data[i - 1].pret + " RON");
                node.classList.add("content");
                node.appendChild(textnode);
                node.appendChild(image);
                button.appendChild(btn);
                node.appendChild(button);
                document.getElementById("grid-container").appendChild(node);
            }
        });
}
function loadElementsPiese() {
    fetch('http://localhost:3000/piese', {
        method: 'get'
    }).then(response => response.json())
        .then((data) => {
            for (let i = 1; i <= data.length; i++) {
                var node = document.createElement("DIV");
                var button = document.createElement("P");
                var btn = document.createElement("BUTTON");
                var image = document.createElement("IMG");
                var imagelink = "piese" + i.toString() + ".jpg";
                image.src = imagelink;
                image.classList.add("image");
                image.width = 75;
                image.height = 75;
                btn.innerText = "Adauga in cos";
                btn.addEventListener("click", function () {
                    var newitem = {
                        nume: data[i - 1].nume,
                        pret: data[i - 1].pret,
                        cantitate: 1,
                        id: data[i-1].id
                    }
                    fetch('http://localhost:3000/comanda', {
                        method: 'post', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newitem)
                    }).then(function (response) {
                        console.log(response);
                        if(response.status!=500)
                            window.alert("Produsul a fost adaugat in cos !");
                        else
                            window.alert("Produsul este deja in cos !");
                    })
                    console.log(data[i - 1]);
                });
                var textnode = document.createTextNode(data[i - 1].nume + " " + data[i - 1].pret + " RON");
                node.classList.add("content");
                node.appendChild(textnode);
                node.appendChild(image);
                button.appendChild(btn);
                node.appendChild(button);
                document.getElementById("grid-container").appendChild(node);
            }
        });
}
function loadElementsCeasuri() {
    fetch('http://localhost:3000/ceasuri', {
        method: 'get'
    }).then(response => response.json())
        .then((data) => {
            for (let i = 1; i <= data.length; i++) {
                var node = document.createElement("DIV");
                var button = document.createElement("P");
                var btn = document.createElement("BUTTON");
                var image = document.createElement("IMG");
                var imagelink = "ceas" + i.toString() + ".jpg";
                image.src = imagelink;
                image.classList.add("image");
                image.width = 75;
                image.height = 75;
                btn.innerText = "Adauga in cos";
                btn.addEventListener("click", function () {
                    var newitem = {
                        nume: data[i - 1].nume,
                        pret: data[i - 1].pret,
                        cantitate: 1,
                        id: data[i-1].id
                    }
                    fetch('http://localhost:3000/comanda', {
                        method: 'post', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newitem)
                    }).then(function (response) {
                        console.log(response);
                        if(response.status!=500)
                            window.alert("Produsul a fost adaugat in cos !");
                        else
                            window.alert("Produsul este deja in cos !");
                    })
                    console.log(data[i - 1]);
                });
                var textnode = document.createTextNode(data[i - 1].nume + " " + data[i - 1].pret + " RON");
                node.classList.add("content");
                node.appendChild(textnode);
                node.appendChild(image);
                button.appendChild(btn);
                node.appendChild(button);
                document.getElementById("grid-container").appendChild(node);
            }
        });
}
function searchEngineTable() {
    var searchword = document.getElementById("search-bar-in").value;
    while (document.getElementById("grid-container").firstChild)
        document.getElementById("grid-container").removeChild(document.getElementById("grid-container").lastChild);
    fetch('http://localhost:3000/table', {
        method: 'get'
    }).then(response => response.json())
        .then((data) => {
            for (let i = 1; i <= data.length; i++) {
                if (data[i - 1].nume.includes(searchword)) {
                    var node = document.createElement("DIV");
                    var button = document.createElement("P");
                    var btn = document.createElement("BUTTON");
                    var image = document.createElement("IMG");
                    var imagelink = "tabla" + i.toString() + ".jpg";
                    image.src = imagelink;
                    image.classList.add("image");
                    image.width = 75;
                    image.height = 75;
                    btn.innerText = "Adauga in cos";
                    btn.addEventListener("click", function () {
                        var newitem = {
                            nume: data[i - 1].nume,
                            pret: data[i - 1].pret,
                            cantitate: 1,
                            id: data[i-1].id
                        }
                        fetch('http://localhost:3000/comanda', {
                            method: 'post', 
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newitem)
                        }).then(function (response) {
                            console.log(response);
                            if(response.status!=500)
                                window.alert("Produsul a fost adaugat in cos !");
                            else
                                window.alert("Produsul este deja in cos !");
                        })
                        console.log(data[i - 1]);
                    });
                    var textnode = document.createTextNode(data[i - 1].nume + " " + data[i - 1].pret + " RON");
                    node.classList.add("content");
                    node.appendChild(textnode);
                    node.appendChild(image);
                    button.appendChild(btn);
                    node.appendChild(button);
                    document.getElementById("grid-container").appendChild(node);
                }
            }
        });
}
function searchEnginePiese() {
    var searchword = document.getElementById("search-bar-in").value;
    while (document.getElementById("grid-container").firstChild)
        document.getElementById("grid-container").removeChild(document.getElementById("grid-container").lastChild);
    fetch('http://localhost:3000/piese', {
        method: 'get'
    }).then(response => response.json())
        .then((data) => {
            for (let i = 1; i <= data.length; i++) {
                if (data[i - 1].nume.includes(searchword)) {
                    var node = document.createElement("DIV");
                    var button = document.createElement("P");
                    var btn = document.createElement("BUTTON");
                    var image = document.createElement("IMG");
                    var imagelink = "piese" + i.toString() + ".jpg";
                    image.src = imagelink;
                    image.classList.add("image");
                    image.width = 75;
                    image.height = 75;
                    btn.innerText = "Adauga in cos";
                    btn.addEventListener("click", function () {
                        var newitem = {
                            nume: data[i - 1].nume,
                            pret: data[i - 1].pret,
                            cantitate: 1,
                            id: data[i-1].id
                        }
                        fetch('http://localhost:3000/comanda', {
                            method: 'post', 
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newitem)
                        }).then(function (response) {
                            console.log(response);
                            if(response.status!=500)
                                window.alert("Produsul a fost adaugat in cos !");
                            else
                                window.alert("Produsul este deja in cos !");
                        })
                        console.log(data[i - 1]);
                    });
                    var textnode = document.createTextNode(data[i - 1].nume + " " + data[i - 1].pret + " RON");
                    node.classList.add("content");
                    node.appendChild(textnode);
                    node.appendChild(image);
                    button.appendChild(btn);
                    node.appendChild(button);
                    document.getElementById("grid-container").appendChild(node);
                }
            }
        });
}
function searchEngineCeasuri() {
    var searchword = document.getElementById("search-bar-in").value;
    while (document.getElementById("grid-container").firstChild)
        document.getElementById("grid-container").removeChild(document.getElementById("grid-container").lastChild);
    fetch('http://localhost:3000/ceasuri', {
        method: 'get'
    }).then(response => response.json())
        .then((data) => {
            for (let i = 1; i <= data.length; i++) {
                if (data[i - 1].nume.includes(searchword)) {
                    var node = document.createElement("DIV");
                    var button = document.createElement("P");
                    var btn = document.createElement("BUTTON");
                    var image = document.createElement("IMG");
                    var imagelink = "ceas" + i.toString() + ".jpg";
                    image.src = imagelink;
                    image.classList.add("image");
                    image.width = 75;
                    image.height = 75;
                    btn.innerText = "Adauga in cos";
                    btn.addEventListener("click", function () {
                        var newitem = {
                            nume: data[i - 1].nume,
                            pret: data[i - 1].pret,
                            cantitate: 1,
                            id: data[i-1].id
                        }
                        fetch('http://localhost:3000/comanda', {
                            method: 'post', 
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newitem)
                        }).then(function (response) {
                            console.log(response);
                            if(response.status!=500)
                                window.alert("Produsul a fost adaugat in cos !");
                            else
                                window.alert("Produsul este deja in cos !");
                        })
                        console.log(data[i - 1]);
                    });
                    var textnode = document.createTextNode(data[i - 1].nume + " " + data[i - 1].pret + " RON");
                    node.classList.add("content");
                    node.appendChild(textnode);
                    node.appendChild(image);
                    button.appendChild(btn);
                    node.appendChild(button);
                    document.getElementById("grid-container").appendChild(node);
                }
            }
        });
}
function displayCosCumparaturi(){
    fetch('http://localhost:3000/comanda', {
        method: 'get'
    }).then(response => response.json())
        .then((data) => {
            for (let i = 1; i <= data.length; i++) {
                var node = document.createElement("DIV");
                var btnplus=document.createElement("BUTTON");
                var btnminus=document.createElement("BUTTON");
                var delitem=document.createElement("BUTTON");
                var nrbuc=document.createElement("P");
                btnplus.innerText="+";
                btnplus.style.marginLeft="3px";
                btnminus.innerText="-";
                btnminus.style.marginLeft="3px";
                delitem.innerText="Sterge produsul din cos";
                delitem.style.marginLeft="20px";
                nrbuc.innerText="Numar bucati: "+data[i-1].cantitate;

                btnplus.addEventListener("click",function(){
                    var id = data[i-1].id;
                    data[i-1].cantitate++;
                    var editCantitate={
                        cantitate: data[i-1].cantitate
                    };
                    fetch('http://localhost:3000/comanda/' + id, {
                        method: 'patch',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editCantitate)
                    }).then(function (response) {
                        location.reload();
                        console.log(response);
                    })
                })
                btnminus.addEventListener("click",function(){
                    if(data[i-1].cantitate>1){
                    var id = data[i-1].id;
                    data[i-1].cantitate--;
                    var editCantitate={
                        cantitate: data[i-1].cantitate
                    };
                    fetch('http://localhost:3000/comanda/' + id, {
                        method: 'patch',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editCantitate)
                    }).then(function (response) {
                        location.reload();
                        console.log(response);
                    })}
                })
                delitem.addEventListener("click",function(){
                    var id = data[i-1].id;
                    fetch('http://localhost:3000/comanda/' + id, {
                        method: 'delete',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        location.reload();
                        console.log(response);
                    })
                })
                var textnode = document.createTextNode(data[i - 1].nume + " " + data[i - 1].pret + " RON");
                node.classList.add("content-lista-cumparaturi");
                node.appendChild(textnode);
                nrbuc.appendChild(btnplus);
                nrbuc.appendChild(btnminus);
                nrbuc.appendChild(delitem);
                node.appendChild(nrbuc);
                document.getElementById("lista-cumparaturi").appendChild(node);
            }
        });}
