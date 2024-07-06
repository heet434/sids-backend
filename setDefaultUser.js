import bcrypt from 'bcrypt';
import {User} from './models/userSchema.js';

const createDefaultUsers = async () => {
  try {
    const users = [
      {
        userName: 'username',
        password: '1234',
        role: 'user',
      },
      {
        userName: 'doctor',
        password: '1234',
        role: 'doctor',
      },
    ];

    for (const user of users) {
      const existingUser = await User.findOne({ userName: user.userName });
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = new User({
          userName: user.userName,
          password: hashedPassword,
          role: user.role,
        });
        await newUser.save();
        console.log(`User ${user.userName} created successfully.`);
      } else {
        console.log(`User ${user.userName} already exists.`);
      }
    }
  } catch (error) {
    console.error('Error creating default users:', error);
  }
};

export default createDefaultUsers;