### HTML 标签

## attribute 值没有引号能否正常渲染？

MDN 中描述到：

>**注：**不包含 ASCII 空格（以及 `"` `'` ``` `=` `<` `>` ）的简单属性值可以不使用引号，但是建议将所有属性值用引号括起来，这样的代码一致性更佳，更易于阅读。

经过我的测试也是可行的：

**测试代码：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>element</title>
    <style>
        .no-quotation-attr {
            color: purple;
            font-style: italic;
        }
    </style>
</head>
<body>
    <p class=no-quotation-attr>attribute 值如果没有特殊字符可以不用双引号括起来</p>
</body>
</html>
```

**效果：**

![效果图](https://github.com/tjx666/FE-Getting-Started/blob/master/notes/HTML/element/screenshots/rendering-no-quotation.png?raw=true)

