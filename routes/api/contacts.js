const express = require("express");
const ctrls = require("../../controllers/contacts");

const router = express.Router();
const { validateBody } = require("./../../middlewares");
const { addSchema, putSchema } = require("./../../schemas/contacts");

router.get("/", ctrls.getAll);

router.get("/:contactId", ctrls.getById);

router.post("/", validateBody(addSchema), ctrls.add);

router.delete("/:contactId", ctrls.deleteById);

router.put("/:contactId", validateBody(putSchema), ctrls.updateById);

module.exports = router;
