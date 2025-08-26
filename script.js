let yourIp;
let allPostOffices = [];
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the IP address from the API
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      // Display the IP address on the screen
      document.getElementById("your-ip-address").textContent = data.ip;
      yourIp = data.ip;
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
});

document.getElementById("btn").addEventListener("click", () => {
  // console.log("button clicked");
  fetch(`https://ipapi.co/${yourIp}/json/`)
    .then((response) => response.json())
    .then((data) => {
      // Display the IP address on the screen
      // document.getElementById("your-ip-address").textContent = data.ip;
      // yourIp = data.ip;
      console.log("fetch", data);
      document.getElementById("ip-address").textContent = `${yourIp}`;
      document.getElementById("lat").textContent = `Latitude: ${data.latitude}`;
      document.getElementById(
        "long"
      ).textContent = `Longitude: ${data.longitude}`;
      document.getElementById("city").textContent = `City: ${data.city}`;
      document.getElementById("region").textContent = `Region: ${data.region}`;
      document.getElementById("org").textContent = `Organisation: ${data.org}`;
      document.getElementById("hostname").textContent = `Hostname: ${data.org}`;

      //update g map
      document.getElementById(
        "currentLocation"
      ).innerHTML = `<iframe src="https://maps.google.com/maps?q=${data.latitude}, ${data.longitude}&z=15&output=embed" width="600" height="450" frameborder="0" style="border:0"></iframe>`;

      //update more information
      document.getElementById(
        "timezone"
      ).textContent = `Time Zone : ${data.timezone}`;
      document.getElementById(
        "dateAndTime"
      ).textContent = `Date and Time : ${data.timezone}`;
      document.getElementById(
        "pincode"
      ).textContent = `Pincode : ${data.postal}`;

      document.getElementById("homePage").style.display = "none";
      document.getElementById("content").style.display = "block";

      return data.postal;
    })
    .then((postalCode) => {
      fetch(`https://api.postalpincode.in/pincode/${postalCode}`)
        .then((response) => response.json())
        .then((postOfficeData) => {
          allPostOffices = postOfficeData[0].PostOffice;
          console.log("post offcie daat", postOfficeData);
          // const postOffices = postOfficeData[0].PostOffice;
          displayPostOffices(allPostOffices);
        });
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
});

function displayPostOffices(postOffices) {
  const container = document.getElementById("post-offices");
  container.innerHTML = "";
  postOffices.forEach((postOffice) => {
    container.innerHTML += renderPostOfficeCard(postOffice);
  });
}

function renderPostOfficeCard(postOffice) {
  return `<div class="card">
          <div>${postOffice.Name}</div>
          <div>${postOffice.BranchType}</div>
          <div>${postOffice.DeliveryStatus}</div>
          <div>${postOffice.District}</div>
          <div>${postOffice.Division}</div>
        </div>`;
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = allPostOffices.filter((po) => {
    return po.Name.toLowerCase().includes(query);
  });
  displayPostOffices(filtered);
});
