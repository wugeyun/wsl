### 查重
```
SELECT mobile,COUNT(*) as count FROM `meeting` WHERE id > 935 GROUP BY mobile HAVING count > 1
```

### 导出

```
SELECT id,username,mobile,email FROM `meeting` where id > 935;
```
