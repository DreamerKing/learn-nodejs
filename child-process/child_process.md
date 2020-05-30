1. child.stdin
2. child.stdout
3. child.stderr

1. execFile 不会通过命令解析器解析运行，所以比较安全。
2. exec 通过命令解析器解析运行，要防止恶意代码注入。

分离子进程
cp.spawn('exe', [...], { detached: true, stdio: ['ignore', out, err] });
父进程与子进程通过`stdio`进行通信。
文件描述器

child.unref()告诉主进程不要将子进程的引用进行计数。
分离子进程要做到三点:
1. 必须将detached选项置为true,让子进程升级为它自己的进程组头；
2. 必须配置stdio选项，这样父进程和子进程IO链接才会中断；
3. 父进程中对子进程内部引用计数必须移除，可以通过child.unref()实现。

同步方法会阻塞事件循环,对性能产生重大的影响,因为同步方法会暂停事件循环直到衍生进程完成。

+ cp.exec(command [, options] [, callback]) 没有衍生shell,不支持I/O重定向和文通配等行为。
+ cp.execFile(file [, args] [, options] [, callback])  默认不衍生shell。直到可执行文件file会作为新进程直接地衍生,比exec()稍微更高效。
+ cp.fork(moulePath [, args] [, options])
+ cp.spawn(command [, args] [, options]) 


