/*
    Project:        Booklist Webapp
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/28/2022
    File:           index.js
*/

// Displays home page
export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}