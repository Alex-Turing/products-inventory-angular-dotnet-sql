# **Medications Inventory Management**

A web-based application built using Angular and ASP.NET Core for managing medications in a pharmacy or healthcare setting. This application allows users to view, edit, and temporarily remove medications without immediately affecting the database, providing a smooth and user-friendly experience.

---

## **Demo Video**  
[![Watch the Demo](https://youtu.be/gEVeLPIaPtI)](https://youtu.be/gEVeLPIaPtI)  
Click the thumbnail above to watch a quick demo of the application in action.

---

## **Features**  
- **View Medications:** Display a list of medications with detailed attributes like description, package size, cost, and units used.  
- **Edit Medications:** Update medication details directly through input fields, with changes saved to the database using RESTful API calls.  
- **Temporary Delete:** Remove a medication from the screen without affecting the database. Changes are restored upon page reload.  
- **Undo Delete:** Undo temporary deletions to restore the item immediately to the list.  
- **Clean and Scalable Architecture:** Implements best practices with Angular and ASP.NET Core, ensuring maintainable code.

---

## **Technologies Used**  
- **Frontend:** Angular, TypeScript, Reactive Forms  
- **Backend:** ASP.NET Core with Entity Framework Core  
- **Database:** SQL Server  
- **HTTP Client:** Angular HttpClient for RESTful API communication  

---

## **Getting Started**  

### **Prerequisites**  
- Node.js (v14 or higher)  
- Angular CLI (`npm install -g @angular/cli`)  
- .NET 6 SDK  
- SQL Server  

### **Installation**  
1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/yourusername/medications-inventory.git
   cd medications-inventory
   ```

2. **Install Frontend Dependencies:**  
   ```bash
   cd client
   npm install
   ```

3. **Setup Backend:**  
   - Update the connection string in `appsettings.json` to point to your SQL Server instance.  
   - Run database migrations if applicable.  

4. **Run the Application:**  
   - Start the backend:  
     ```bash
     dotnet run
     ```  
   - Start the Angular frontend:  
     ```bash
     ng serve
     ```  
   - Open your browser and navigate to `http://localhost:4200`.  

---

## **Usage**  
### **Viewing Medications**  
- Launch the application to see a list of available medications.

### **Editing Medications**  
- Click the **Edit** button to enable input fields for updating medication details.  
- Click **Save** to update the data or **Cancel** to revert changes.

### **Temporary Delete**  
- Click the **Delete** button to temporarily remove an item from the list without affecting the database.  
- The list is restored upon page reload.

---

## **API Endpoints**  
- **GET:** `/api/Medications` – Retrieves all medications  
- **POST:** `/api/Medications` – Adds a new medication  
- **PUT:** `/api/Medications/{id}` – Updates an existing medication  
- **DELETE:** `/api/Medications/{id}` – Deletes a medication  

---

## **Project Structure**
```
.
├── client                  # Angular Frontend
├── server                  # ASP.NET Core Backend
└── README.md
```

---

## **License**  
This project is licensed under the MIT License.  

---

## **Contributing**  
Contributions are welcome! Please fork the repository and submit a pull request for review.  

---

## **Contact**  
**Alexander Hernandez**  
- [LinkedIn](https://www.linkedin.com/in/alexander-hernandez-software-developer/)  
- [GitHub](https://github.com/Alex-Turing)  

