'use strict';

const state = {
    tasks: []
}

//load the local data at the start!
fetch('data/tasks.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log("local tasks:");
        console.log(data);
        state.tasks = data;
        //renderIssues(state.tasks)
    })
    .catch(function(error){
        console.log("Hit an error!")
        //renderError(error);
    })
    .then(function(error){ //finally
        console.log("I'm running anyway, even if an error")
    })



//on form submit, download from GitHubb
const formElem = document.querySelector('form');
formElem.addEventListener('submit', function(event) {
    event.preventDefault(); //don't reload! 

    //info340c-sp20/demos
    let baseUri = "https://api.github.com/repos/"
    let repoInput = document.querySelector('#repoInput');
    let repo = repoInput.value;
    let fullUri = baseUri + repo + "/issues";

    //let us handle it
    console.log("About to send a request to", fullUri);

    //promise is the IOU; the "number" to be called
    fetch(fullUri)
        .then(function(response) {
            //the second number
            return response.json(); //extract the data and encode it as JavaScript
            // return encodePromise; //staple to the first number
        })
        .then(function(data){
            console.log(data);
            //now I can do something with it!
            //renderIssues(data); use the data
        })

    //No data here!
    console.log("request sent!")
});























