const express = require("express");//express runs http server
const cors = require("cors");//helps to call the server with any other origin
//in frontend part remove reactstrict mode because it doesn't work good with web sockets or chat apps
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r=await axios.put(
        'https://api.chatengine.io/users/',
        {
            username: username,
            secret: username,
            first_name:username
        },
        {
            headers:{
                "private-key":process.env.PRIVATE_KEY
            }
        }
        
    )
    return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(error.response.status).json(error.response.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);