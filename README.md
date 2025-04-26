
---

# 🛒 E-Commerce Store

This is a full-stack E-Commerce website built for learning and demonstration purposes.  
It allows users to browse products, add items to the cart, and admins to add new products.

---

## 📚 Technologies Used

**Frontend:**
- React.js
- Axios
- React Toastify
- Material UI

**Backend:**
- Node.js
- Express.js
- Multer (for image uploads)
- MongoDB & Mongoose

---

## ✨ Features

- 🛍️ View products with images, prices, and descriptions.
- ➕ Add products to the cart.
- 🔐 Admin login (username: `admin`, password: `admin123`) to add new products.
- 🖼️ Upload product images.
- 📦 Save product details in MongoDB.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-store.git
cd ecommerce-store
```

---

### 2. Backend Setup

Go to the backend folder:
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the server:
```bash
npm start
```

✅ Server runs at `http://localhost:5000`

---

### 3. Frontend Setup

Go to the frontend folder:
```bash
cd frontend
npm install
```

Start the React app:
```bash
npm start
```

✅ React app runs at `http://localhost:3000`

---

## 🔒 Admin Login Details

To add a new product, login using:

- **Username**: `admin`
- **Password**: `admin123`

Only admins can access the "Add Product" page.

---

## 🗂️ Project Structure

```
ecommerce-store/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── HomePage.js
├── README.md
└── package.json
```



## 💬 Contributing

Contributions are welcome!  
Feel free to open an issue or submit a pull request.

---



# 🚀 Future Improvements (Optional Ideas)

- User authentication (Login/Register).
- Payment Gateway Integration (Stripe/PayPal).
- Admin dashboard to manage products and orders.
- Better styling with TailwindCSS or Bootstrap.

---

