import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  documents: {
    Acedmics: { type: String, required: true },
    'Co-curricular': { type: String, required: true },
    'Extra-curricular': { type: String, required: true },
    Sports: { type: String, required: true },
    Other: { type: String, required: true },
  },
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Activity', activitySchema);
