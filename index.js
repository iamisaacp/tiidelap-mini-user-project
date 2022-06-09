// 1 APi URL
const url ="https://jsonplaceholder.typicode.com/users";

// 2. Fetch user from the api
function fetchUsers(){
    fetch(url).then((response)=>response.json()).then(data=>{
        renderUsers(data);
    });
}

// 3. Render the users in the DOM
function renderUsers(usersData){ 
    const ul = document.getElementById("user-list-container");
    usersData.forEach((user, index)=>{ 
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${index+1}.</span>
            <span>${user.name}</span>
            <span>-</span>
            <span class="username">${user.username}</span>
        `;
        // append the current user li tag to ul tag
        ul.appendChild(li);
    });
}

// 4. Add a search function to the DOM
function searchUsersByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toLocaleUpperCase();
        const usersList = ul.querySelectorAll('li');  //array of all the tags
            // Loop through all the users and render the once that matches
        for(let index=0;index<usersList.length;index++){
            const usernameSpanTag = usersList[index].querySelector(".username");
            const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
            const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
            if(isMatch){
                usersList[index].style.display ="block";
            }else{
                usersList[index].style.display ="none";
            }
        }
}

fetchUsers();