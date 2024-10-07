import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, 'Please add an age'],
      min: [0, 'Age cannot be negative'],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
