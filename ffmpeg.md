# ubuntu use ffmpeg

```
apt install -y ffmpeg
```

```
ffmpeg -version
```

# centos

```
yum -y install epel-release
rpm --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro
rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-1.el7.nux.noarch.rpm
yum -y install ffmpeg ffmpeg-devel
ffmpeg -version
```

# mp4转m3u8

```
ffmpeg -i demo.mp4 -profile:v baseline -level 3.0 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls demo.m3u8
```
```
ffmpeg -i demo.mp4 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls m3u8/demo.m3u8
```

demo.mp4和demo.m3u8就是原文件和需要转换成的m3u8文件；

-profile:v baseline 大概意思是档次转成基本画质，有四种画质级别,分别是baseline, extended, main, high，从低到高

-level 3.0 大概也是视频画质级别吧，基本上是从1到5,

-start_number 0 表示从0开始

-hls_time 10 标识每10秒切一个


# m3u8转mp4

```
sudo ffmpeg -i https://xxx.com/index.m3u8 -acodec copy -vcodec copy -absf aac_adtstoasc xxx.mp4
```
```
ffmpeg -i https://xxx.com/index.m3u8 -c copy xxx.mp4
```

# 压缩视频
```
ffmpeg -i input.mp4 -s 1920x1080 -b:v 1M -r 30 Desktop/output.mp4
```
-s 分辨率
-b:v 码率
-r 帧率
