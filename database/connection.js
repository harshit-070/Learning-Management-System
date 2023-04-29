import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }

  console.log("Connecting with mongodb");
  setTimeout(() => {
    if (connection.isConnected) {
      console.log("Connected to database");
    }
    console.log("Not Connected");
  }, 5000);
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
}

async function disconnect() {
  if (connection.isConnected) {
    await mongoose.disconnect();
    connection.isConnected = false;
    console.log("MongoDB Disconnected");
  }
}

export default { connect, disconnect };
