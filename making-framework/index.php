<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
        $books = [
            [
                'name' => 'Ami topu',
                'author' => 'Jafar Ekbal',
                'publish_date' => '2006',
                'purchase_url' => 'example.com'
            ],
            [
                'name' => 'Sonkhonil Karagar',
                'author' => 'Humayun Ahmed',
                'publish_date' => '1996',
                'purchase_url' => 'example.com'
            ],
            [
                'name' => 'Gitanjali',
                'author' => 'Robi thakur',
                'publish_date' => '1913',
                'purchase_url' => 'example.com'
            ],
            [
                'name' => 'Mostisker malikan',
                'author' => 'Kaji Hayat',
                'publish_date' => '2022',
                'purchase_url' => 'example.com'
            ],
        ];

        $books = array_filter($books, function($book) {
            return $book['publish_date'] > 2000;
        });

    ?>


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