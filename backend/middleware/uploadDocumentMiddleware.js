import multer from 'multer';
import path from 'path';

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

// File filter to accept only PDFs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed'), false);
  }
};

// Upload middleware
export const uploadDocuments = multer({
  storage,
  fileFilter,
}).fields([
  { name: 'Acedmics', maxCount: 1 },
  { name: 'Co-curricular', maxCount: 1 },
  { name: 'Extra-curricular', maxCount: 1 },
  { name: 'Sports', maxCount: 1 },
  { name: 'Other', maxCount: 1 },
]);
