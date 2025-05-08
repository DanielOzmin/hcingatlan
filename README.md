# 🏡 Real Estate Agency – Marketing Web Application

A modern, responsive real estate marketing web application built for public client use.  
It showcases available properties and the agency's team, allowing users to search, browse, and view listings.

This site acts as the **public-facing platform** of the agency. A separate **CRM system** is planned for internal use (not publicly accessible).

---
### Homepage
![Homepage Screenshot](Screenshots/Screenshot1.png)

### Properties List
![Properties List Screenshot](Screenshots/Screenshot2.png)
---

## 📋 Backlog & Project Planning

You can follow the development progress and upcoming features in our [📌 Project Backlog](https://github.com/users/DanielOzmin/projects/2).


## 📸 Pages & Routes

- `/` → **Home**
- `/properties` → **Properties**
- `/team` → **Team**
- `/gallery` → **Gallery**
- `/about` → **About Us**
- `/contact` → **Contact / Write Us**
- `/reviews` → **Client Reviews**
- `/careers` → **Careers / Join Us**

---

## ⚙️ Technologies

### Frontend
- 🧠 React + TypeScript
- 🎨 Classic CSS for styling & responsiveness
- 🌐 i18next – multilingual support (HU/EN) – _in progress_
- 🖼️ FontAwesome, react-icons
- 🔒 reCAPTCHA v2 integration on contact form
- 🗟️ Google Maps integration

### Backend
- 🚀 ASP.NET Core Web API (C#)
- 🗄️ Entity Framework Core (EF Core)
- 🧐 MSSQL – relational database
- ✅ Unit tested backend logic using xUnit + InMemory DB
- 🧪 JSON-based data seed for development/demo

---

## 🔍 Backend Features & Endpoints

### 🏨 `PropertyController`

- `GET /api/property` → Get all properties  
- `GET /api/property/{id}` → Get property by ID  
- `POST /api/property/search` → Search properties by filters (price, type, location, CSOK, size, etc.)  
- ✔️ Uses `PropertySearchDto` for structured search input  
- ✔️ All filter branches covered by unit tests  
- ✔️ Includes logic for handling invalid (e.g., negative) numbers

### 💬 `MessageUsController`

- `POST /api/messageus` → Send a message from the "Write us" contact form  
- Stores message with contact details (name, email, phone, message)

### 👤 `EmployeeController` _(temporary)_

- `GET /api/employee` → Get all employees  
- `GET /api/employee/{id}` → Get employee by ID  
- _Only for frontend display purposes — will be replaced by admin CRM module._

---

## 🧢 Unit Tests

Located in the `BackendTests` project using **xUnit** framework.

- ✅ Tests for `PropertyController.GetPropertiesBySearch`
- 🧐 In-memory EF context (`UseInMemoryDatabase`)
- 🔍 Each filter logic path tested:
  - Transaction type
  - Property type
  - Location (district/city distinction)
  - Price range (with multiplier handling)
  - Room number and floor area
  - CSOK Plus toggle
  - Build type (new/resale)
  - Typed ID
  - Edge cases (e.g., invalid/negative inputs)

---

## 🌱 Seeding (Fake Data)

For development and UI testing, the backend seeds:
- ✅ 18 properties from Budapest (Districts I–XXIII) and nearby cities (Érd, Dunaharaszti)
- ✅ Properties assigned to employees
- ✅ Realtor data (name, contact, description)
- ✅ Locations distinguish between `City` and `District`
- ⚠️ Admin/CRM functions not seeded — handled separately

---

## 🔪 Setup & Running Locally

### 🌐 Frontend (React)

```bash
git clone https://github.com/your-username/project-name.git
cd frontend
npm install
npm run dev
```

---

### 🧹 Backend (ASP.NET Core Web API)

#### 1. Open the `.sln` file in JetBrains Rider or Visual Studio

#### 2. Set the `Backend` project as the **Startup Project**

#### 3. Run the backend:
- Rider: `Run → Run Backend`

#### 5. Database
- The backend uses **MSSQL**
- The connection string is defined in `appsettings.json` or `appsettings.Development.json`
- Alternatively, use **User Secrets** in development:

```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "your-connection-string"
```

---

### 🧢 Running Tests

To run backend unit tests:

```bash
dotnet test
```

Or use Rider / Visual Studio test explorer.

---

## 📱 View & Responsive Design

- The website is currently optimized for 2 **desktop** screen sizes.
- 📱 **Mobile view** support is still **under development**.
- Responsive behavior is implemented using classic CSS and media queries.

---

## 📊 Analytics / Statistics

- Statistical features such as:
  - Page views
  - Property interactions
  - Visitor tracking  
  ...are **not yet implemented** (just dummy data).
- Exact requirements are still pending clarification from stakeholders.

---

## 🔐 Environment Variables

### 🌐 Frontend (`.env`)

To run the frontend, create a `.env` file in the `frontend` folder with the following keys:

```env
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
VITE_BOSS_AGENT_ID=your_agent_id
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

> ⚠️ Without these keys, reCAPTCHA and Google Maps will not function properly.

### 🧉 Backend (ASP.NET Core)

You must provide a **connection string** to your SQL Server database either via:

1. `appsettings.json` / `appsettings.Development.json`  
**OR**  
2. Using [User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets) in development environment:

```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "your-connection-string"
```

> Rider and Visual Studio automatically load secrets if configured properly.

---

## ✅ Status: **Active development**

Frontend:
- 90% done (UI polish + i18n still in progress)

Backend:
- Fully working search logic
- CRUD endpoints ready for properties/messages/employees
