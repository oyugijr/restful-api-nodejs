// const express = require("express");
// const { register, login } = require("../controllers/auth.controller");

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// module.exports = router;

const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

module.exports = router;
