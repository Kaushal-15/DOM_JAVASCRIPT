<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 <div class="text">
    <p>PARAGRAPH 1</p>
    <p class="second">PARAGRAPH 2</p>
    <p>PARAGRAPH 3</p>
    <p>PARAGRAPH 4</p>
 </div>
    <script>
        let second = document.querySelector(".second")
let txt = document.querySelector(".text");
console.log(txt.firstChild);
console.log(txt.firstElementChild);
console.log(txt.lastElementChild);
console.log(txt.childNodes);
console.log(second.previousElementSibling);
console.log(second.nextElementSibling); 
console.log(second.previousSibling);
    </script>
</body>
</html>         
