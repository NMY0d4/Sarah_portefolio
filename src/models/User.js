import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export const User = models?.User || model('User', userSchema);
