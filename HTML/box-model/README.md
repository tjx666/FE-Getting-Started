## 默认情况下 width 包括那几部份？包括 padding, border 吗？

box-sizing 属性决定了一个元素盒子模型的宽高由哪几部分组成，默认情况下 box-sizing: content-box，即 width 设置的是 content 的宽高。正常情况下人的思维应该会认为盒子的宽高应该是有由 content，padding 和 border-width 组成。要想达到 width = content + padding + border-width 可以设置元素 box-sizing: border-box;



## background-color 设置的背景色会作用于盒子模型哪些部分?

作用于 content 和 padding