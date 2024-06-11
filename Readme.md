# Anonymous Messaging Platform

Welcome to the Anonymous Messaging Platform! This is a web application that allows users to send and receive messages anonymously. This README file provides an overview of the project, installation instructions, usage guidelines, and more.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Send messages anonymously
- Receive messages from other users anonymously
- Real-time messaging
- User-friendly interface
- Secure and private communication

## Demo

A live demo of the application is available at: [Live Demo](https://mstrymessage.onrender.com)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mrkeshav-05/MstryMessage
    cd backend
    cd chat_app_frontend
    ```

2. **Install dependencies:**
in both the folders backend and chat_app_frontend
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    PORT='8000'
    
    MONGO_DB_URL=mongodbURI
    JWT_SECRET_KEY=secretkey
    JWT_EXPIRATION=anytime
    NODE_ENV="development"
    ```

4. **Start the development server:**
    for starting the server
    ```sh
    npm run server
    ```
    for starting the frontend
    ```sh
    npm run dev
    ```

5. **Open your browser:**
    Navigate to `http://localhost:3000` to see the application in action.

## Usage

1. **Register/Login:**
    - Users can register or log in to start messaging.
    - No personal information is required for registration.

2. **Send Messages:**
    - Users can send messages anonymously to the platform.
    - Messages are displayed in real-time.

3. **Receive Messages:**
    - Users can receive messages from others anonymously.
    - All messages are displayed in a chronological order.

## Configuration

- **Database:**
    - This application uses MongoDB for storing messages.
    - Configure your MongoDB URI in the `.env` file.

- **Sessions:**
    - Sessions are used to manage user sessions.
    - Configure your session secret in the `.env` file.

## Technologies Used

- **Frontend:**
    - Vite+React
    - Tailwind CSS
    - DaisyUI (Tailwind CSS components)
    - Socket.io-client

- **Backend:**
    - Node.js
    - Express.js
    - Socket.io

- **Database:**
    - MongoDB

- **Others:**
    - Socket.io (for real-time messaging)
    - dotenv (for environment variables)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or feedback,
