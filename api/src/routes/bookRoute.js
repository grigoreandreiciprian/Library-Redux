import express from'express'
import { getAll , deleteBook,addBook ,updateBook,getById} from '../controllers/bookController.js';


const router=express.Router();



router.route("/").get(getAll);

router.route("/:id").delete(deleteBook)

router.route("/").post(addBook)

router.route("/:id").put(updateBook)

router.route("/:id").get(getById)

 



export default router;