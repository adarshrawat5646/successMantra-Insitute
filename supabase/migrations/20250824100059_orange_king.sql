/*
  # Success Mantra Institute Database Schema
  
  This script creates the database schema for the Student Management System.
  Adapted for SQLite but easily portable to SQL Server.
  
  ## Tables Created:
  1. Students - Main student registration table with all personal and academic information
  
  ## Features:
  - Primary key auto-increment
  - Required field constraints
  - Data type validation
  - Timestamp tracking
  - Photo path storage for uploaded images
*/

-- Create Students table
-- This table stores all student registration information
CREATE TABLE IF NOT EXISTS Students (
    -- Primary key with auto-increment
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    
    -- Personal Information (Required fields)
    firstName TEXT NOT NULL CHECK(length(firstName) > 0),
    lastName TEXT NOT NULL CHECK(length(lastName) > 0),
    aadhar TEXT NOT NULL CHECK(length(aadhar) = 12 AND aadhar GLOB '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    fatherName TEXT NOT NULL CHECK(length(fatherName) > 0),
    address TEXT NOT NULL CHECK(length(address) > 0),
    mobile TEXT NOT NULL CHECK(length(mobile) = 10 AND mobile GLOB '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    
    -- Photo storage path (optional)
    photoPath TEXT,
    
    -- Academic Information (Required fields)
    medium TEXT NOT NULL CHECK(medium IN ('CBSE', 'UP Board')),
    class TEXT NOT NULL CHECK(class IN ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12')),
    
    -- Competitive exam selection (optional)
    competitiveExam TEXT CHECK(competitiveExam IN (
        'SSC CGL', 'SSC CHSL', 'SSC MTS', 'IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk',
        'NDA', 'CDS', 'AFCAT', 'UPSC Prelims', 'UPSC Mains', 'State PSC'
    )),
    
    -- Timestamp for record creation
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_students_mobile ON Students(mobile);
CREATE INDEX IF NOT EXISTS idx_students_aadhar ON Students(aadhar);
CREATE INDEX IF NOT EXISTS idx_students_class ON Students(class);
CREATE INDEX IF NOT EXISTS idx_students_medium ON Students(medium);
CREATE INDEX IF NOT EXISTS idx_students_created_at ON Students(createdAt);

-- Sample data insertion
-- This data demonstrates the table structure and provides test records
INSERT OR IGNORE INTO Students (
    firstName, lastName, aadhar, fatherName, address, mobile, 
    photoPath, medium, class, competitiveExam
) VALUES 
(
    'Raj', 'Kumar', '123456789012', 'Ram Kumar', 
    '123 Main Street, Delhi, India - 110001', '9876543210',
    NULL, 'CBSE', '10', 'SSC CGL'
),
(
    'Priya', 'Sharma', '987654321098', 'Suresh Sharma',
    '456 Park Avenue, Mumbai, India - 400001', '8765432109',
    NULL, 'UP Board', '12', 'NDA'
),
(
    'Amit', 'Singh', '456789123456', 'Rajesh Singh',
    '789 Garden Road, Lucknow, India - 226001', '7654321098',
    NULL, 'CBSE', '11', 'UPSC Prelims'
),
(
    'Neha', 'Gupta', '321654987123', 'Manoj Gupta',
    '321 River View, Kanpur, India - 208001', '6543210987',
    NULL, 'UP Board', '9', NULL
),
(
    'Rohit', 'Verma', '654321098765', 'Ashok Verma',
    '654 Hill Station, Dehradun, India - 248001', '5432109876',
    NULL, 'CBSE', '12', 'Banking'
);

/*
  SQL Server Equivalent Schema:
  
  For production deployment on SQL Server, use this equivalent schema:
  
  CREATE TABLE Students (
      id INT IDENTITY(1,1) PRIMARY KEY,
      firstName NVARCHAR(50) NOT NULL,
      lastName NVARCHAR(50) NOT NULL,
      aadhar NCHAR(12) NOT NULL CHECK (aadhar LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
      fatherName NVARCHAR(100) NOT NULL,
      address NVARCHAR(500) NOT NULL,
      mobile NCHAR(10) NOT NULL CHECK (mobile LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
      photoPath NVARCHAR(255),
      medium NVARCHAR(20) NOT NULL CHECK (medium IN ('CBSE', 'UP Board')),
      class NVARCHAR(2) NOT NULL CHECK (class IN ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12')),
      competitiveExam NVARCHAR(50),
      createdAt DATETIME2 DEFAULT GETDATE()
  );
  
  CREATE INDEX IX_Students_Mobile ON Students(mobile);
  CREATE INDEX IX_Students_Aadhar ON Students(aadhar);
  CREATE INDEX IX_Students_Class ON Students(class);
  CREATE INDEX IX_Students_Medium ON Students(medium);
  CREATE INDEX IX_Students_CreatedAt ON Students(createdAt);
*/