const {
  analystFeel,
  analystSoldInteractive,
  analystSoldInteractiveDB,
} = require("../controllers/index");
const router = require("express").Router();

router.post("/sentimientos", analystFeel);
router.post("/botintreactivodb", analystSoldInteractiveDB);
router.post("/botinteractivo", analystSoldInteractive);

module.exports = router;
