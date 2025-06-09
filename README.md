# 🏦 EasyLoans - SME/MSME Loan Management API

EasyLoans is a Node.js + Express.js backend system designed to handle SME/MSME loan leads and applications. It provides full CRUD operations and is connected to a MongoDB database using Mongoose. Data can be tested using Thunder Client inside VS Code.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via MongoDB Compass)
- **Mongoose**
- **Thunder Client** 
- **dotenv**

---

## 📁 Project Structure
easyloans/
├── config/
│ └── db.js
├── controllers/
│ ├── leadController.js
│ └── loanController.js
├── models/
│ ├── Lead.js
│ └── LoanApplication.js
├── routes/
│ ├── leadRoutes.js
│ └── loanRoutes.js
├── .env
├── server.js
├── package.json
└── README.md
````

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=mongodb://localhost:27017/easyloans
PORT=3000
```

### 4. Start MongoDB

Make sure MongoDB is running on your machine (you can manage it with MongoDB Compass or via CLI).

### 5. Start the Server

```bash
node server.js
```

You should see:

```
✅ MongoDB connected!
✅ Server running at http://localhost:3000
```

---

## 🧪 API Endpoints

### 📍 Leads

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| POST   | /api/leads      | Create a new lead   |
| GET    | /api/leads      | Get all leads       |
| GET    | /api/leads/\:id | Get a lead by ID    |
| PUT    | /api/leads/\:id | Update a lead by ID |
| DELETE | /api/leads/\:id | Delete a lead by ID |

### 📍 Loan Applications

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| POST   | /api/loans      | Create a loan application    |
| GET    | /api/loans      | Get all loan applications    |
| GET    | /api/loans/\:id | Get a loan application by ID |
| PUT    | /api/loans/\:id | Update a loan application    |
| DELETE | /api/loans/\:id | Delete a loan application    |

---

## 👨‍💻 Example Request Body - Create Lead

```json
{
  "first_name": "Ravi",
  "last_name": "Kumar",
  "mobile": "9876543210",
  "pan_number": "ABCDE1234F",
  "loan_amount": 85000
}
```

---

## 🚀 Testing with Thunder Client

Thunder Client is a lightweight API client built into VS Code.

### Steps:

1. Install the **Thunder Client** extension from the VS Code marketplace.
2. Open the ⚡ Thunder Client tab in VS Code.
3. Create new requests and test endpoints like:

   * `POST /api/leads`
   * `GET /api/leads`
   * `POST /api/loans`

---

## 📄 License

This project is licensed under the MIT License.



