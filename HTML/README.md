# HTML 相关的面试题

## 一、内联（行内）元素和块级元素有什么区别？HTMl 中的行内元素和块状元素分别有哪些？

### 区别

1. 排列方式

    行内元素会在一条直线上排列（默认宽度只与内容有关），都是同一行的，水平方向排列。

    块级元素各占据一行（默认宽度是它本身父容器的100%（和父元素的宽度一致），与内容无关），垂直方向排列。块级元素从新行开始，结束接着一个断行。

2. 包含关系

   块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素，只能包含文本或者其它行内元素。

3. 盒子模型属性

   行内元素设置 **width ** 无效，**height** 无效(可以设置 **line-height**)，**margin** 上下无效，**padding** 上下无效

### 转换

设置元素样式的 **display** 属性即可。

`display: block;` 将元素设为块级元素。

`display: inline;` 将元素设为行内元素。

`display: inline-block;` 设置元素为行内块状元素，可以解决行内元素不能设置上下`margin`，`padding`的问题，或者用于将块级元素排列在同一行。

### 块级元素和行内元素举例

> 块级元素：块级大多为结构性标记
>
> 行内元素：行内大多为描述性标记，表单输入元素大多为行内元素。
>
> 其实你只要想想标签代表的语义该不该单独占一行，或者平时看的网页实际情况有没有单独占一行大概就能猜出来了。

#### 块元素（block element）

- address - 地址
- blockquote - 块引用
- center - 举中对齐块
- dir - 目录列表
- div - 常用块级容易，也是css layout的主要标签
- dl - 定义列表
- fieldset - form控制组
- form - 交互表单
- h1 - 大标题
- h2 - 副标题
- h3 - 3级标题
- h4 - 4级标题
- h5 - 5级标题
- h6 - 6级标题
- hr - 水平分隔线
- isindex - input prompt
- menu - 菜单列表
- noframes - frames可选内容（对于不支持frame的浏览器显示此区块内容）
- noscript - 可选脚本内容（对于不支持script的浏览器显示此内容）
- ol - 排序列表
- p - 段落
- pre - 格式化文本
- table - 表格
- ul - 非排序列表

#### 内联元素（inline element）

- a - 锚点
- abbr - 缩写
- acronym - 首字
- b - 粗体（不推荐）
- bdo - bidi override
- big - 大字体
- br - 换行
- cite - 引用
- code - 计算机代码（在引用源码的时候需要）
- dfn - 定义字段
- em - 强调
- font - 字体设定（不推荐）
- i - 斜体
- img - 图片
- input - 输入框
- kbd - 定义键盘文本
- label - 表格标签
- q - 短引用
- s - 中划线（不推荐）
- samp - 定义范例计算机代码
- select - 项目选择
- small - 小字体文本
- span - 常用内联容器，定义文本内区块
- strike - 中划线
- strong - 粗体强调
- sub - 下标
- sup - 上标
- textarea - 多行文本输入框
- tt - 电传文本
- u - 下划线
- var - 定义变量

#### 可变元素

可变元素为根据上下文语境决定该元素为块元素或者内联元素。

- applet - java applet
- button - 按钮
- del - 删除文本
- iframe - inline frame
- ins - 插入的文本
- map - 图片区块（map）
- object - object对象
- script - 客户端脚本

参考文章：

1. [行内元素和块级元素的具体区别是什么？inline-block是什么？](https://www.cnblogs.com/iceflorence/p/6626187.html)
2. [HTML哪些是块级元素，哪些是行内元素](https://www.cnblogs.com/yxm440/p/7667539.html)
3. [块级元素 - HTML（超文本标记语言）](https://link.jianshu.com/?t=https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)
4. [行内元素 - HTML（超文本标记语言）](https://link.jianshu.com/?t=https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elemente)
5. [CSS块级元素、内联元素 - - 博客频道 - CSDN.NET](https://link.jianshu.com/?t=http://blog.csdn.net/sunlovefly2012/article/details/16859659)
6. [说说行内元素与块级元素以及之间的转换？ - 简书](https://www.jianshu.com/p/274614a078f3)