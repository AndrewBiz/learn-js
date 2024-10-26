
// example 1
// const getUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userData = await response.json();
//     const userEmailArray = userData.map(user => {
//         return user.email;
//     });
//     postToPage(userEmailArray);
// }

// const postToPage = (data) => {
//     console.log(data);
// }

// getUserEmails();


// example 2 - not working due to CORS
// const getJoke = async () => {
//     const response = await fetch("https://icanhasdadjoke.com/", {
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//         }
//     });
//     const jokeData = await response.json();
//     console.log(jokeData);
// }

// getJoke();

// example post
// const jokeObject = {
//     id: "12345",
//     joke: "hahahahaha"
// }

// const postData = async (data) => {
//     const response = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
// }

// postData(jokeObject);

// example get Chak Norris joke - NOT WORKING SERVER
const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

requestJoke("Bruce", "Lee");