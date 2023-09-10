import express from "express";

const app = express();

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Both slack_name and track parameters are required.' });
  }

  const data = {
    slack_name,
    current_day: new Date().toLocaleString("en-US", { weekday: "long" }),
    utc_time: new Date().toISOString().slice(0, 19) + 'Z',
    track,
    github_file_url: "https://github.com/sheddyboy/hngx-stage1-backend/blob/master/index.js",
    github_repo_url: "https://github.com/sheddyboy/hngx-stage1-backend",
    status_code: 200
  };

  return res.status(200).json(data)
});

app.listen(3000,()=>{
    console.log("Server running")
})
