// assign HTML DOM element
const pageCounter = document.querySelector('#page-counter');
const btnCounter = document.querySelector('#button-counter');
const github = document.querySelector('#github');

// update page visit counter async function
const updatePageCounter = async () => {

    // COUNT API
    const PAGE_API = `https://api.countapi.xyz/hit/ianbrdeguzman/visits`; 
    const BTN_API = `https://api.countapi.xyz/get/ianbrdeguzman/github`; 

    // fetch page visit API 
    const pageResponse = await fetch(PAGE_API);
    const buttonResponse = await fetch(BTN_API); 

    // convert data into json
    const pageData = await pageResponse.json();
    const btnData = await buttonResponse.json();

    // display value
    pageCounter.textContent = pageData.value;
    btnCounter.textContent = btnData.value;
};

// update button click counter
const updateBtnCounter = async () => {
    
    // COUNT API
    const BTN_API = `https://api.countapi.xyz/hit/ianbrdeguzman/github`;

    // fetch button click API
    const buttonResponse = await fetch(BTN_API); 

    // convert data into json
    const btnData = await buttonResponse.json();

    // display value
    btnCounter.textContent = btnData.value;
}

// call update page counter function
updatePageCounter();

// event listener
github.addEventListener('click', updateBtnCounter);