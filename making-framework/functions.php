<?php

function dd($value)
{
    echo "<pre>";
    var_dump($value);
    die();
}


function urlActive($url)
{
    return $_SERVER['REQUEST_URI'] === $url;
}
