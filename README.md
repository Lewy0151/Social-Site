🧑‍🤝‍🧑 Social Site App

A basic front-end-only social media stream built with **Next.js** and **Tailwind CSS**. Users can view and like posts, and add their own — all stored in the browser via `localStorage`.

---

## ✨ Features

- ✅ Built using **Next.js (App Router)**
- 🎨 Styled with **Tailwind CSS**
- 📌 Fixed top navigation bar
- 💬 Social card components with:
  - Username
  - Post content
  - Like button (with counter)
- ➕ Form page to add new posts
- 🧠 Posts persist using `localStorage`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-github-username/social-stream.git
cd social-stream
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to view the app.

🗂 Project Structure
bash
Copy
Edit
app/
├── layout.js           # Main layout with nav
├── page.js             # Homepage showing posts
└── add/
    └── page.js         # Add new post form

components/
├── Navigation.js       # Navbar
└── SocialCard.js       # Individual social post cards
📦 Tech Stack
Next.js 14+ (App Router)

React

Tailwind CSS

localStorage for browser-side state persistence

🧠 How It Works
Posts are loaded from localStorage on page load.

Clicking the "Like" button updates the like count.

New posts are added via a form and also saved to localStorage.

Navigation uses Next.js’s <Link /> for SPA routing.

📌 Deployment Tips
✅ Recommended: Deploy using Vercel

Just import the repo and you're done.

❌ GitHub Pages doesn't support Next.js App Router easily without custom builds.

✏️ Author
Made by Lewis Cargill

