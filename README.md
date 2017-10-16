# vue-h-editable
vue contenteditable 插件

## About  
这是一个vue2.0 指令插件，允许将任何dom变为数据双向绑定的可编辑区域

## Demo 

[Demo](https://hezhengjie.github.io/vue-h-editable/demo/index.html)

## Installation

#### install with NPM
```
npm install vue-h-editable --save  
```
#### Import
```
import vueEditable from 'vue-h-editable'
```

## Usage
first import it:

```
import vueEditable from 'vue-h-editable'  

Vue.use(vueEditable);
```

Then in your template just use the directive:

```
<div class="h-content" v-editable="content"> //content is data model ,like v-model

```
