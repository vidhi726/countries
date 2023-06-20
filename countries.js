const submitButton = document.getElementById("submit-button");
const wrapperElement = document.getElementById("wrapper");
submitButton.addEventListener("click", () => {
  wrapperElement.innerHTML = "";
  let countryName = document.getElementById("country-input").value;
  let url = "https://restcountries.com/v3.1/name/" + countryName;
  console.log("API", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        wrapperElement.innerHTML = `Error fetching data from API`;
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((name) => {
      const nameDiv = document.createElement("p");
      nameDiv.innerHTML = "";
      nameDiv.innerHTML = `Name: ${name[0].name.common}`;
      wrapperElement.append(nameDiv);

      const capitalDiv = document.createElement("p");
      capitalDiv.innerHTML = `capital:${name[0].capital[0]}`;
      wrapperElement.append(capitalDiv);

      const region = document.createElement("p");
      region.innerHTML = `region:${name[0].region}`;
      wrapperElement.append(region);

      const official = document.createElement("p");
      official.innerHTML = `offical:${name[0].name.official}`;
      wrapperElement.append(official);

      const population = document.createElement("p");
      population.innerHTML = `population:${name[0].population}`;
      wrapperElement.append(population);

      console.log(name);
    })

    .catch((error) => {
      console.log(error);
    });
});
