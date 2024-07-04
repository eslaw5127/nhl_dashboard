# NHL Dashboard README

## Overview

The NHL Dashboard is a web application designed to display data relevant to the Dallas Stars Hockey team for the 2023-2024 NHL season. It provides coaches and managers with an easy-to-use interface to view team and player statistics.

## Features

- **Team Statistics:** Display comprehensive team stats including wins, losses, points, goals for, goals against, etc.
- **Player Statistics:** Detailed player stats such as goals, assists, points, plus/minus, etc.
- **Responsive Design:** Ensures usability across different devices and screen sizes.
- **Backend Integration:** Utilizes Flask to fetch and serve data sourced from HockeyReference.com.

## Setup Instructions

To run the NHL Dashboard locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/eslaw5127/nhl_dashboard.git
   cd nhl_dashboard

2. **Install dependencies:**

Ensure you have Node.js, npm (Node Package Manager), and Python installed on your machine.

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
pip install -r requirements.txt
Start the application:


# Start the frontend (React.js)
cd client
npm start

# Start the backend (Flask)
cd ../server
python app.py
Open your browser:

Navigate to http://localhost:3000 to view the NHL Dashboard.

# Technologies Used
- **Frontend:** React.js, JavaScript, HTML/CSS
- **Backend:** Flask, Python
- **Data Source:** HockeyReference.com (2023-2024 NHL Season)
