 Job Portal Application
A full-stack web application designed to connect job seekers with opportunities. This platform allows users to browse job listings, view details, and apply for positions seamlessly. It features a robust Django REST Framework backend and a modern React frontend styled with Tailwind CSS.

🛠️ Tech Stack
Backend
Framework: Django & Django REST Framework (DRF)

Database: PostgreSQL

Authentication: JWT / Built-in Django Auth (Session based currently configured)

API: RESTful API endpoints

Frontend
Framework: React (Vite)

Styling: Tailwind CSS

Routing: React Router DOM

State Management: React Hooks (useState, useEffect)

✨ Features
User Authentication: Secure user registration and login functionality.

Job Listings: Browse available job openings with key details (Title, Company, Location, Salary).

Job Application: Registered users can apply for specific jobs directly through the portal.

Duplicate Check: Prevents users from applying to the same job multiple times.

Responsive Design: Clean and accessible UI built with Tailwind CSS.


🚀 Getting Started
Follow these instructions to set up the project locally.

Prerequisites
Python 3.x

Node.js & npm

PostgreSQL

1️⃣ Backend Setup
Navigate to the backend directory:

Bash

cd backend
Create and activate a virtual environment:

Bash

# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
Install dependencies: (Note: Ensure you have django, djangorestframework, django-cors-headers, and psycopg2 installed)

Bash

pip install django djangorestframework django-cors-headers psycopg2
Configure Database: Ensure your PostgreSQL server is running and create a database named jobportal_db. Update the DATABASES setting in backend/settings.py if your credentials differ from the default.

Run Migrations:

Bash

python manage.py makemigrations
python manage.py migrate
Start the Server:

Bash

python manage.py runserver
The backend API will run at http://127.0.0.1:8000/.

2️⃣ Frontend Setup
Navigate to the frontend directory:

Bash

cd ../frontend
Install dependencies:

Bash

npm install
Start the Development Server:

Bash

npm run dev
The application will typically run at http://localhost:5173/.
