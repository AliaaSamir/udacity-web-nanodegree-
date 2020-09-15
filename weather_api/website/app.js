/* Global Variables */
//http://api.openweathermap.org/data/2.5/weather?zip=94040&appid=461abd638fb6c313d361d55cac48b5df
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "461abd638fb6c313d361d55cac48b5df";
const errorZipCode = document.getElementById('errorZip');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
// button click handling
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', onClickGenerate);
// generate button onClick callback function
function onClickGenerate(){
    // Get Zip code entered by user 
    const zipCode = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;
    //console.log(zipCode);
    if(zipCode != ""){
        // errorZipCode.innerHTML="";
        getWeather(baseUrl, zipCode, apiKey)
        .then(function(data){
            if(data.cod == "200"){
                const dataToAdd = {
                    temp : data.main.temp,
                    date : newDate,
                    user_response: userResponse
                }
                postData('/addWeather', dataToAdd);
            }else{
                alert("Make sure you have entered a Valid Zip Code");
            }
        }).then(()=> {
            updateUI();
        })
    }
    else{
        alert("Enter Zip Code");
        //errorZipCode.innerHTML="** Make sure you have entered Zip Code";
    }
}


// post Async function 
const postData = async ( url = '', data = {})=>{

        const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    });

    try {
      const newData = await response.json();
      console.log(newData);
             return newData;
    }catch(error) {
        console.log("Error", error);
    }
}

// get Async function
const getWeather = async (baseURL, zip , key)=>{
   // console.log(baseURL+ zip+'&appid=' +key)

    const response = await fetch(baseURL+ zip+'&appid=' +key+'&units=imperial')  
    try {
      const data = await response.json();
      //console.log(data)
      return data;

    }  catch(error) {
      console.log("Error", error);
    }
  }

// updating UI async function
const updateUI = async () => {
    const response = await fetch('allData');
    try{
        const allData = await response.json();
        if(allData.length > 0){
            document.getElementById('date').innerHTML = allData[allData.length-1].date;
            document.getElementById('temp').innerHTML = allData[allData.length-1].temperature;
            document.getElementById('content').innerHTML = allData[allData.length-1].user_response;
        }
      //  console.log(allData);

    }  catch(error) {
        console.log("Error", error);
    }

}