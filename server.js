const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from public folder

// MongoDB connection
mongoose.connect('mongodb+srv://dasun:dasun123@attendance.ywzrbgx.mongodb.net/Record', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err));

// Schemas
const studentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true }
});

const recordSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  attendances: [{
    studentId: { type: String, required: true },
    studentName: { type: String, required: true },
    status: { type: String, required: true }
  }]
});

const Student = mongoose.model('Student', studentSchema, 'student');
const Record = mongoose.model('Record', recordSchema, 'attendance');

// Routes
// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add student
app.post('/api/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete student
app.delete('/api/students/:id', async (req, res) => {
  try {
    await Student.findOneAndDelete({ id: req.params.id });
    // Remove from all attendance records
    await Record.updateMany({}, { $pull: { attendances: { studentId: req.params.id } } });
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all records or filter by date
app.get('/api/records', async (req, res) => {
  try {
    const { date } = req.query;
    let query = {};
    if (date) {
      query.date = date;
    }
    const records = await Record.find(query);
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add record (attendance for a date)
app.post('/api/records', async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete records for a date
app.delete('/api/records/:date', async (req, res) => {
  try {
    await Record.deleteMany({ date: req.params.date });
    res.json({ message: 'Records deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reset all
app.delete('/api/reset', async (req, res) => {
  try {
    await Student.deleteMany({});
    await Record.deleteMany({});
    res.json({ message: 'All data reset' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});