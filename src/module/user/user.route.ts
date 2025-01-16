import express from 'express';
import { UserController } from './user.controller';
import { upload } from '../../utils/multerUtils';
const router = express.Router();

router.post('/upload', upload.array('images'), UserController.createUser);
router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
