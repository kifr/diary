import express from "express";
import Contents from "../../models/contents";

const router = express.Router();

router.get("/api/getDiaryContents/:date", (req: express.Request, res: express.Response) => {
  Contents.findOne({ date: req.params.date }, (err, result) => {
    if (err) throw new Error(err);
    if (result) {
      res.end(JSON.stringify({
        title: result.title,
        body: result.body
      }));
    } else {
      res.json({});
    }
  });
});

router.post("/api/createDiary", (req: express.Request, res: express.Response) => {
  const { date, title, body } = req.body;
  Contents.findOne({ date }, (err, result) => {
    if (err) throw new Error(err);
    if (result) {
      Contents.updateOne({ date },{ $set: { title, body} }, (err: string) => {
        if (err) throw new Error(err);
        res.send();
      });
    } else {
      Contents.create({ date, title, body }, (err: string) => {
        if (err) throw new Error(err);
        res.send();
      });
    }
  });
});

router.post("/api/deleteDiary/:date", (req: express.Request, res: express.Response) => {
  Contents.deleteOne({ date: req.params.date }, (err: string) => {
    if (err) throw new Error(err);
    res.send();
  });
});

export default router;