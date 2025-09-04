# 🏫 School Directory Mini

This is a **mini web development project** built using **React** and **MySQL**.  
The application allows users to **add new schools** through a form and **view schools** in a responsive card-style layout.

---

## 🚀 Features
- Add new school details via a responsive form
- Form validation (email, contact number, required fields)
- Upload school image and store in a dedicated folder
- Display school list like an ecommerce product grid
- Dark theme (zinc-800 + emerald highlights)
- Fully responsive (mobile + desktop)

---

## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **File Uploads:** Multer (for images)

---

## 📂 Pages
1. **addSchool.jsx**  
   - Input form to add school details: name, address, city, state, contact, email, and image.  
   - Stores data in the MySQL `schools` table.  

2. **showSchools.jsx**  
   - Displays all schools from the database.  
   - Shows **name, address, city, and image** in ecommerce-style cards.  

---

## 📦 Installation
Clone the repository:
```bash
git clone https://github.com/itsmepraksh/mini-school-directory.git
cd mini-school-directory
