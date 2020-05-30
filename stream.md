流是EventEmitter的实例.
流的类型
+ Writeable
+ Readable
+ Duplex
+ Transform

工具方法
+ stream.pipeline()
+ stream.finished()
+ stream.Readable.from()

highWaterMark

stream.push(chunk)
stream.read()
writable.write(chunk)
stream.pipe()

Writable Streams
Event:
+ close
+ drain
+ error
+ finish  -> end()
+ pipe -> pipe()
+ unpipe -> unpipe()
  
Method:
+ cork() -> uncork(), end()
+ uncork()
+ destroy()
+ destoryed
+ end([chunk [, encoding]][, callback])
+ writableEnded
+ setDefaultEncoding(encoding)
+ writableHighWaterMark
+ writableLength
+ writableObjectMode
+ write(chunk [, encoding][, callback])

Readable Stream
Event:
+ close
+ data
+ end
+ error
+ pause
+ readable
+ resume

Methods:
+ destroy([error])
+ isPaused()
+ pause()
+ pipe(destination [, options])
+ read([size])
+ resume()
+ setEncoding(encoding)
+ unpipe([destination])
+ unshift(chunk [, encoding])
+ wrap(stream)

Duplex and Transform Streams
Methods:
+ destroy([error])
+ finished(stream[, options], callback)
+ pipeline(...streams, callback)
+ from(iterable, [options])