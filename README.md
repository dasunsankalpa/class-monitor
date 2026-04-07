# ClassTrack Attendance System

A modern, web-based attendance tracking system built with Node.js, Express, and MongoDB Atlas. Features a responsive UI with dark mode support, timezone handling for Sri Lanka, and comprehensive student management.

## 🌟 Features

- **Student Management**: Add, edit, and remove students with roll numbers
- **Attendance Tracking**: Mark daily attendance with intuitive checkboxes
- **Date Navigation**: Browse attendance records by date with a calendar picker
- **Dark Mode**: Toggle between light and dark themes
- **Timezone Support**: Automatically handles Sri Lanka timezone (UTC+5:30)
- **Data Persistence**: All data stored securely in MongoDB Atlas
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Instant UI updates without page refresh

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (free tier available)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/classtrack.git
   cd classtrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
classtrack/
├── server.js              # Express server and API endpoints
├── package.json           # Dependencies and scripts
├── public/
│   └── index.html         # Frontend application
├── node_modules/          # Dependencies (auto-generated)
└── README.md             # This file
```

## 🔧 API Endpoints

### Students
- `GET /api/students` - Get all students
- `POST /api/students` - Add new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Attendance
- `GET /api/attendance/:date` - Get attendance for specific date
- `POST /api/attendance` - Save attendance record
- `DELETE /api/attendance/:date` - Delete attendance record

## 🌐 Deployment

### AWS Lightsail Deployment

1. **Launch Lightsail Instance**
   - Choose Ubuntu 22.04 LTS
   - Select appropriate instance plan

2. **Connect to Instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/classtrack.git
   cd classtrack
   ```

5. **Install Dependencies**
   ```bash
   npm install
   ```

6. **Configure Environment**
   ```bash
   nano .env
   ```
   Add your MongoDB Atlas URI and set PORT=80 or 443 for production.

7. **Install PM2 for Process Management**
   ```bash
   sudo npm install -g pm2
   pm2 start server.js --name classtrack
   pm2 startup
   pm2 save
   ```

8. **Configure Firewall**
   - In Lightsail console, allow ports 80, 443, and 22

9. **Set up Domain (Optional)**
   - Point your domain DNS to the Lightsail instance IP
   - Use certbot for SSL if needed

## 🛠️ Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Date Picker**: Flatpickr
- **Icons**: Font Awesome

## 📝 Usage

1. **Adding Students**: Click "Add Student" and enter name and roll number
2. **Marking Attendance**: Select date, check present students, click "Save Attendance"
3. **Viewing Records**: Use date picker to navigate to different dates
4. **Managing Students**: Use edit/delete buttons in student list
5. **Theme Toggle**: Click moon/sun icon to switch themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or issues, please open an issue on GitHub.