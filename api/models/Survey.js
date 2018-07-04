import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    id: Schema.Types.ObjectId,
    author: String,
    name: String,
    description: String,
    fields: [
        {
            fieldType: String,
            fieldTitle: String,
            options: [{ id: Schema.Types.ObjectId, label: String }]
        }
    ],
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date }
});

export default mongoose.model('Survey', SurveySchema);
