+ basename(path [, ext]) //如果提供ext,返回时若匹配则去掉ext
+ dirname(path)
+ extname(path)
+ format(pathObject)
+ isAbsolute(path)
+ join([...paths]) // 相对路径字符串
+ normalize(path)
+ parse(path)
+ relative(from, to)
+ resolve([...paths]) // 绝对路径字符串
+ toNamespacedPath(path)
+ delimiter //系统PATH变量分隔符
+ sep // 路径分隔符
+ posix 
+ win32
  
重点
1. path.join()
2. path.resolve()
3. extname()

Windows vs POSIX
|        | Windows | PO |
|:--------:|:-------:|:-------:|
| delimiter| ;       | :       |
| sep      | \       | /         | 
pathObject
root => dir
base => name,ext