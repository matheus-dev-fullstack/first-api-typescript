import { createCustomerController } from "../controllers/createCustomer";
import { getCustomersController } from "../controllers/getCustomers";

const express = require('express');

const router = express.Router();

console.log('Customer route');

router.get('/', getCustomersController);
router.post('/', createCustomerController);

module.exports = router;