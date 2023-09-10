import express from "express";

const app = express();

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  if (!slackName || !track) {
    return res.status(400).json({ error: 'Both slack_name and track parameters are required.' });
  }

  const data = {
    slackName,
    dayOfWeek: new Date().toLocaleString("en-US", { weekday: "long" }),
    utcTime: new Date().toISOString(),
    track,
    githubFileURL: "https://github.com/sheddyboy/hngx-stage1-backend/blob/master/index.js",
    githubSourceURL: "https://github.com/sheddyboy/hngx-stage1-backend",
    status_code: 200
  };

  return res.status(200).json(data)
});

app.listen(3000,()=>{
    console.log("Server running")
})
