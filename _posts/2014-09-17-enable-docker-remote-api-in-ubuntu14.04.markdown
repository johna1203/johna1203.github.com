---
layout: post
title:  "UbuntuでDocker Remote Apiを有効にする。"
date:   2014-09-17 15:21:39
categories: Docker Ubuntu
---

#UbuntuでDocker Remote Apiを有効にする。

```shell

$ sudo vi /etc/init/docker.io.conf

DOCKER_OPTS='-H tcp://0.0.0.0:4243 -H unix:///var/run/docker.sock -d'

```

参考先
`http://blog.trifork.com/2013/12/24/docker-from-a-distance-the-remote-api/`