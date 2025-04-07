import express from 'express';
import { uploadDocuments } from '../middlewares/uploadDocumentMiddleware';
import { uploadDocumentsController } from '../controllers/uploadDocumentController.js';

const router = express.Router();

router.post('/upload-documents', uploadDocuments, uploadDocumentsController);

export default router;
