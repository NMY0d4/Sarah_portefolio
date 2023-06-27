const { default: mongoose } = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
  } catch (error) {
    throw new Error('Connection failed!');
  }
};

export default connect;
