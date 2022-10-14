import mongoose from "mongoose";

const DB = process.env.DATABASE!.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD!
);

const connectMongo = async () => {
  mongoose.connect(DB, {dbName: 'acre'
});
  mongoose.connection.useDb("acre");
};

export default connectMongo;
