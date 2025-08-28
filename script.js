// function for get ID
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}


// Event Delegation with Closest(best practice)
getElement('all-cart-container').addEventListener('click', function(e) {
    // get specific thing when click
    const cart = e.target.closest('.carts');
    const heart = e.target.closest('.hearts');
    const call = e.target.closest('.calls');
    const copy = e.target.closest('.copies');
    
    // get nameBD, nameEN & number
    const serviceNameBD = cart.children[1].children[0].innerText;
    const serviceNameEN = cart.children[1].children[1].innerText;
    const serviceNumber = cart.children[2].children[0].innerText;
    const historyContainer = getElement('history-container');

    // 1. Heart Icon Event------------------------------------------
    if(heart) {
        const heartCount = Number(getElement('heart-count').innerText);
        const updateHeartCount = heartCount + 1;
        getElement('heart-count').innerText = updateHeartCount;
    }
    

    // 2. Call Button Event-----------------------------------------
    if(call) {
        const totalCoin = Number(getElement('total-coin').innerText);

        // Condition for less than 20 coins
        if(totalCoin < 20) {
            return alert(`❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
        }
        
        alert(`📞 Calling ${serviceNameEN} ${serviceNumber}...`);
        // 20 coin reduce
        const reduceCoin = totalCoin - 20;
        getElement('total-coin').innerText = reduceCoin;


        // name, number & currentTime add on the Cart History
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg">
                        <div>
                            <h1 class="font-semibold">${serviceNameBD}</h1>
                            <p>${serviceNumber}</p>
                        </div>
                        <p class="text-sm">${new Date().toLocaleTimeString()}</p>
                    </div>
        `
        historyContainer.appendChild(div);
    }


    // 3. Copy Button Event-----------------------------------------
    if(copy) {
        alert(`নম্বর কপি হয়েছে : ${serviceNumber}`);

        const copyCount = Number(getElement('copy-count').innerText);
        const updateCopyCount = copyCount + 1;
        getElement('copy-count').innerText = updateCopyCount;

        // Copy the serviceNumber when click
        navigator.clipboard.writeText(serviceNumber);

    }
})


// clear call history when click
getElement('clear-history').addEventListener('click', function() {
    const historyContainer = getElement('history-container');
    historyContainer.innerHTML = "";
    getElement('total-coin').innerText = 100;
    getElement('heart-count').innerText = 0;
    getElement('copy-count').innerText = 0;
})









































































// // Event Delegation with Includes(has some issue)----------------------------------------
// getElement('all-cart-container').addEventListener('click', function(e) {
//     // All content for access
//         const serviceTitle = e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText;
//         const serviceName = e.target.parentNode.parentNode.parentNode.children[1].children[1].innerText;
//         const serviceNumber = e.target.parentNode.parentNode.parentNode.children[2].children[0].innerText;
//         const currentTime = new Date().toLocaleTimeString();
//         const historyContainer = getElement('history-container');

//     // Heart Count Event
//     if(e.target.className.includes('hearts')) {
//         // get Heart Count
//         const heartCount = getElement('heart-count').innerText;
//         const updateHeartCount = Number(heartCount) + 1;
        
//         // set Heart Count
//         getElement('heart-count').innerText = updateHeartCount;
//     }

//     // Call Button Event
//     if(e.target.className.includes("calls")) {

//         // get total coin
//         const totalCoin = getElement('total-coin').innerText;
        
//         // Condition for less than 20
//         if(Number(totalCoin) < 20) {
//             return alert(`❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
//         }
        
//         // Show alert when call button clicked
//         alert(`📞 Calling ${serviceName} ${serviceNumber}...`);
        
//         // Reduce coins for each call-----------------------
        
//         // reduce 20 coins
//         const reduceCoin = Number(totalCoin) - 20;
//         // update total coin
//         getElement('total-coin').innerText = reduceCoin;
        

//         // Show on call history-----------------------------
//         const div = document.createElement('div');
//         div.innerHTML = `
//                     <div class="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg">
//                         <div>
//                             <h1 class="font-semibold">${serviceTitle}</h1>
//                             <p>${serviceNumber}</p>
//                         </div>
//                         <p class="text-sm">${currentTime}</p>
//                     </div>
//         `
//         historyContainer.appendChild(div);
//     }


//     // Copy Number & Increase Count Event
//     if(e.target.className.includes("copies")) {
        
//         alert(`নম্বর কপি হয়েছেঃ ${serviceNumber}`);
//         // get copy count
//         const copyCount = getElement('copy-count').innerText;
//         // update copy count
//         const updateCopyCount = Number(copyCount) + 1;
//         // set copy count
//         getElement('copy-count').innerText = updateCopyCount;
        

//         // Copy Text
//         navigator.clipboard.writeText(serviceNumber);
        
//     }
// })


// // Clear History Event
// const clearHistory = getElement('clear-history').addEventListener('click', function() {
//     const historyContainer = getElement('history-container');
//     historyContainer.innerHTML = "";
// });