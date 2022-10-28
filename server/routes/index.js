/*
    Project:        Booklist Webapp
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/28/2022
    File:           index.js
*/

// imports
import { Router } from 'express';
import {DisplayHomePage} from '../controllers/index.js';

let router = Router();

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

// exports
export default router;