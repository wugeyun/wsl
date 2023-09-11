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

# ChatGPT版
```
ffmpeg -i input.mp4 -c:v libx264 -c:a aac -f hls -hls_time 10 -hls_list_size 0 m3u8/output.m3u8
```
-i input.mp4: 指定输入文件的路径和文件名。

-c:v libx264: 指定使用libx264编码器对视频流进行编码。

-c:a aac: 指定使用AAC编码器对音频流进行编码。

-f hls：指定输出格式为HLS。

-hls_time 10: 指定生成的每个ts文件的时长，单位为秒。

-hls_list_size 0: 指定生成的m3u8文件中包含的ts文件的最大数量，这里设置为0表示不限制。

output.m3u8: 指定输出的M3U8文件的路径和文件名。


# m3u8转mp4

```
sudo ffmpeg -i https://xxx.com/index.m3u8 -acodec copy -vcodec copy -absf aac_adtstoasc xxx.mp4
```
```
ffmpeg -i https://xxx.com/index.m3u8 -c copy xxx.mp4
```

# ChatGPT版
```
ffmpeg -protocol_whitelist "file,http,https,tcp,tls" -i input.m3u8 -c copy output.mp4
```
-protocol_whitelist "file,http,https,tcp,tls": 指定协议白名单，这里设置为支持本地文件、HTTP、HTTPS、TCP和TLS协议。

-i input.m3u8: 指定输入的M3U8文件的路径和文件名。

-c copy: 指定使用“copy”方式进行转换，这将只复制输入的视频和音频流，而不重新编码它们，以保持最佳质量和速度。

output.mp4: 指定输出的MP4文件的路径和文件名。


# 压缩视频
```
ffmpeg -i input.mp4 -s 1920x1080 -b:v 1M -r 30 Desktop/output.mp4
```
-s 分辨率
-b:v 码率
-r 帧率

# 无损快速分割视频
```
ffmpeg -i input.mp4 -ss 00:02:00 -t 00:01:00 -codec copy output.mp4
```
截取原视频中，自2分钟开始持续一分钟的视频

## 更多命令

```

-h	帮助

-formats	显示可用的格式、编解码、协议等

-c	音视频编解码器

-i D:\input.mp4	指定输入的文件

-f mp4	指定格式为mp4

-r 30	指定帧率为30，默认为25

-b 300	指定比特率为300，默认为200

-s 480*480	指定分辨率为480×480，默认为168×128

-aspect 4:3	指定纵横比4:3

-fs 10MB	指定文件大小为10MB

-intra	指定所有帧为关键帧，便于精确剪辑

-vcodec h264	指定视频编码方式为h.264

-acodec aac	指定音频编码方式为aac

-ac <数值>	指定声道数，1就是单声道，2就是立体声

-ar <采样率>	指定声音采样率，PSP只认24000

-ab <比特率>	指定定声音比特率

-vol <百分比>	指定音量

-y	覆盖输出文件

-ss 00:00:00	定位到指定时间位置

-t 00:00:00	持续时间

-codec copy	所有编码不变

-vcodec copy	视频编码不变

-acodec copy	音频编码不变

-sameq	视频质量不变

-vn	删掉视频流

-an	删掉音频流

-map 0	输入所有数据流

-map 0:0	输入第1个数据流，一般为视频流，0:1为第2个数据流；此命令输几次就输出文件就多几个数据流，按输入先后顺序在输出视频依次排序

-map 0:v	输入所有视频流

-map 0:a:1	输入第2个音频流

-c copy	所有数据流不变

-c:v copy	视频编码不变

-c:a:0 libmp3lame	指定第一个音频流的编码为mp3

-b:a:0 128k	指定第一个音频流的比特率为128k

-c:s copy	字幕不变
```
