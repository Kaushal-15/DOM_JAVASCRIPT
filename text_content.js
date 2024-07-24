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
    console.log(menu.textContent);/*in textcontent it dispalys all the text no mateer css properties*/
    console.log(menu.innerHTML);/*it does not dispaly css property elements*/
menu.textContent = "HELLO CODER'S";//it will remove all other elements and only display the textcontent text//

    </script>
</body>
</html> 
