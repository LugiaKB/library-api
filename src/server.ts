import app from "./app";
import connectDB from "./app/database/connection";

const PORT: number = 4000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
