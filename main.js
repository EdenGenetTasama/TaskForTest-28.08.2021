// // צבעים משתנים

// function chancgColorBoxOne (){
//     setInterval(() => {
//     divOne.style.backgroundColor="yellow";
// }, 1000);
// }

// chancgColorBoxOne();

// function changeColorTwo(){
//     setInterval(() => {
//         divTwo.style.backgroundColor="green";
//     }, 1000);
// }

// changeColorTwo();

// function changeColorThree(){
//     setInterval(() => {
//         divThree.style.backgroundColor="red";
//     }, 1000);
// }

// changeColorThree();

// function borderOfDiv(){
//     setInterval(() => {
//         divFour.style.border="10px solid green"
//         divFive.style.border="10px solid grey"

//     }, 2000);
// }

// borderOfDiv();

// function disappearBox(){
//     setInterval(() => {
//         divSeven.style.display="none";
//         divNine.style.display="none";
//         // divSeven.style.backgroundColor="white"

//     }, 3000);
// }

// disappearBox();

// var colorCounter = `${190}px`;
// var minusTen = `${10}px`;
// buttonOfDiv.onclick = ()=>{
//     divOne.style.width=`${colorCounter}px-${minusTen}`
//     divOne.style.height=`${colorCounter}px`;}

// inputNumber.oninput = (event)=>{
// console.log(inputNumber);
// console.log(event);
// inputNumber
//     paraInupt.innerText=`${inputNumber.target.value}`*5;
// }

// function submitForm(event){
//     submitForm.submit()
// }

// submitForm.onsubmit = (event) => {
//   event.preventDefault();
//   if (passwordOne.value == passwordTwo.value) {
//     paraID.innerText = "הסיסמא אומתה";
//   }
//   if (passwordOne.value.length < 8) {
//     alert("יותר מידי תווים");
//   }

// debugger
// לא הצלחתי
//   var arrayUser = [];

//   buttonForm.onclick = () => {
//     var objcetUser = {
//       userName: userName.value,
//       password: passwordOne.value,
//       passwordTwo: passwordTwo.value,
//     };
//     arrayUser.push(objcetUser);
//   };
// ;
// console.log(arrayUser);
// // ודא שאורך השם לפחות 10 תווים הצג על אלמנט P הודעה מתאימה,
// submitFrese.onsubmit = (event) => {
//   event.preventDefault();
//   if (inputUserName.value.length > 10) {
//     paraIdSend.innerText = `אורך השם גדול מ10 והוא: ${inputUserName.value.length}`;
//     paraIdSend.style.backgroundColor = "red";
//   }
//   else {
//     paraIdSend.innerText = `אורך השם קטן מ10 והוא: ${inputUserName.value.length}`;
//     paraIdSend.style.backgroundColor = "green";
//   }
//   if(mailInputName.value.length < 2){
//       alert("מייל קצר מידי")
//   }
// };

// buttonSend.onclick = () => {};

// חוסר הצלחה

var randomNum = Math.floor(Math.random() * 1000);

var movingFunction =setInterval(() => {
    divBoxButton.style.top = `${randomNum}px`;
    divBoxButton.style.left = `${randomNum}px`;
    divBoxButton.style.bottom = `${randomNum}px`;
    divBoxButton.style.right = `${randomNum}px`;
  }, 2000);


moveBoxRandom();

buttonOfId.addEventListener("click" , ()=>{
    clearInterval(movingFunction)
})

// ======================================

// צור מערך של מדינות המכילות: שם ודגל(קישור של תמונה) וצור משתנה של COUNTER מאופס והצג אותו על אלמנט P.

// const countries = [
//     {nameOfCountry: "Israel" , flag: "https://www.partyinabox.co.il/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/s/m/small-israeli-flag.jpg"},
//     {nameOfCountry: "Ethiopia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/langhe-250px-Flag_of_Ethiopia.svg.png" },
//     {nameOfCountry: "Holland", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/800px-Flag_of_the_Netherlands.svg.png"},
//     {nameOfCountry: "Ghana" , flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/255px-Flag_of_Ghana.svg.png" },
//     {nameOfCountry: "Greece", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png" },
//     {nameOfCountry: "France" , flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" },
//     {nameOfCountry: "Mexico" , flag:"https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg" },

// ]
// הצג את דגלי כל המדינות על המסך מחדש כל 3 שניות
// var counter = 0;
// לא נראה לעין הציור מחדש.

// setInterval(() => {
//     function runningCountries(){
//     for (let i = 0; i < countries.length; i++) {
//         presentCountry = `${countries.flag}`
//     }
// }
// }, 3000);
