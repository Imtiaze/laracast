<?php

$url = parse_url($_SERVER['REQUEST_URI'])['path'];

$route = [
    '/' => 'controllers/index.php',
    '/contact' => 'controllers/contact.php',
    '/about' => 'controllers/about.php',
];


function routeToController($url, $route)
{
    if (array_key_exists($url, $route)) {
        require $route[$url];
    } else {
        abort(404);
    }
}

function abort($errorCode = 404)
{
    http_response_code($errorCode);

    if (file_exists("views/errors/{$errorCode}.view.php")) {
        require "views/errors/{$errorCode}.view.php";
    } else {
        require "views/errors/404.view.php";
    }
    
    die();
}

routeToController($url, $route);