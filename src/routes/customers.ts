import { createCustomerController } from "../controllers/createCustomer";

const express = require('express');

const router = express.Router();

console.log('Customer route');

router.post('/', createCustomerController);

module.exports = router;