# 🛒 Qtec Solution - Mini E-Commerce SPA

This is a **Single Page Application (SPA)** eCommerce frontend built with **React** and a custom **Express backend**. It was developed as part of a frontend developer assessment for **Qtec Solution Ltd**.

> 🔗 **Live Frontend:** [https://qtec-solution.vercel.app](https://qtec-solution.vercel.app)
> 🔗 **Live Backend (API):** [https://qtec-solution.onrender.com](https://qtec-solution.onrender.com)

---

## 📦 Tech Stack

### Frontend:

- ⚛️ React (Pure SPA)
- 🚦 Custom Mini Router (No React Router)
- 🎨 Tailwind CSS v4 + `shadcn/ui`
- 🔁 FSM-style reducer logic with `useReducer`
- 🛍️ Cart logic with LocalStorage sync
- 🖼️ Interactive image gallery on product pages
- ⭐ Dynamic star rating (per product)
- ✍️ Vanilla form validation (no libraries)
- 🧱 Skeleton loaders for loading states
- 🔔 `sonner` for toast notifications
- 📱 Fully Responsive UI
- 🌐 Hosted on **Vercel**

### Backend:

- 🧠 Express.js (API Server)
- 🧾 Drizzle ORM
- 🐘 Neon Postgres (serverless)
- 🌱 Seeded dummy products (from [fakestoreapi.com](https://fakestoreapi.com/))
- 🌐 Hosted on **Render**

### API:

- GET all products (Used in homepage): https://qtec-solution.onrender.com/products

- GET single product (Used in product detail page):https://qtec-solution.onrender.com/product/:id

---

## 🧪 Features

- ✅ Custom router (SPA without `react-router`)
- ✅ Product listing with image, title, price, and “Add to Cart”
- ✅ Product details page with:

  - 🖼️ Interactive image gallery with zoom effect on hover
  - ⭐ Dynamic star rating display

- ✅ Cart sidebar with quantity controls & total calculation

- ✅ Styled using `shadcn/ui` and Tailwind
- ✅ LocalStorage-powered cart persistence
- ✅ User interaction notification

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
cp .env.example .env        # Add your DATABASE_URL
pnpm install
pnpm run db:generate        # Optional: generate types from schema
pnpm run db:migrate         # Optional: run DB migrations
pnpm run db:seed            # Seeds products from fakestoreapi
pnpm run dev                # Starts Express server (default port: 4000)
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

## 📬 Contact

**Tauhid Ahmed**
📧 [tauhidahmed.dev@gmail.com](mailto:tauhidahmed.dev@gmail.com)
🌐 [Portfolio](https://tauhidahmed.vercel.app) • [GitHub](https://github.com/tauhid-ahmed) • [LinkedIn](https://linkedin.com/in/tauhidxahmed)
