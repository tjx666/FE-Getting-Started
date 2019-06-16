## CSS3 animation

[MDN animation](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation>)

CSS3 的 animation 用法上就是通过 `@keyframes` 定义某几个时刻的样式状态，然后又有几个 animation- 开头的属性可以设置动画的时间曲线，延迟启动时间，播放次数等。

animation 可以看作是多个 transition 叠加，属性顺序都和 transition 一样。和 transition 相比，animation 是主动触发，可以设置播放次数，更加灵活和强大。

animation property 其实是 8 个属性的组合属性。

语法：**animation: name duration timing-function delay iteration-count direction play-state fill-mode;**

| 值              | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| name            | 用来调用@keyframes定义好的动画，与@keyframes定义的动画名称一致 |
| duration        | 指定元素播放动画所持续的时间                                 |
| timing-function | 规定速度效果的速度曲线，是针对每一个小动画所在时间范围的变换速率 |
| delay           | 定义在浏览器开始执行动画之前等待的时间，值整个animation执行之前等待的时间 |
| iteration-count | 定义动画的播放次数，可选具体次数或者无限(infinite)           |
| direction       | 设置动画播放方向：normal(按时间轴顺序),reverse(时间轴反方向运行),alternate(轮流，即来回往复进行),alternate-reverse(动画先反运行再正方向运行，并持续交替运行) |
| play-state      | 控制元素动画的播放状态，通过此来控制动画的暂停和继续，两个值：running(继续)，paused(暂停) |
| fill-mode       | 控制动画结束后，元素的样式，有四个值：none(回到动画没开始时的状态)，forwards(动画结束后动画停留在结束状态)，backwords(动画回到第一帧的状态)，both(根据animation-direction轮流应用forwards和backwards规则)，注意与iteration-count不要冲突(动画执行无限次) |

参考文章：

1. [CSS动画：animation、transition、transform、translate傻傻分不清](<https://juejin.im/post/5b137e6e51882513ac201dfb>) 各自特点分析的挺好的