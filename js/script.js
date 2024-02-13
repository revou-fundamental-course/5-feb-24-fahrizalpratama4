function convertTemperature() {
    var celcius = parseFloat(document.getElementById("input-field").value);
    var fahrenheit = parseFloat(document.getElementById("input-fahrenheit").value);
    var calculationMethod = document.getElementById("input-calculation-method");

    if (!isNaN(celcius)) {
        // Perhitungan Celsius ke Fahrenheit
        var resultFahrenheit = Math.round((celcius * 9/5) + 32);
        calculationMethod.value = celcius + " °C = (" + celcius + " °C × 9/5) + 32 = " + resultFahrenheit + " °F";
        document.getElementById("input-fahrenheit").value = resultFahrenheit;
    } else if (!isNaN(fahrenheit)) {
        // Perhitungan Fahrenheit ke Celsius
        var resultCelcius = Math.round((fahrenheit - 32) * 5/9);
        calculationMethod.value = fahrenheit + " °F = (" + fahrenheit + " °F - 32) × 5/9 = " + resultCelcius + " °C";
        document.getElementById("input-field").value = resultCelcius;
    }
}


function resetFields() {
    document.getElementById("input-field").value = "";
    document.getElementById("input-fahrenheit").value = "";
    document.getElementById("input-calculation-method").value = "";
}


function reverseTemperature() {
    var celciusLabel = document.querySelector("label[for=input-field]");
    var fahrenheitLabel = document.querySelector("label[for=input-fahrenheit]");
    var celciusInput = document.getElementById("input-field");
    var fahrenheitInput = document.getElementById("input-fahrenheit");
    var calculationMethod = document.getElementById("input-calculation-method");

    // Menyimpan nilai sebelum pertukaran
    var tempCelciusValue = celciusInput.value;
    var tempFahrenheitValue = fahrenheitInput.value;

    // Pertukaran label
    var tempLabel = celciusLabel.innerHTML;
    celciusLabel.innerHTML = fahrenheitLabel.innerHTML;
    fahrenheitLabel.innerHTML = tempLabel;

    // Pertukaran nilai
    celciusInput.value = tempFahrenheitValue;
    fahrenheitInput.value = tempCelciusValue;

    // Pengecekan nilai untuk menentukan cara kalkulasi yang benar
    var celcius = parseFloat(tempFahrenheitValue);
    var fahrenheit = parseFloat(tempCelciusValue);
    if (!isNaN(celcius)) {
        // Perhitungan Fahrenheit ke Celsius
        var resultCelcius = Math.round((celcius - 32) * 5/9);
        calculationMethod.value = celcius + " °F = (" + celcius + " °C × 9/5) + 32 = " + resultCelcius + " °C";
    } else if (!isNaN(fahrenheit)) {
        // Perhitungan Celsius ke Fahrenheit
        var resultFahrenheit = Math.round((fahrenheit * 9/5) + 32);
        calculationMethod.value = fahrenheit + " °C = (" + fahrenheit + " °F - 32) × 5/9 = " + resultFahrenheit + " °F";
    }
}
