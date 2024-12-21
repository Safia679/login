function handleSignup() {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    const user = {
        firstName: firstName,
        lastName: lastName,
        email,
        password,
        confirmPassword: confirmPassword
    }
    console.log(user);
}
// const users =[
// { name:"jack",isStreak :false},
// { name:"james",isStreak :false},
// { name:"john",isStreak :false},

// ];
// const user1 = Document.getElementById("user-1");
// const user2 = Document.getElementById("user-2");
// const user3 = Document.getElementById("user-3");
// const mapedArray = users.map(function(element,i) {
//     console.log(element.name);
// return element.name === "john"?{...element,isStreak:true}:
// element;
// });
// console.log(mapedArray);
// function getUsers() {
    
// }




