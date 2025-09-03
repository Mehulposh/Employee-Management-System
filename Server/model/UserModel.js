const {Schema, default: mongoose} = require("mongoose")

// Task subdocument schema
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Task date is required"],
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    description: {
      type: String,
      required: [true, "Task description is required"],
    },
    category: {
      type: String,
      required: [true, "Task category is required"],
    },
    status: {
      type: String,
      enum: ["newTask", "active", "completed", "failed"],
      default: "newTask",
    },
  },
  { timestamps: true }
);

// User schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    tasks: [taskSchema], // Embedded tasks

    // Task summary counts
    taskCount: {
      active: { type: Number, default: 0 },
      newTask: { type: Number, default: 0 },
      completed: { type: Number, default: 0 },
      failed: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);