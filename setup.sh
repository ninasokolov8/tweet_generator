#!/bin/bash

echo "Welcome to the Twitt Generator Project Setup Script"

# Function to handle errors
handle_error() {
    echo "Error: $1"
    exit 1
}

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Detect the operating system
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="Linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macOS"
elif [[ "$OSTYPE" == "msys"* ]]; then
    OS="Windows"
else
    handle_error "Unsupported operating system."
fi

# Change to the 'backend' directory
cd "$SCRIPT_DIR/backend" || handle_error "Error changing to 'backend' directory."

# Install Python dependencies
pip install -q -r requirements.txt --upgrade || handle_error "Error installing Python dependencies."

# Run the backend server in the background
python run.py > backend.log 2>&1 &

# Sleep for a moment to ensure backend is running before proceeding
sleep 5

# Change to the 'frontend' directory
cd "$SCRIPT_DIR/frontend" || handle_error "Error changing to 'frontend' directory."

# Install Node.js dependencies
npm install || handle_error "Error installing Node.js dependencies."

# Start the frontend development server in the background
npm start &

# Provide instructions to the user
echo "The Twitt Generator backend and frontend servers are now running."
echo "You can access the frontend at http://localhost:3000 in your web browser."
echo "To stop the backend server, open a new terminal window/tab, navigate to the 'backend' directory, and run the following command:"
echo "pkill -f 'python run.py'"
echo "To stop the frontend server, use 'Ctrl+C' in the respective terminal or command prompt windows."

# Open the frontend in the default web browser
if [[ "$OS" == "Linux" || "$OS" == "macOS" ]]; then
    open http://localhost:3000 || handle_error "Error opening frontend in the web browser."
elif [[ "$OS" == "Windows" ]]; then
    start http://localhost:3000 || handle_error "Error opening frontend in the web browser."
fi

echo "Enjoy using the Twitt Generator!"

# Keep the script running
if [[ "$OS" == "Linux" || "$OS" == "macOS" ]]; then
    read -p "Press Enter to exit..."
elif [[ "$OS" == "Windows" ]]; then
    pause
fi
