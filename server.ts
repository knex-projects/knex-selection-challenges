import "dotenv/config";
import app from "./src/app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando no link http://localhost:${PORT}/`);
});
