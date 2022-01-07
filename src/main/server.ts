import mongoose from "mongoose";

(async () => {
  mongoose.connect("mongodb://localhost:27017/tractors");
  const { setupApp } = await import("./config/app");
  const app = await setupApp();
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
})();
