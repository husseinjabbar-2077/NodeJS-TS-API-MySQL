import { Router } from 'express';

const router = Router();

// تعريف الراوترات المختلفة

import utils from "./app/utils";

router.use("/", utils);

export default router;
