<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1 class="class">First heading</h1>
<div id="container">
<h1 class="class">second heading</h1>
<h1 class="class">third heading</h1>
</div>
    <script>

let div = document.querySelectorAll("div ,h1"); /*here we can we also use # for id and also class but with css selector */
console.log(div);
        let hi = document.querySelectorAll  (".class");
        console.log(hi);
    </script>
</body>
</html>         
