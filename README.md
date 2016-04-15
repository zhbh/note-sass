## 学习资料

- 官网 : http://sass-lang.com/documentation/file.SASS_REFERENCE.html
- 中文网 ：http://sass.bootcss.com/docs/sass-reference/


### 数据类型

SassScript 支持六种主要的数据类型：

- 数字（例如 1.2、13、10px）
- 文本字符串，无论是否有引号（例如 "foo"、'bar'、baz）
- 颜色（例如 blue、#04a3f9、rgba(255, 0, 0, 0.5)）
- 布尔值（例如 true、false）
- 空值（例如 null）
- 值列表，用空格或逗号分隔（例如 1.5em 1em 0 2em、Helvetica, Arial, sans-serif）

SassScript 还支持所有其他 CSS 属性值类型， 例如 Unicode 范围和 !important 声明。 然而，它不会对这些类型做特殊处理。 它们只会被当做不带引号的字符串看待。

### 变量

- 以$开头命名变量，并设置值： 

```sass
$screenWidth: 100%;
#{$height}: heigth;

.row 
	width: $screenWidth;
	$height： 100px;
```

- 设置变量 `!defualt`



### 运算

支持基本运算（+、-、×、/、%），同样可以不同单位进行运算。

```sass
.sum
	height: 1px + 1px;

.substraction
	height: 1px - 2px;

.multiplication
	width: 2px * 3;
	//不可写成 width: 2px * 3px;

.division
	margin: (4px/2);
	//如果写成 margin : (4px/2px); 生成 margin: 2;
```

除法规则：

- 如果数值或它的任意部分是存储在一个变量中或是函数的返回值。
- 如果数值被圆括号包围。
- 如果数值是另一个数学表达式的一部分。

```sass
.division
	width: $screenWidth / 2;
	height: round(1.5px) / 2;
	margin: (4px/2);
	padding: 1px + 4px / 2;

	font: 18px/40px;//直接输出css
```

### 字符串

- 连接字符串，根据前面字符串形式生产，如果前一个字符串有引号，则编译后整体带引号，否则没有。

```sass
p
	curson: e + -resize; //curson : e-resize;

p:before
	content: 'hello ' + world; // content: "hello world";
	font-family: sans + '-serif'; // font-family: sans-serif;
```

- 空格，相当用空格连接字符串。

```sass
p
	margin: 10px + 10px auto;
```

### 布尔运算

支持布尔值做`or`、`and`、`not`运算

### \#{}

- 定义样式的选择器和属性名

```sass
$navsSelector : footer;
$bgColor : background-color;

p.#{$navsSelector}
	#{$bgColor}: #fff;
```

- \#{}属性值

```sass
.detial
	$font-size: 18px;
	$line-height: 40px;
	font: #{font-size}/#{$line-height};
```

