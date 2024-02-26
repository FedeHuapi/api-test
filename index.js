const addUserButton = document.getElementById("addUserButton");

class Users {
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

class Repository {
    constructor(){
        this.users = [];

    }


createUser({id, name, username, email}) { 
    const newUsers = new Users(id, name, username, email);
    this.users.push(newUsers)
    
}
}

const repository = new Repository();

const refresh = () => {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = "";


        const users = repository.users;
    
    
        const usersHtml = repository.users.map((users) => {
        const name = document.createElement("h3");
        const email = document.createElement("p");

        name.innerHTML = users.name;
        email.innerHTML = users.email;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);

        return card;
    })

    usersHtml.forEach((card) => {
        userContainer.appendChild(card);
    })
}

let i = 1;

const addUser = () => {
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
    i++;
    repository.createUser(data) 
    refresh();
});
};

addUserButton.addEventListener("click", addUser);
