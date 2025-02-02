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
let selectedRadio = "";

// Listen for user input and update the variables
document.getElementById('user-entered-amount').addEventListener('input', function (event) {
    userEnteredAmount = event.target.value.trim();  
    console.log('Amount:', userEnteredAmount);  
});

document.getElementById('user-entered-description').addEventListener('input', function (event) {
    userEnteredDescription = event.target.value.trim();  
    console.log('Description:', userEnteredDescription);  
});

// Function to get the selected radio button
function findSelectedRadio() {
    const selectedRadioElement = document.querySelector('input[name="list-radio"]:checked');
    if (selectedRadioElement) {
        // Get the 'for' attribute of the selected radio button
        const label = document.querySelector(`label[for="${selectedRadioElement.id}"]`);
        if (label) {
            // Store the label's text content in the selectedRadio variable
            selectedRadio = label.textContent.trim();
        }
    } else {
        console.log('No radio button selected!');
    }
}


// Add event listener to the radio buttons
const radios = document.querySelectorAll('input[name="list-radio"]');
radios.forEach(radio => {
    radio.addEventListener('change', findSelectedRadio);  
});

// -----------------------------------------------------Add to Table Functionality-----------------------------------------------------
// Add to table when the user clicks the Add button
function addToTable() {
    // Check if the amount is empty before proceeding
    if (!userEnteredAmount.trim()) {
        console.log('Amount is empty, not adding to the table');
        return; // Exit the function without adding the row
    }

    // Select the table body where the new row will be added
    let dynamicTableBody = document.querySelector('.money-flow-table');
    
    // Create a new table row
    let dynamicTableData = document.createElement('tr'); 
    dynamicTableData.classList.add('bg-white', 'border-b', 'border-gray-200');

    // Get the number of existing rows and assign a unique ID
    let tableRows = document.querySelectorAll('.money-flow-table tr').length;
    dynamicTableData.id = `table-data-${tableRows + 1}`;

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
                <button class="edit-button text-blue-500 cursor-pointer">Edit</button>
                <span>|</span>
                <button class="delete-button text-red-500 cursor-pointer">Delete</button>
            </div>
            <div class="hidden">
                <button class="save-button text-green-700 cursor-pointer">Save</button>
            </div>
        </td>
    `;

    // Append the new row to the table body
    dynamicTableBody.appendChild(dynamicTableData);

    // Attach event listeners for Edit and Delete buttons
    dynamicTableData.querySelector('.delete-button').addEventListener('click', function(event) {
        deleteTable(event);
    });
    dynamicTableData.querySelector('.edit-button').addEventListener('click', function(event) {
        // editTable(event); // Implement your edit logic here
    });
}

function deleteTable(event) {
    let rowToDelete = event.target.closest('tr');
    rowToDelete.remove();
}

