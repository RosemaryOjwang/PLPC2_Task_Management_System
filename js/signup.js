const main = document.getElementById("main");
const createacct = document.getElementById("create-acct")

const returnBtn = document.getElementById('return-btn');
const signupButton = document.getElementById('sign-up');
signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacct.style.display = "block";
});
returnBtn.addEventListener("click", function(){
    main.style.display = "block";
    createacct.style.display = "none";

})