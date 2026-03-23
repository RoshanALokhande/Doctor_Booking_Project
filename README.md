# 🩺 DocSpot - Modern Doctor Booking Platform

**DocSpot** is a comprehensive MERN (MongoDB, Express, React, Node.js) stack application designed to bridge the gap between patients and healthcare providers. It allows patients to discover doctors by specialty, book appointments seamlessly, and manage their health profiles, while providing a dedicated dashboard for administrators and doctors.

**🌐 Live Demo:** [DocSpot Frontend](https://doctor-booking-project-frontend.onrender.com/)

---

## 🚀 Key Features

### For Patients
- **Specialty-Based Search:** Browse doctors by expertise (General Physician, Gynecologist, Dermatologist, etc.).
- **Instant Booking:** View available time slots and book appointments in real-time.
- **User Profiles:** Manage personal information and track appointment history.
- **Responsive UI:** Optimized specifically for a clean, desktop-first experience.

### For Administrators & Doctors
- **Management Dashboard:** Add, update, or remove doctor profiles and specialties.
- **Appointment Handling:** Efficiently manage incoming bookings and doctor schedules.
- **Secure Authentication:** Role-based access for admins and users.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **Authentication** | JWT (JSON Web Tokens) |
| **Deployment** | Render (Web Service & Static Site) |

---

## 📂 Project Structure

```text
├── backend/            # Express server, MongoDB models, & API routes
├── frontend/           # Patient-facing React application
└── admin/              # Admin/Doctor Dashboard Panel


⚙️ Installation & Setup
Clone the repository:

Bash
git clone [https://github.com/RoshanALokhande/Doctor_Booking_Project.git](https://github.com/RoshanALokhande/Doctor_Booking_Project.git)
cd Doctor_Booking_Project
Setup Backend:

Navigate to backend/

Install dependencies: npm install

Create a .env file and add:

Code snippet
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password
Start server: npm run server

Setup Frontend:

Navigate to frontend/

Install dependencies: npm install

Start development server: npm run dev

☁️ Deployment on Render
Backend Deployment
Service Type: Web Service

Build Command: npm install

Start Command: node server.js

Port: Render automatically assigns port 10000. Ensure your code uses process.env.PORT.

Frontend Deployment
Service Type: Static Site

Build Command: npm run build

Publish Directory: dist
