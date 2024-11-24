// JavaScript Document
// This is the millage rate (example: 25 mills or 0.025)
var millageRate = 0.002985;

// Function to calculate the amount owed based on property tax
function calculateMillage(propertyValue) {
    return propertyValue * millageRate;
}

// Event listener for form submission
document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Get the user input (property tax amount)
    var propertyValue = parseFloat(document.getElementById('propertyValue').value);

    // Check if the input is valid (not NaN)
    if (!isNaN(propertyValue) && propertyValue > 0) {
        // Calculate the owed amount based on the millage rate
        var owedAmount = calculateMillage(propertyValue);
		var formattedowedAmount = owedAmount.toLocaleString(); 

        // Display the result
        document.getElementById('result').textContent = 
            'Based on a millage rate of ' + (millageRate * 100) + '%, you will owe $' + formattedowedAmount + ' annually.';
    } else {
        // If input is invalid, show an error message
        document.getElementById('result').textContent = 'Please enter a valid property value.';
    }
});