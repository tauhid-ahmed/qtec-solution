Here's a **clean, professional, and human-friendly `README.md`** for your GitHub project based on everything you've shared (tech stack, structure, deployment, features, and assessment goals):

---

# 🛒 Qtec Solution - Mini E-Commerce SPA

This is a **Single Page Application (SPA)** eCommerce frontend built with **React** and a custom **Express backend**. It was developed as part of a frontend developer assessment for **Qtec Solution Ltd**.

> 🔗 **Live Frontend:** [https://qtec-solution.vercel.app](https://qtec-solution.vercel.app)
> 🔗 **Live Backend (API):** [https://qtec-solution.onrender.com](https://qtec-solution.onrender.com)

---

## 📦 Tech Stack

### Frontend:

- ⚛️ React (Pure SPA)
- 🧩 Custom Mini Router (No React Router)
- 🎨 Tailwind CSS v4 + `shadcn/ui`
- 🔁 FSM-style reducer logic with `useReducer`
- 🛍️ Cart logic with LocalStorage sync
- 🧱 Skeleton loaders
- 🧃 `sonner` for toast notifications
- 📱 Fully Responsive UI
- 🌐 Hosted on **Vercel**

### Backend:

- 🧠 Express.js (API Server)
- 🧾 Drizzle ORM
- 🐘 Neon Postgres (serverless)
- 🌱 Seeded dummy products (from [fakestoreapi.com](https://fakestoreapi.com/))
- 🌐 Hosted on **Render**

---

## 🧪 Features

- ✅ Custom router (SPA without `react-router`)
- ✅ Product listing with image, title, price, and “Add to Cart”
- ✅ Product details page
- ✅ Cart sidebar with quantity controls & total calculation
- ✅ Checkout modal with simulated order form
- ✅ Fully styled using `shadcn/ui` and Tailwind
- ✅ LocalStorage-powered cart persistence
- ✅ Toasts for interactions
- ✅ Minimal and clean UI experience

---

## 📁 Folder Structure

```
/qtec-solution
  ├── /server     # Express backend with Drizzle ORM
  └── /frontend   # Pure React SPA with Tailwind, Shadcn, and FSM reducer
```

---

## 🚀 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/qtec-solution.git
cd qtec-solution
```

---

### 2. Start the Backend

```bash
cd server
cp .env.example .env        # Make sure to set your DATABASE_URL
pnpm install
pnpm run db:generate        # optional: for types
pnpm run db:migrate         # optional: to run migrations
pnpm run db:seed            # seeds products from fakestoreapi
pnpm run dev                # starts Express server on port (default: 4000)
```

---

### 3. Start the Frontend

```bash
cd ../frontend
cp .env.example .env        # Add: VITE_API_URL=https://qtec-solution.onrender.com
pnpm install
pnpm run dev
```

---

## 🔑 Environment Variables

### Backend `.env`

```env
DATABASE_URL=your_neon_postgres_connection_string
```

### Frontend `.env`

```env
VITE_API_URL=https://qtec-solution.onrender.com
```

---

## 💡 Notes

- This is **not a monorepo**, but the structure is split into `frontend` and `server` for clarity.
- The project uses a **minimal FSM (finite state machine)** style reducer pattern for state transitions.
- **No authentication** is included as per the task instructions.
- All UI components are responsive and mobile-friendly.
- The database is hosted on **Neon**, and API is served through **Render**.
- Feel free to explore and improve further!

---

## 📬 Contact

If you have any questions or feedback, feel free to reach out:

**Tauhid Ahmed**
📧 [tauhidahmed.dev@gmail.com](mailto:tauhidahmed.dev@gmail.com)
🌐 [Portfolio](https://tauhidahmed.vercel.app) | [GitHub](https://github.com/tauhid-ahmed) | [LinkedIn](https://linkedin.com/in/tauhidxahmed)

---

Would you like this `README.md` exported as a downloadable file?
