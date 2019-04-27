### HTML 标签

## attribute 值没有引号能否正常渲染？

**MDN** 中描述到：

><strong>注：</strong>不包含 ASCII 空格（以及 `"`， `'`， `` ` ``， `=`， `<`， `>` ）的简单属性值可以不使用引号，但是建议将所有属性值用引号括起来，这样的代码一致性更佳，更易于阅读。

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

![效果图](https://github.com/tjx666/FE-Getting-Started/blob/master/HTML/element/screenshots/rendering-no-quotation.png?raw=true)

## HTML 中标签名大小写有什么影响？

**MDN** 描述到：

><strong>注：</strong>HTML 标签不区分大小写。也就是说，输入标签时既可以使用大写字母也可以使用小写字母。例如，标签 [<title>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title) 写作`<title>`、`<TITLE>`、`<Title>`、`<TiTlE>`，等等都可以正常工作。不过，从一致性、可读性等各方面来说，最好仅使用小写字母。

**测试代码：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .test {
            color: coral;
            font-weight: bold;
            font-size: 18px;
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>小写的一级标题(h1)</h1>
    <BR/>
    <H1>大写的一级标题(H1)</H1>
    &NBSP; <B><u>这是重点，圈起来，要考的。</u></B>
    <span CLASS="test">测试 attribute name 大小写影响</span>
</body>
</html>
```

![测试结果](https://github.com/tjx666/FE-Getting-Started/blob/master/HTML/element/screenshots/tag-name-case.png?raw=true)

上面的测试结果表明，标签名的大小写对其渲染结果没有影响的，但是转码字符比如 `&nbsp;`不会正常工作。其实，浏览器在解析 HTML 标签时会将标签名，属性名都转换为小写。如果想要分隔单词建议使用中划线的方式，比如一个类名`light-green`。**因为我觉得使用小驼峰风格的标识符总给人大小写有区别的错觉。**

