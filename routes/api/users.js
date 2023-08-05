const express = require("express");
const ctrls = require("../../controllers/users");

const { validateBody, authenticate } = require("../../middlewares");
const { userJoiSchema, userPatchSchema } = require("../../schemas/users");

const router = express.Router();

router.post("/register", validateBody(userJoiSchema), ctrls.register);

router.post("/login", validateBody(userJoiSchema), ctrls.login);

router.get("/current", authenticate, ctrls.getCurrent);

router.post("/logout", authenticate, ctrls.logout);

router.patch(
  "/subscription",
  authenticate,
  validateBody(userPatchSchema),
  ctrls.update
);

module.exports = router;
