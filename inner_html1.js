<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id="menu">
        <li>name</li>
        <li>address</li>
        <li style="display: block;">age</li>
    </ul>
    <script>
    let menu = document.getElementById("menu");
menu.textContent = "<h1>HELLO CODER'S</h1>";//it will display the h1 tag also because it doesnt accept the html tags //
console.log(menu.textContent);
menu.innerHTML = "<h1>HELLO CODER'S</h1>";//but it is reverse in innerhtml tag it accepts the html tag and displays the h1 //
    </script>
</body>
</html> 
