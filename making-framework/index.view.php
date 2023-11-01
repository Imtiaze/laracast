<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books</title>
</head>
<body>

    <ul>
        <?php
            foreach ($books as $key => $value) {
                ?>
                    <li><?php echo $value['name']; ?></li>
                <?php
            }
        ?>
        
    </ul>


</body>
</html>