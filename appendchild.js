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
        <li>age</li>
    </ul>
    <script>
    let menu = document.getElementById("menu");
  let list = document.createElement("li");
    list.innerHTML = "contact";
    menu.appendChild(list);
    </script>
</body>
</html> 
