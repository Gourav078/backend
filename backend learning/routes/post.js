const exp = require ("express");
const router = exp.Router();

const {signin,signup} = require ("../controllers/post");

router.post("/signup",signup);
router.post("/signin", signin);

module.exports = router;