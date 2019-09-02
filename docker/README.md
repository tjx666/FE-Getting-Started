# docker 入门笔记

## 安装

安装 docker 首先建议看一下[官方文档](https://docs.docker.com/docker-for-mac/install]。

Docker 分为两个版本：

- Community Edition (CE)
- Enterprise Edition (EE)

我们当然是用 CE 社区版的啦。

### Mac 下安装

我相信使用 mac 做开发的应该都安装了 homebrew 这个包管理工具，可以使用 homebrew cask 安装 docker:

```bash
brew cask install docker
```

## 常用命令

### 运行容器

下面是启动一个 nginx 容器的命令：

```bash
docker run -d -p 80:80 --restart=always -v ~/docker-demo/html:/usr/share/nginx/html nginx:latest
```

参数含义：

1. -d

   detach，后台运行容器并打印容器 id

2. -p

   port 指定端口映射，比如 -p 80:80，表示映射本地 80 端口到容器的 80 端口

3. —restart

   指定重启策略，—restart=always 表示每次启动 docker 都启动该容器

4. -v

   volume 可以将容器内的某些路径映射到主机上 

### 查看容器

```bash
docker ps
```

### 操作容器

```
docker exec -it {container-id} bash
```

参数含义：

1. -i 

   interactive，保持 stdin 打开

2. -t

   tty，开启容器中一个 tty

3. bash

   表示容器中使用 bash 交互

### 退出容器

```bash
docker kill {container-id}
```

