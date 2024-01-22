# Twitt Generator Project

Thank you for using the Twitt Generator project! This README will guide you through the setup and running of the project.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

- `frontend/`: Contains the frontend code for the Twitt Generator.
- `backend/`: Contains the backend code for the Twitt Generator.

## Getting Started

To get started, follow these steps:

### Manual Installation

1. **Download and Extract the ZIP File:**

   - Download the ZIP file provided to you.
   - Extract the contents of the ZIP file to a location of your choice.

2. **Running the Backend:**

   - Open a terminal/command prompt and navigate to the `backend` folder:
     ```shell
     cd backend
     ```
   - Install the Python dependencies using the following command:
     ```shell
     pip install -r requirements.txt
     ```
   - Run the backend server:
     ```shell
     python run.py
     ```
   - The backend server should now be running at http://localhost:5000.

3. **Running the Frontend:**

   - Open another terminal/command prompt and navigate to the `frontend` folder:
     ```shell
     cd frontend
     ```
   - Install the Node.js dependencies using the following command:
     ```shell
     npm install
     ```
   - Start the frontend development server:
     ```shell
     npm start
     ```
   - The frontend should now be accessible at http://localhost:3000 in your web browser.

4. **Using the Twitt Generator:**

   - Open your web browser and navigate to http://localhost:3000 (the frontend).
   - You can use the Twitt Generator interface to generate tweets by filling out the form and clicking the "Generate Tweet" button.

5. **Enjoy using the Twitt Generator!**

### Running the Setup Script (Windows, macOS, Linux)

To simplify the setup process, you can also use the provided setup script. Follow these instructions based on your operating system:

#### Windows

1. Ensure you have Python and Node.js installed on your system.

2. Download the ZIP file provided to you and extract it to a location of your choice.

3. In the extracted folder, locate the `setup.sh` file, right-click it, and select "Run with PowerShell." This will execute the setup script.

4. The script will automatically install dependencies and start the backend and frontend servers.

5. Open your web browser and navigate to http://localhost:3000 to use the Twitt Generator.

#### macOS and Linux

1. Ensure you have Python and Node.js installed on your system.

2. Download the ZIP file provided to you and extract it to a location of your choice.

3. Open a terminal and navigate to the extracted folder.

4. Run the following command to make the setup script executable:
     ```shell
     chmod +x setup.sh
     ```
5. Run the setup script using the following command:
     ```shell
     ./setup.sh
     ```
    - The script will automatically install dependencies and start the backend and frontend servers.

    - Open your web browser and navigate to http://localhost:3000 to use the Twitt Generator.

**Additional Notes:**

- To stop the backend and frontend servers, you can use Ctrl+C in the respective terminal/command prompt windows.


Happy tweeting!

# tweet_generator
