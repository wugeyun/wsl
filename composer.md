### 删除禁用函数
```
putenv
proc_open
```
### 阿里镜像
```
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```
### 更新
```
composer update
composer selfupdate
```
### -vvv选项 
```
composer install -vvv
```
### 不安装dev包
```
/usr/bin/composer --no-dev install
```
### 强制执行
```
--ignore-platform-reqs
```