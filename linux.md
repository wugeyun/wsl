### 同步ftp到本地
```
wget -r -c --ftp-user=ftp_name --ftp-password=xxx -nH -P . ftp://ip/uploadfile/*
```
```
wget -r -c --ftp-user=ftp007 --ftp-password=xxx -nH -P . ftp://ip/uploadfile/*
```
### mysql mode
```
sql-mode=NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```
### 替换空文件夹
```
rsync --delete-before -d /www/空/ /www/目标/
```
### curl断点续传
```
curl -C - -O https://www.xxx.com/html.tar.gz
```
### wget 静默+续传下载
```
wget -q -b -c https://...
```
### termux 连接手机内存
```
termux-setup-storage
```
### 清除本地ssh信息
```
ssh-keygen -R "ip"
```
### rm权限不足
```
chattr -i xxx
```
### 挂载数据盘
```
fdisk -l
```
```
echo "/dev/vdb1 /www ext4 defaults 0 0" >> /etc/fstab
```
```
mount -a
```
```
df -h
```

### Ubuntu 22.04 更换阿里云源

```
cd /etc/apt/
```
```
cp sources.list sources.list_bak
```
```
vim sources.list
```
```
deb http://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
```
