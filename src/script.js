// -----------------------------------------------------Date-----------------------------------------------------
// date and time
const date = new Date();
const dateFormat = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
};
document.getElementById("current-date").innerHTML = date.toLocaleString('en-UK', dateFormat);


// -----------------------------------------------------Hide and Show Table-----------------------------------------------------
// Hide and Show table 
// let noDataInTheTable = document.querySelector('.money-flow-table-no-data');
// let moreThanOneDataOnTable = document.querySelector('.money-flow-table-container');
// let tableRows = document.querySelectorAll('.money-flow-table tr');

// Show table if no data in table
// if (tableRows.length > 0) {
//     noDataInTheTable.style.display = 'none';
//     moreThanOneDataOnTable.style.display = 'block';
// } else { //Hide table if no data in table
//     noDataInTheTable.style.display = 'flex';
//     moreThanOneDataOnTable.style.display = 'none';
// }


// -----------------------------------------------------Collect Information-----------------------------------------------------

let userEnteredAmount = "";
let userEnteredDescription = "";
let selectedRadio = "All";

// Listen for user input and update the variables
document.getElementById('user-entered-amount').addEventListener('input', function (event) {
    userEnteredAmount = event.target.value.trim();  // Update the userEnteredAmount
    console.log('Amount:', userEnteredAmount);  // Logs the entered amount
});

document.getElementById('user-entered-description').addEventListener('input', function (event) {
    userEnteredDescription = event.target.value.trim();  // Update the userEnteredDescription
    console.log('Description:', userEnteredDescription);  // Logs the entered description
});

// Function to get the selected radio button
function findSelectedRadio() {
    const selectedRadioElement = document.querySelector('input[name="list-radio"]:checked');
    if (selectedRadioElement) {
        selectedRadio = selectedRadioElement.id;  // Store the selected radio ID or value
        console.log('Selected radio ID:', selectedRadio); // Log the selected radio button
    } else {
        console.log('No radio button selected!');
    }
}

// Add event listener to the radio buttons
const radios = document.querySelectorAll('input[name="list-radio"]');
radios.forEach(radio => {
    radio.addEventListener('change', findSelectedRadio);  // Listen for changes in the radio selection
});

// Add to table when the user clicks the Add button
function addToTable() {
    // Select the table body where the new row will be added
    let dynamicTableBody = document.querySelector('.money-flow-table');

    // Get the number of existing rows and assign a unique ID
    let tableRows = document.querySelectorAll('.money-flow-table tr').length;
    dynamicTableData.id = `table-data-${tableRows + 1}`;
    
    // Create a new table row
    let dynamicTableData = document.createElement('tr'); 
    dynamicTableData.classList.add('bg-white', 'border-b', 'border-gray-200');

    // Populate the row with table cells and input elements
    dynamicTableData.innerHTML = `
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            <span class="amount-text">${userEnteredAmount}</span>
            <input type="text" class="amount-input p-2 border border-gray-300 rounded-md hidden" 
                value="${userEnteredAmount}">
        </th>

        <td class="px-6 py-4">
            <span class="description-text">${userEnteredDescription}</span>
            <input type="text" class="description-input-second p-2 border border-gray-300 rounded-md hidden" 
                value="${userEnteredDescription}">
        </td>

        <td class="px-6 py-4">
            <span class="state-text">${selectedRadio}</span>
            <div class="hidden">
                <article class="state-dropdown inline-block relative">
                    <select class="state-select select-dropdown p-2 border border-gray-300 rounded-md">
                        <option>Available</option>
                        <option>Out of Stock</option>
                        <option>Pre-order</option>
                    </select>
                    <svg class="w-4 h-4 absolute right-2 top-2 text-gray-500 pointer-events-none" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M19 9l-7 7-7-7">
                        </path>
                    </svg>
                </article>
            </div>
        </td>

        <td class="px-6 py-4">
            <div class="flex space-x-2">
                <button class="text-blue-500 cursor-pointer" onclick="editTable()">Edit</button>
                <span>|</span>
                <button class="text-red-500 cursor-pointer" onclick="deleteTable()">Delete</button>
            </div>
            <div class="hidden">
                <button class="text-green-700 cursor-pointer" onclick="saveTable()">Save</button>
            </div>
        </td>
    `;

    // Append the new row to the table body
    dynamicTableBody.appendChild(dynamicTableData);
}


function deleteTable(){
    
}