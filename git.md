### 新建非空git项目
```
git init
git remote add origin url
git push -u origin branch //(第一次提交并设主要分支)
```

### 新建分支
```
git branch name
```
切换分支
```
git checkout branch
```
新建并切换分支
```
git checkout -b name
```
### 修改仓库对应的远程仓库地址
```
git remote set-url origin https://gitee.com/wugeyun/xxx.git
```

### pull 强制覆盖本地文件
```
git fetch --all  
git reset --hard origin/master 
git pull
```
### push 强制覆盖远程文件
```
git push -f origin master
```
### 记住密码
```
git config --global credential.helper store
```
```
git config credential.helper store
```
### 搜索代码
```
git grep --count your-txt
```
### *恢复至某版本id 慎用
```
git reset --hard commit_id
```
### 放弃本地修改，强制覆盖
```
git reset --hard
git pull
```
### 忽略文件权限模式
```
git config --add core.filemode false
```
### 删除索引，保留本地文件
```
git rm --cached
```
### 清空root邮箱
```
cat /dev/null > /var/spool/mail/root
vi /etc/aliases
//添加root: xxx@xxx.com
```
### clone某个分支
```
git clone -b xxx https://xxx.git xxx
```
### 为Github账户设置SSH key
检查是否已生成密钥
```
cd ~/.ssh
```
或直接生成
```
ssh-keygen -t rsa -C "你的邮箱"
```
测试连接是否成功
```
ssh -T git@github.com
```