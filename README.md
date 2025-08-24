# Success Mantra Institute Website

A complete website for Success Mantra Institute featuring student registration, course information, and institute details.

## Features

### Frontend (React + TypeScript + Tailwind CSS)
- **Multi-page Application**: Home, About, Courses, Registration, Contact
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Student Registration Form**: Complete form with validation and file upload
- **Modern UI/UX**: Professional design with smooth animations
- **Course Information**: Detailed academic and competitive exam courses
- **Director Profile**: Comprehensive information about institute leadership

### Backend (Express.js + SQLite)
- **RESTful API**: Clean and organized API endpoints
- **File Upload**: Photo upload functionality with validation
- **Data Validation**: Comprehensive server-side validation
- **Database Operations**: CRUD operations for student management
- **Error Handling**: Robust error handling and logging

### Database (SQLite - easily portable to SQL Server)
- **Student Management**: Complete student information storage
- **Data Integrity**: Constraints and validation at database level
- **Indexing**: Optimized queries with proper indexing
- **Sample Data**: Pre-populated test data for development

## Project Structure

```
├── src/                          # React frontend source
│   ├── components/              # Reusable components
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── pages/                  # Page components
│   │   ├── Home.tsx           # Home page
│   │   ├── About.tsx          # About page
│   │   ├── Courses.tsx        # Courses page
│   │   ├── Registration.tsx   # Registration form
│   │   └── Contact.tsx        # Contact page
│   ├── App.tsx                # Main app component with routing
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles with Tailwind
├── server/                    # Express backend
│   ├── index.js              # Main server file
│   ├── database.sql          # Database schema and sample data
│   └── uploads/              # Photo upload directory
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## Installation & Setup

1. **Clone and Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Servers**
   ```bash
   npm run dev
   ```
   This starts both frontend (port 5173) and backend (port 3001) simultaneously.

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001/api

## API Endpoints

### Registration
- **POST /api/register**: Register new student
  - Body: FormData with all student information
  - File upload: 'photo' field (optional, max 2MB)
  - Response: Success/failure with student ID

### Student Management
- **GET /api/students**: Get all registered students
- **GET /api/students/:id**: Get specific student by ID

### Health Check
- **GET /api/health**: Server health status

## Database Schema

### Students Table
```sql
- id: INTEGER PRIMARY KEY AUTOINCREMENT
- firstName: TEXT NOT NULL
- lastName: TEXT NOT NULL  
- aadhar: TEXT NOT NULL (12 digits)
- fatherName: TEXT NOT NULL
- address: TEXT NOT NULL
- mobile: TEXT NOT NULL (10 digits)
- photoPath: TEXT (optional)
- medium: TEXT NOT NULL ('CBSE' | 'UP Board')
- class: TEXT NOT NULL ('1' to '12')
- competitiveExam: TEXT (optional)
- createdAt: DATETIME DEFAULT CURRENT_TIMESTAMP
```

## Form Validation

### Frontend Validation
- Required field validation
- Aadhar number format (12 digits)
- Mobile number format (10 digits)
- File size validation (max 2MB)
- File type validation (images only)

### Backend Validation
- All frontend validations repeated on server
- SQL injection prevention
- File upload security checks
- Data sanitization

## Technologies Used

### Frontend Stack
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Modern icon library

### Backend Stack
- **Express.js**: Web application framework
- **SQLite3**: Embedded database (easily portable to SQL Server)
- **Multer**: File upload middleware
- **CORS**: Cross-origin resource sharing

### Development Tools
- **Vite**: Fast build tool and dev server
- **ESLint**: Code linting and formatting
- **Concurrently**: Run multiple commands simultaneously

## Deployment Considerations

### Production Setup
1. **Environment Variables**: Configure database connection strings
2. **File Storage**: Set up proper file storage (AWS S3, etc.)
3. **Database Migration**: Convert from SQLite to SQL Server if needed
4. **Security**: Add authentication, rate limiting, HTTPS
5. **Monitoring**: Add logging, error tracking, performance monitoring

### SQL Server Migration
The included `database.sql` file contains both SQLite and SQL Server schemas. For production:

1. Create SQL Server database
2. Run the SQL Server schema from the comments in `database.sql`
3. Update database connection in `server/index.js`
4. Install `mssql` package instead of `sqlite3`

## Sample Data

The system includes pre-populated sample data:
- 5 sample student records
- Covers different classes and exam types
- Demonstrates all form fields and data types

## Security Features

- **Input Validation**: Comprehensive validation on both client and server
- **File Upload Security**: Type and size restrictions
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Data sanitization
- **CORS Configuration**: Controlled cross-origin access

## Performance Optimizations

- **Database Indexing**: Optimized queries with proper indexes
- **Image Optimization**: File size limits and compression
- **Lazy Loading**: Components loaded on demand
- **Caching**: Static asset caching
- **Bundle Optimization**: Tree shaking and code splitting

This is a production-ready application that can be easily deployed and scaled for a real coaching institute.