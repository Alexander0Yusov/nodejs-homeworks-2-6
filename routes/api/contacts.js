const express = require("express");
const ctrls = require("../../controllers/contacts");

const router = express.Router();
const { validateBody, isValidId } = require("./../../middlewares");
const {
  addSchema,
  putSchema,
  updateFavoriteSchema,
} = require("./../../schemas/contacts");

router.get("/", ctrls.getAll);

router.get("/:contactId", isValidId, ctrls.getById);

router.post("/", validateBody(addSchema), ctrls.add);

router.delete("/:contactId", isValidId, ctrls.deleteById);

router.put("/:contactId", isValidId, validateBody(putSchema), ctrls.updateById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrls.updateStatusContact
);

module.exports = router;
