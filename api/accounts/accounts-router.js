const Accounts = require("./accounts-model");
const router = require("express").Router();
//middleware goes here
const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
} = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Accounts.getAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Accounts.getById(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      const data = await Accounts.create({
        name: req.body.name.trim(),
        budget: req.body.budget,
      });
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  checkAccountId,
  checkAccountPayload,
  async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      const data = await Accounts.updateById(req.params.id, req.body);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Accounts.deleteById(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
  next();
});

module.exports = router;
