import express from "express";
import fs from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const _dirname = dirname(fileURLToPath(import.meta.url));

console.log(_dirname + "/data/message.json");

const passwordVerify = "heloo.";

const app = express();

function check(req, res, next) {
  console.log("url", req.method);

  next();
}

router.use(express.urlencoded({ extended: true }));
router.use(check);

router.post("/password", async (req, res) => {
  try {
    const password = req.body.password;
    const body = JSON.stringify(req.body);

    if (password.trim().length === 6) {
      console.log("length");
    } else return;

    if (password === passwordVerify) {
      const writeFile = await fs.writeFile("./data/message.json", body);
      res.send("success");
      return;
    }
    console.log("not matched");
    res.send("error");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
