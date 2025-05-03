## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**: Required to run Angular and manage dependencies.
- **json-server**: Simulates the backend API (already installed, but can be run using `npx`).

### Setup
1. **Clone the Project Repository**
   - Clone the repository to your local machine using:
     ```bash
     git clone https://github.com/ahmedZienhom/Angular-CRUD-Repo.git
     ```

2. **Navigate to the Project Folder**
   - Open the terminal and navigate to the project folder:
     ```bash
     cd Angular-CRUD-Repo
     ```

3. **Install Dependencies**
   - Run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

4. **Run json-server**
   - To simulate the backend, start `json-server` using the following command:
     ```bash
     npx json-server db.json
     ```
   - This will start `json-server` and the API will be available at `http://localhost:3000`.

5. **Start the Angular Development Server**
   - Run the following command to start the Angular development server:
     ```bash
     ng serve
     ```
   - The Angular application will be available at `http://localhost:4200`.
