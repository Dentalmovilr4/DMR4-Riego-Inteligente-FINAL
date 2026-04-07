export default async function handler(req, res) {
  const pregunta = req.body.pregunta;

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
            text: "Responde como experto en riego agrícola sencillo: " + pregunta
          }]
        }]
      })
    }
  );

  const data = await response.json();

  res.json(data);
}