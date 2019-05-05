## 点击事件

### offsetX / offsetY

[MDN MouseEvent.offsetX](<https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetX>)

获取点击位置在被点击元素内部的水平偏移量 / 垂直偏移量。这两个属性目前是实验性的属性，兼容性不好，火狐不支持。

### layerX / layerY

[MDN UIEvent.layerX](<https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerX>)

获取点击位置在从内往外第一个**定位的**父元素内部的 top / left。

如果被点击元素设置了定位(非 static)，那么和上面两个属性就是一样的了，兼容性更好。

### clientX / clientY

[MDN MouseEvent.clientX](<https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX>)

获取以浏览器可视区域左上角为原点，点击位置在可视区域内的坐标。所谓的的可视区域就是浏览器窗口渲染网页的那部分。

### pageX / pageY

[MDN MouseEvent.pageX](<https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX>)

获取以整个文档左上角为原点，点击位置的坐标。**火狐不支持*！**

兼容写法:

```javascript
pageY = event.clientY + window.pageYOffset
pageY = event.clientY + document.documentElement.scrollTop - document.documentElement
                .clientTop。
```

### screenX / screenY

[MDN MouseEvent.screenX](<https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX>)

没什么好说的，就是相当于屏幕的坐标。

### x/y

是 clientX / client 的别名。