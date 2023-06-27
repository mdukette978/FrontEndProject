
const body = document.querySelector('body');

const resultsContainer = document.getElementById('results');
resultsContainer.style.paddingBottom = '20px';


var dropdown = document.getElementById('dropdown')
dropdown.addEventListener("change", function() {
  const userInput = dropdown.value;
  console.log('Yes, working')
  $.get("http://www.boredapi.com/api/activity?type=" + userInput, getActivityData);

  refreshBtn.addEventListener('click', function () {
    console.log('Yes, working too')
    $.get("http://www.boredapi.com/api/activity?type="+ userInput, getActivityData);
  });  
});

// var recipeBtn = document.getElementById('recipeBtn')
// recipeBtn.addEventListener('click', function() {
//     sendApiRequest()
//   }); 

// async function sendApiRequest() {
//     let APP_ID = '4e507cfc';
//     let API_KEY = '869ef88024158cc3094a5e09d4625f72';
//     let response = await fetch(`https://api.edamam.com/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&q`);
//     console.log(response)
// }


// function getRecipeLink(data) {
//     console.log(data)
//     $(".recipe-result-card").remove();

//     var recipeContainer = document.createElement('div');
//     recipeContainer.classList.add('recipe-result-card');

//     var aURL = document.createElement('a');
//     aURL.href = data.sourceURL;
//     aURL.textContent = 'Click to View Recipe';
//}


function getActivityData(data) {
    console.log(data) 
    $(".result-card").remove();

    var activityContainer = document.createElement('div');
    activityContainer.classList.add('result-card');
    activityContainer.style.border = '3px solid #ccc';
    activityContainer.style.borderRadius = '8px';
    activityContainer.style.padding = '20px';
    activityContainer.style.margin = 'auto';
    activityContainer.style.background = 'white';
    activityContainer.style.width = '15rem';

    var pActivity = document.createElement('p');
    pActivity.classList.add('card-activity');
    pActivity.textContent = 'Activity: ' + data.activity;

    var pParticipants = document.createElement('p');
    pParticipants.classList.add('card-participants');
    pParticipants.textContent = 'Participants needed: ' + data.participants;
        if (data.participants === 1) {
            pParticipants.textContent = 'Participants Needed: just yourself'
        }

    var pCost = document.createElement('p');
    if(data.price <= 0.33) {
        pCost.textContent = 'Associated Cost: low or none';
    } else if (data.price > 0.33 && data.price <= 0.66) {
        pCost.textContent = 'Potential Cost: medium';
    } else if (data.price > 0.66 && data.price <= 1) {
        pCost.textContent = 'Potential Cost: high';
    }
    
    resultsContainer.appendChild(activityContainer)
    activityContainer.appendChild(pActivity)
    activityContainer.appendChild(pParticipants)
    activityContainer.appendChild(pCost)
};


const logContainer = document.getElementById("logContainer");
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    console.log(obj);

    const json = JSON.stringify(obj);
    console.log(json)

    const entryElement = document.createElement('div');
    entryElement.classList.add('journal-entry');
    entryElement.style.overflow = 'auto';
    entryElement.style.height = '200px';
    entryElement.style.width = '300px'
    entryElement.style.border = '1px solid #ccc';
    entryElement.style.font = '16px';
    entryElement.style.display = 'inline-block';
    entryElement.style.margin = '10px';

    var input1 = document.createElement('h6');
    input1.textContent = 'Name: ' + obj.name;
    
    var input2 = document.createElement('h6');
    input2.textContent = 'Date: ' + obj.date;

    var input3 = document.createElement('h6');
    input3.textContent = 'Meal: ' + obj.meal;

    var input4 = document.createElement('h6');
    input4.textContent = 'Meal Description: ' + obj.mealDescription;

    var input5 = document.createElement('img');
    input5.src = obj.mealPhoto;
    input5.style.maxWidth = '100%';
    input5.style.height = 'auto';

    var input6 = document.createElement('h6');
    input6.textContent = 'Reflection: ' + obj.reflectionText;

    var input7 = document.createElement('h6');
    input7.textContent = 'Duration (minutes): ' + obj.mealDurationInMinutes;

    var input8 = document.createElement('h6');
    input8.textContent = 'Food Choice Satisfaction: ' + obj.foodSelectionSatisfcation + "/5";

    var input9 = document.createElement('h6');
    input9.textContent = 'Did you Overeat? ' + obj.overeating;

    logContainer.appendChild(entryElement);
    entryElement.appendChild(input1)
    entryElement.appendChild(input2)
    entryElement.appendChild(input3)
    entryElement.appendChild(input4)
    entryElement.appendChild(input5)
    entryElement.appendChild(input6)
    entryElement.appendChild(input7)
    entryElement.appendChild(input8)
    entryElement.appendChild(input9)
    // Clear the form fields
    form.reset();
});
//     localStorage.setItem('form', json);

//     window.location.href = "formSubmitData.html";
// });




// async function displayAccount(account, container) {
//     var accountDiv = document.createElement('div');
//     accountDiv.innerHTML = `
//       <h3>${account.name}</h3>
//       <p class="username">${account.username}</p>
//       <div class="image-container">
//         <img src="${account.photo}" alt="User Photo">
//       </div>
//     `;