# WSL 基本命令

### 安装对WSL的支持 PowerShell 管理员模式
```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

### 更新 WSL
```
wsl --update
```

### 设置默认 WSL 版本
```
wsl --set-default-version 2
```

### 列出可用的 Linux 发行版
```
wsl --list --online
```

```
wsl -l -o
```

### 安装特定的 Linux 发行版
```
wsl --install -d Ubuntu
```

### 列出已安装的 Linux 发行版
```
wsl -l -v
```

### 设置默认 Linux 发行版
```
wsl --setdefault Ubuntu
```

```
wsl -s Debian
```

### 运行特定的 Linux 发行版
```
wsl -d Debian
```

### 将 WSL 版本设置为 1 或 2
```
wsl --set-version Debian 2
```

```
wsl --set-version Debian 1
```

### 设置root密码
```
sudo  passwd root
```

### 卸载 Linux 发行版
```
wsl --unregister Ubuntu-xxx
```
