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


