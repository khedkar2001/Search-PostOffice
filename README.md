# 📍 Search Post Office

This project is a web application that retrieves and displays information about the user based on their **IP address**.  
The application shows the user's location on a Google Map, displays the current time in their timezone, and lists nearby post offices with search functionality.

---

## 🚀 Features

- 🔎 **Get User's IP Address** using JavaScript.
- 🌍 **Fetch User Information** from the [ipapi](https://ipapi.co/) API.
- 🗺️ **Google Map Integration** with a marker at the user's location.
- ⏰ **Display Current Time** based on the user's timezone.
- 📬 **Retrieve Local Post Offices** using the [Postal Pincode API](https://api.postalpincode.in/).
- 🔍 **Search & Filter Post Offices** by name and branch office.
- 🎨 **Responsive UI** based on the provided Figma design.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **APIs Used:**  
  - `https://ipapi.co/${IP}/json/` → Fetch user details (location, timezone, pincode)  
  - `https://api.postalpincode.in/pincode/${pincode}` → Fetch post office details  
- **Google Maps Embed API** → Display user’s location with a marker  

---


---

## ⚡ How It Works

1. **Get IP Address** – User's IP is retrieved when the page loads.  
2. **Fetch User Data** – On button click, user details are fetched from the API.  
3. **Display Location** – Latitude & longitude are plotted on a Google Map.  
4. **Show Time** – Current time is displayed using the user's timezone.  
5. **Fetch Post Offices** – Using the user's pincode, a list of post offices is displayed.  
6. **Search Functionality** – User can filter post offices by name or branch office.  

---

## ✅ Evaluation 

- Get user's IP address using JavaScript.  
- Fetch and display user information from `ipapi`.  
- Display Google Map with latitude & longitude marker.  
- Show current time based on timezone.  
- Retrieve post offices using Postal Pincode API.  
- Display post office details on UI.  
- Implement search box filter.  
- UI matches Figma design.  

---

## 🔧 Setup & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/khedkar2001/Search-PostOffice.git
   cd Search-PostOffice
2.Open index.html in a browser.

3.Ensure you have an internet connection (to fetch APIs and load Google Maps).

📌 Resources & References

ipapi.co Documentation

Postal Pincode API

Google Maps Embed

GeeksforGeeks – Get Client IP

StackOverflow – Embed Google Maps

