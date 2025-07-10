// Wind chill formula for Celsius
function calculateWindChill(tempC, windKmh) {
    return Math.round(
        13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)
    );
}

document.addEventListener('DOMContentLoaded', () => {
    // Set footer year and last modified
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Wind chill calculation
    const temp = parseFloat(document.getElementById('temp').textContent);
    const wind = parseFloat(document.getElementById('wind').textContent);
    let windChill = 'N/A';

    if (temp <= 10 && wind > 4.8) {
        windChill = calculateWindChill(temp, wind);
    }
    document.getElementById('windchill').textContent = windChill;
});
  