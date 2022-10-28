/*
    Project:        Booklist Webapp
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/28/2022
    File:           index.js
*/

import { Router } from 'express';

let router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;