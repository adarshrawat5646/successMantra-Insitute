const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'photo-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB limit
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Initialize SQLite database
const db = new sqlite3.Database('./students.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    
    // Create Students table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS Students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      aadhar TEXT NOT NULL,
      fatherName TEXT NOT NULL,
      address TEXT NOT NULL,
      mobile TEXT NOT NULL,
      photoPath TEXT,
      medium TEXT NOT NULL,
      class TEXT NOT NULL,
      competitiveExam TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Students table ready.');
        
        // Insert sample data
        insertSampleData();
      }
    });
  }
});

// Function to insert sample data
function insertSampleData() {
  const sampleStudents = [
    {
      firstName: 'Raj',
      lastName: 'Kumar',
      aadhar: '123456789012',
      fatherName: 'Ram Kumar',
      address: '123 Main Street, Delhi',
      mobile: '9876543210',
      photoPath: null,
      medium: 'CBSE',
      class: '10',
      competitiveExam: 'SSC CGL'
    },
    {
      firstName: 'Priya',
      lastName: 'Sharma',
      aadhar: '987654321098',
      fatherName: 'Suresh Sharma',
      address: '456 Park Avenue, Mumbai',
      mobile: '8765432109',
      photoPath: null,
      medium: 'UP Board',
      class: '12',
      competitiveExam: 'NDA'
    },
    {
      firstName: 'Amit',
      lastName: 'Singh',
      aadhar: '456789123456',
      fatherName: 'Rajesh Singh',
      address: '789 Garden Road, Lucknow',
      mobile: '7654321098',
      photoPath: null,
      medium: 'CBSE',
      class: '11',
      competitiveExam: 'UPSC Prelims'
    }
  ];

  // Check if data already exists
  db.get("SELECT COUNT(*) as count FROM Students", (err, row) => {
    if (err) {
      console.error('Error checking existing data:', err.message);
      return;
    }
    
    if (row.count === 0) {
      console.log('Inserting sample data...');
      
      const insertStmt = db.prepare(`INSERT INTO Students 
        (firstName, lastName, aadhar, fatherName, address, mobile, photoPath, medium, class, competitiveExam) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
      
      sampleStudents.forEach(student => {
        insertStmt.run([
          student.firstName,
          student.lastName,
          student.aadhar,
          student.fatherName,
          student.address,
          student.mobile,
          student.photoPath,
          student.medium,
          student.class,
          student.competitiveExam
        ], function(err) {
          if (err) {
            console.error('Error inserting sample data:', err.message);
          }
        });
      });
      
      insertStmt.finalize((err) => {
        if (err) {
          console.error('Error finalizing insert statement:', err.message);
        } else {
          console.log('Sample data inserted successfully!');
        }
      });
    } else {
      console.log('Sample data already exists, skipping insertion.');
    }
  });
}

// Registration endpoint
app.post('/api/register', upload.single('photo'), (req, res) => {
  console.log('Registration request received:', req.body);
  
  const {
    firstName,
    lastName,
    aadhar,
    fatherName,
    address,
    mobile,
    medium,
    class: studentClass,
    competitiveExam
  } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !aadhar || !fatherName || !address || !mobile || !medium || !studentClass) {
    return res.status(400).json({
      success: false,
      message: 'All required fields must be provided'
    });
  }

  // Validate Aadhar number (12 digits)
  const aadharRegex = /^\d{12}$/;
  if (!aadharRegex.test(aadhar.replace(/\s/g, ''))) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Aadhar number format'
    });
  }

  // Validate mobile number (10 digits)
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid mobile number format'
    });
  }

  const photoPath = req.file ? req.file.filename : null;

  // Insert student data into database
  const insertQuery = `INSERT INTO Students 
    (firstName, lastName, aadhar, fatherName, address, mobile, photoPath, medium, class, competitiveExam) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(insertQuery, [
    firstName,
    lastName,
    aadhar,
    fatherName,
    address,
    mobile,
    photoPath,
    medium,
    studentClass,
    competitiveExam || null
  ], function(err) {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({
        success: false,
        message: 'Registration failed. Please try again.'
      });
    }

    console.log('Student registered successfully with ID:', this.lastID);
    
    res.status(201).json({
      success: true,
      message: 'Registration successful! We will contact you soon.',
      studentId: this.lastID
    });
  });
});

// Get all students endpoint (for admin purposes)
app.get('/api/students', (req, res) => {
  const query = 'SELECT * FROM Students ORDER BY createdAt DESC';
  
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch students'
      });
    }

    res.json({
      success: true,
      students: rows
    });
  });
});

// Get student by ID endpoint
app.get('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Students WHERE id = ?';
  
  db.get(query, [id], (err, row) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch student'
      });
    }

    if (!row) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.json({
      success: true,
      student: row
    });
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size is 2MB.'
      });
    }
  }
  
  console.error('Server error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- POST /api/register - Student registration`);
  console.log(`- GET /api/students - Get all students`);
  console.log(`- GET /api/students/:id - Get student by ID`);
  console.log(`- GET /api/health - Health check`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT. Closing database connection...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});

module.exports = app;