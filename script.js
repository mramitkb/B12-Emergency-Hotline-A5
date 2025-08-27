// function for get ID
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}


// Event Delegation
getElement('all-cart-container').addEventListener('click', function(e) {

    // Heart Count Event
    if(e.target.className.includes('hearts')) {
        // get Heart Count
        const heartCount = getElement('heart-count').innerText;
        const updateHeartCount = Number(heartCount) + 1;
        
        // set Heart Count
        getElement('heart-count').innerText = updateHeartCount;
    }

    // Call Button Event
    if(e.target.className.includes("calls")) {
        // All content for access
        const serviceTitle = e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText;
        const serviceName = e.target.parentNode.parentNode.parentNode.children[1].children[1].innerText;
        const serviceNumber = e.target.parentNode.parentNode.parentNode.children[2].children[0].innerText;
        const currentTime = new Date().toLocaleTimeString();
        
        // get total coin
        const totalCoin = getElement('total-coin').innerText;
        
        // Condition for less than 20
        if(Number(totalCoin) < 20) {
            return alert(`❌ আপনার পর্যাপ্ত কয়েন নেই!`);
        }
        
        // Show alert when call button clicked
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`);
        
        // Reduce coins for each call-----------------------
        
        // reduce 20 coins
        const reduceCoin = Number(totalCoin) - 20;
        // update total coin
        getElement('total-coin').innerText = reduceCoin;
        

        // Show on call history-----------------------------
        const historyContainer = getElement('add-cart-container');
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg">
                        <div>
                            <h1>${serviceTitle}</h1>
                            <p>${serviceNumber}</p>
                        </div>
                        <p class="text-sm">${currentTime}</p>
                    </div>
        `
        historyContainer.appendChild(div);
    }
})