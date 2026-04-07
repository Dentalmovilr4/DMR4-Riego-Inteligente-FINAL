export default async function handler(req, res) {
  try {
    const { pregunta } = req.body;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: "Responde como experto en riego agrícola en lenguaje sencillo campesino: " + pregunta
            }]
          }]
        })
      }
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
}