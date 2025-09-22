# 🎨 Wave Scanning Pattern – React.js  
_Assessment Submission – Software Developer Role (Future of Gaming)_

---

## 🔗 Live Project
- **Public Link:** [fog1-eight.vercel.app](https://fog1-eight.vercel.app/)  
- **Repository:** [github.com/DheerajRay-01/fog1](https://github.com/DheerajRay-01/fog1)  

---

## 👨‍💻 Candidate Details
- **Name:** Dheeraj Ray  
- **Email:** dheerajray2003@gmail.com  
- **Phone:** +91 7999768117  
- **Resume:** [dheerajRayResume](https://drive.google.com/file/d/1IauyW58pxUijk9Eop2xqMROM3zsAx7Q0/view?usp=sharing)  

---

## 📌 Project Overview
This project replicates the **animated wave scanning pattern** as shown in the provided video.  
It is built entirely with **React.js** and **Tailwind CSS**, with a focus on **smooth animation, responsiveness, and clean code structure**.

---

## ✨ Features
✅ **Grid-based Layout** – Dynamic grid using CSS Grid.  
✅ **Wave Animation** – Active column moves forward and backward, simulating a scanner effect.  
✅ **Dynamic Coloring** – Each cell’s shade is calculated based on its distance from the active scanning column.  
✅ **Smooth Transition** – Natural wave-like movement achieved via React state updates.  
✅ **Customizable** – Grid size, speed, and colors can be easily tweaked.  
✅ **Optional Enhancement** – Can integrate **GSAP** for advanced animation effects.  

---

## 🛠️ Tech Stack
- **React.js** – Core framework.  
- **Tailwind CSS** – Utility-first styling.  
- **JavaScript (ES6+)** – State & logic handling.  
- **GSAP** – Animation enhancements.  

---

## 🏗️ High-Level Approach
1. **Grid Creation**  
   - Defined a **15 × 20 grid** using CSS Grid.  
   - Each cell represented as a `<div>` styled with Tailwind.  

2. **Scanning Column Logic**  
   - Maintained `activeColumn` in React state.  
   - A loop updates the column index forward and backward (scanner motion).  

3. **Wave Effect**  
   - For each cell, calculated its **distance from the active column**.  
   - Mapped this distance into a **color intensity** using a function.  
   - Result → smooth gradient wave across the grid.  

4. **Styling & Animation**  
   - Tailwind for layout and responsive styles.  
   - Smooth transition achieved using inline styles.  
   - Future-ready for GSAP integration.  

---

## ⚡ Quick Start (Local Setup)
```bash
# Clone repository
git clone https://github.com/DheerajRay-01/fog1.git
cd fog1

# Install dependencies
npm install

# Start development server
npm run dev
````

Access at: `http://localhost:5173`

---

## 📸 Screenshots

### Grid Wave Animation

<img width="1878" height="858" alt="image" src="https://github.com/user-attachments/assets/de3a7746-31c8-41fc-b047-2dcbc515aabe" />


---

## 🎯 Why This Solution?

* **Efficient & Simple** – Minimal state, only updates active column.
* **Scalable** – Grid size and speed are configurable.
* **Clean UI** – Tailwind ensures neat, responsive design.
* **Extensible** – Easy to add GSAP or custom themes.

