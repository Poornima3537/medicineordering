# Medicine Ordering System

A full-stack medicine ordering web application built with React, Spring Boot, and MySQL. The system supports user registration/login, medicine browsing, cart management, prescription upload, checkout, order tracking, and admin management for medicines, orders, prescriptions, users, categories, dosages, and packaging types.

---

# Features

## User Features
- User registration and login authentication
- Browse and search medicines
- Add medicines to cart
- User-specific cart management
- Upload prescriptions when required
- Checkout with registered delivery address confirmation
-  displaying orders

## Admin Features
- Admin dashboard
- Manage medicines
- Manage categories
- Manage dosages
- Manage packaging types
- Manage users
- Validate or reject prescriptions
- Update order status
- Update payment status

---

# Tech Stack

## Frontend
- React
- Vite
- React Router
- Axios
- Bootstrap
- React Toastify

## Backend
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- MySQL
- Lombok

---

# Project Structure

```text
medicineordering/
│
├── backend/     Spring Boot REST API
└── frontend/    React + Vite Application
```

---



# Backend Setup

## Step 1: Create Database

```sql
CREATE DATABASE medicineordering;
```

---

## Step 2: Configure Database Credentials

File:

```text
backend/src/main/resources/application.properties
```

Example configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/medicineordering?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=your_mysql_password

spring.jpa.hibernate.ddl-auto=update

server.port=8080
```

---

## Step 3: Run Backend

### Linux / Mac

```bash
cd backend
./mvnw spring-boot:run
```

### Windows

```bash
cd backend
mvnw.cmd spring-boot:run
```

Backend URL:

```text
http://localhost:8080
```

Swagger UI:

```text
http://localhost:8080/swagger-ui/index.html
```

---

# Frontend Setup

## Step 1: Install Dependencies

```bash
cd frontend
npm install
```

---

## Step 2: Run Frontend

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---



# API Endpoints

## Authentication APIs

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

---

## Medicine APIs

```text
GET    /api/medicines
POST   /api/admin/medicines
PUT    /api/admin/medicines/{id}
DELETE /api/admin/medicines/{id}
```

---

## Cart APIs

```text
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/update/{cartItemId}
DELETE /api/cart/remove/{cartItemId}
```

---

## Order APIs

```text
POST /api/orders/place
GET  /api/orders/my

GET  /api/admin/orders
PUT  /api/admin/orders/{id}/status
PUT  /api/admin/orders/{id}/payment
```

---

## Prescription APIs

```text
POST /api/prescriptions/upload
GET  /api/admin/prescriptions
PUT  /api/admin/prescriptions/{id}/validate
PUT  /api/admin/prescriptions/{id}/reject
```




### Categories

```text
GET    /api/categories
POST   /api/categories
DELETE /api/categories/{id}
```

### Dosages

```text
GET    /api/dosages
POST   /api/dosages
DELETE /api/dosages/{id}
```

### Packaging Types

```text
GET    /api/packagings
POST   /api/packagings
DELETE /api/packagings/{id}
```

### Users

```text
GET /api/admin/users
```

---

# Application Workflow

1. Register or log in as a user.
2. Browse medicines.
3. Add medicines to cart.
4. Upload prescription if required.
5. Confirm delivery address.
6. Place order.
7. Admin manages medicines, prescriptions, orders, and users.

---

# Build Commands

## Frontend Production Build

```bash
cd frontend
npm run build
```

---

## Backend Tests

### Linux / Mac

```bash
cd backend
./mvnw test
```

### Windows

```bash
cd backend
mvnw.cmd test
```
# Screenshots




<img width="1894" height="923" alt="image" src="https://github.com/user-attachments/assets/130017c9-40ca-4db2-94cf-188b53b47e57" />



<img width="1882" height="907" alt="image" src="https://github.com/user-attachments/assets/b7225d4a-ddaf-4168-bfea-a83b6bf337cb" />



<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/33cab75a-94cf-4747-a326-027046645dc3" />


<img width="1919" height="892" alt="image" src="https://github.com/user-attachments/assets/91d10958-4f9e-40b0-9372-6c3c8947f67e" />


<img width="1913" height="867" alt="image" src="https://github.com/user-attachments/assets/80c92082-4453-49bd-b149-e719129266f1" />
