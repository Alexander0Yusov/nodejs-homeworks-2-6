const express = require("express");
const ctrls = require("../../controllers/users");

const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  userRegisterLoginSchema,
  userSubscriptionSchema,
} = require("../../schemas/users");

const router = express.Router();

router.post("/register", validateBody(userRegisterLoginSchema), ctrls.register);

router.post("/login", validateBody(userRegisterLoginSchema), ctrls.login);

router.get("/current", authenticate, ctrls.getCurrent);

router.post("/logout", authenticate, ctrls.logout);

router.patch(
  "/subscription",
  authenticate,
  validateBody(userSubscriptionSchema),
  ctrls.update
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrls.updateAvatar
);

module.exports = router;
