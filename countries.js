function countriesFetch() {

    const countriesSelect = document.getElementById("countriesList");

    fetch("https://restcountries.com/v2/all")
    .then((data) => data.json())
    .then((countries) => {
        countries.forEach((country) => {

            const countryOption = document.createElement('option');
            countryOption.value = country.name;
            countryOption.text = country.name;

            countriesSelect.append(countryOption);

        })
    })
}

function getCountryData() {
    const selectedCountry = document.getElementById("countriesList").value;

    fetch(`https://restcountries.com/v2/name/${selectedCountry}?fullText=true`)
    .then((data) => data.json())
    .then((countryData) => {
        console.log(countryData);
        const countryFlag = countryData[0].flags.png
        const countryName = countryData[0].name
        const countryCapital = countryData[0].capital
        const countryNativeName = countryData[0].nativeName
        const countryRegion = countryData[0].region
        const countryLanguages = countryData[0].languages[0].name
        const countryCurrencies = countryData[0].currencies[0].name
        const countryPopulation = countryData[0].population.toLocaleString('en-IN')
        const countryBorders = countryData[0].borders
        console.log(countryData);

        let htmlData = `
            <div class="card">
                <img src="${countryFlag}" class="card-img-top" alt="${countryName}">
                <div class="card-body">
                    <h4 class="card-title">${countryName}</h4>
                    <p class="sub-title">Capital : ${countryCapital}</p>
                    <p class="sub-title">Native Name : ${countryNativeName}</p>
                    <p class="sub-title">Region : ${countryRegion}</p>
                    <p class="sub-title">Languages : ${countryLanguages}</p>
                    <p class="sub-title">Currencies : ${countryCurrencies}</p>
                    <p class="sub-title">Population : ${countryPopulation}</p>
                    <p class="sub-title">Borders : ${countryBorders}</p>                 
                </div>
            </div>
        `;
        document.getElementById("countryDataDisplay").innerHTML = htmlData
    })

    console.log("selectedCountry is invoked", selectedCountry);
}

window.addEventListener('load', function() {
    countriesFetch();
})
   