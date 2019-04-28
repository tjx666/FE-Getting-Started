# 测试行内（内联）元素和块级元素

## 块级元素的特征

1. 块级元素单独占一行，块级元素本身和后面的元素会另起一行
2. 可以设置盒子模型的所有属性，`width`，`height`，`border`，`padding`，`margin` 等
3. 默认宽度为父元素的宽度，默认高度为内部内容的高度
4. 块级元素可以嵌套块级元素，行内元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>测试块级元素</title>
    <style>
        .block-element-out {
            box-sizing: border-box;
            width: 400px;
            height: 200px;
            margin: 50px auto;
            border: 1px solid blue;
        }

        .block-element-inner {
            box-sizing: border-box;
            border: 1px solid yellow;
        }
    </style>
</head>

<body>
    <em>----------------------------------------块级元素前的行内元素----------------------------------------</em>
    <div class="block-element-out">
        <div class="block-element-inner">
            <span>块级元素 div 另起一行，包含一个行内元素 span。</span>
        </div>
    </div>
    <em>----------------------------------------块级元素后的行内元素----------------------------------------</em>
</body>

</html>
```

![块级元素测试截图](https://github.com/tjx666/FE-Getting-Started/blob/master/HTML/inline-block-element/screenshots/block-element.png?raw=true)

## 行内元素的特征

1. 内联元素如果前后是内联元素会排列在同一行，直到一行排不下才会换行
2. 设置 `width`，`height`，垂直方向的 `margin` 和`padding`都是无效的。但是，垂直方向的 padding 相对于元素自身来说是有效的。
3. 宽度默认不会自适应父元素宽度。
4. 行内元素标准是说不能包含块级元素。但实际上测试是可以包含的，效果上内部的块级元素会单独占一行。

**测试内联元素的核心代码：**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>测试内联元素</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .inline-element {
            width: 1000px;
            height: 500px;
            margin: 100px 20px;
            padding: 100px 100px;
            line-height: 100px;
            background-color: lightcoral;
            opacity: .5;
        }

        .test-vertical-padding-in-inline-element {
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <p>行内元素显示在同一行 => <span><span>价格:</span><i>18元</i></span></p>
    <p><b><del><u><span>一个行内元素 span，可以不断被其它元素嵌套</span></u></del></b></p>
    <p class="test-vertical-padding-in-inline-element">
        <span>这是上面的文字，不受下面 span 垂直方向的 padding 影响。内联元素的 margin 和 padding 只有水平方向才会对其它元素起作用。</span><br />
        <span>左边的文字，右边文字的 margin-left 和 padding-left 起作用了。</span><span class="inline-element">测试 span
            的盒子模型属性，width和height 不起作用。</span>
    </p>
    <form>
        <div class="form-control">
            <label for="email" id="email">邮箱：</label>
            <input type="email">
            <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
            <button>提交</button><button>重置</button>
        </div>
    </form>
</body>

</html>
```

![行内元素测试截图](https://github.com/tjx666/FE-Getting-Started/blob/master/HTML/inline-block-element/screenshots/inline-element.png?raw=true)

**测试块级元素在行内元素中的表现：**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>块级元素在内联元素中时会怎么样？</title>
    <style>
        .container1 {
            width: 560px;
            height: 240px;
            margin: 20px auto;
            border: 2px solid lightsalmon;
        }

        .container2 {
            width: 560px;
            height: 240px;
            margin: 10px auto;
            border: 2px solid lightsalmon;
        }

        .span-out-of-div,
        .span2 {
            margin-left: 20px;
            padding-top: 20px;
            background-color: lightpink;
        }

        .div-in-span,
        .div2 {
            width: 100px;
            height: 50px;
            background-color: cornflowerblue;
        }
    </style>
</head>

<body>
    <div class="container1">
        <span class="span-out-of-div">
            span 中的文本
            <div class="div-in-span">div 中的文本</div>
            div 后面的文本
        </span>
    </div>
    <div class="container2">
        <span class="span2">span 中的文本</span>
        <div class="div2">div 中的文本</div>
        <span class="span2">div 后面的文本</span>
    </div>
</body>

</html>
```

![块级元素在行内元素中的表现](https://github.com/tjx666/FE-Getting-Started/blob/master/HTML/inline-block-element/screenshots/block-in-inline.png?raw=true)

