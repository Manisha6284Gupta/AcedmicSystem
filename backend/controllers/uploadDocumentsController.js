import Activity from '../models/uploadDocumentModel.js';

export const uploadDocumentsController = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const files = req.files;

    if (
      !files['Acedmics'] ||
      !files['Co-curricular'] ||
      !files['Extra-curricular'] ||
      !files['Sports'] ||
      !files['Other']
    ) {
      return res.status(400).json({ error: 'All document types must be uploaded' });
    }

    const newActivity = new Activity({
      userId,
      documents: {
        Acedmics: files['Acedmics'][0].filename,
        'Co-curricular': files['Co-curricular'][0].filename,
        'Extra-curricular': files['Extra-curricular'][0].filename,
        Sports: files['Sports'][0].filename,
        Other: files['Other'][0].filename,
      },
    });

    await newActivity.save();

    res.status(201).json({ message: 'Documents uploaded successfully' });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Server error while uploading documents' });
  }
};
