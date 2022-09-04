## 使用DISM修复Windows 10映像

使用 DISM 命令行工具对 Windows 10 映像进行修复，

主要有 CheckHealth、ScanHealth 和 RestoreHealh 三个阶段，

需在Windows PowerShell（管理员）中执行（win+x）：

### 1，DISM CheckHealth选项(健康检查)
```
DISM /Online /Cleanup-Image /CheckHealth
```

### 2，DISM ScanHealth选项（扫描损坏部分）
```
DISM /Online /Cleanup-Image /ScanHealth
```

### 3，DISM RestoreHearlh选项（检测修复）
```
DISM /Online /Cleanup-Image /RestoreHealth
```

## 指定DISM修复源

```
DISM /Online /Cleanup-Image /RestoreHealth /Source:文件路径install.wim
```
