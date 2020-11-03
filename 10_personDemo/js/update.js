'use strict';

// all ids from home.html --> let ...
(function(){
let resultset;
let resultarea;
let key;
let search;
let messagearea;

const serverPath = '/persons';

const showResultSet = () => resultset.classList.remove('hidden');
const hideResultSet= () => resultset.classList.add('hidden');
const showMessage = () => messagearea.classList.remove('hidden');
const hideMessage = () => messagearea.classList.add('hidden');

document.addEventListener('DOMContentLoaded', init);

function init (){
    resultset = document.getElementById('resultset');
    resultarea = document.getElementById('resultarea');
    key = document.getElementById('key');
    search = document.getElementById('search');
    messagearea = document.getElementById('messagearea');

    document.getElementById('submit').addEventListener('click', submit);
    key.addEventListener('focus', clear);
    
    //always clear when start
    clear();
}

function clear(){
    key.value='';
    search.value='';
    hideMessage();
    hideResultSet();
    key.focus();
}

async function submit(){
    const searchKey = key.value;
    const value = search.value;

    try {
        const uri = searchKey ? `${serverPath}/${searchKey}?value=${value}` : serverPath;
        const result = await fetch(uri);

        //when fetching we need to do some modification, will update the webpage-->
        const personData = await result.json();
        updatePage(personData);
    }
    catch(err) {
        showError(err.message);

    }
    //function for showing the error message
    function showError(message){
        messagearea.innerHTML = `<p>${message}</p>`; 
        hideResultSet();
        showMessage();   
    }

    //function for updating the page
    function updatePage (searchResult){
        if(searchResult.message){
            showError(searchResult.message)
        }
        else if(searchResult.length === 0){
            showError('No person found');
        }
        else {
            let htmlString = "";
            for(let person of searchResult) {
                htmlString+=`<tr>
                <td>${person.firstname}</td>
                <td>${person.lastname}</td>
                <td>${person.age}</td>
                </tr>\n`
            }
            resultarea.innerHTML=htmlString;
            hideMessage();
            showResultSet();            
        }

    }
}
})()