Buffer 固定长度的字节序列，是`Uint8Array`的子类。 原始堆的分配额数据类型，以类数组的方式使用，全局可以，不需要 require。

Buffer.isBuffer(buf)
buf.toString([encode])

Buffer.from(string[,encoding]);

// 分配并初始化
Buffer.alloc(size [, fill, [, encoding]]);

// 快速分配,未初始化
Buffer.allocUnsafe(size)

TypedArray 的 buffer 属性可以跟 Buffer 共享。
TypedArray.from(source [, mapFn [, thisArg]]) 支持 map,而 Buffer.from(source [, byteOffset [, length]])不支持 map

Stactic

- alloc(size, [, fill [, encoding]])
- allocUnsafe(size)
- allocUnsafeSlow(size)
- byteLength(string [, encoding])
- compare(buf1, buf2)
- concat(list [, totalLength])
- from()
- isBuffer()
- isEncoding()
- poolSize

Instance

- buffer
- length
- byteOffset
- compare()
- copy()
- entries()
- keys()
- values()
- equals()
- fill()
- includes()
- indexOf()
- lastIndexOf()
- read\*\*()
- write\*\*()
- subarray()
- slice()
- swap\*\*()
- toJSON()
- toString()

module

- atob(data)
- btoa(data)
- transcode(source, fromEnc, toEnc)

Blob

- new buffer.Blob()
- blob.arrayBuffer()
- blob.text()
- size
- type
