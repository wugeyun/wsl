### 查重
```
SELECT mobile,COUNT(*) as count FROM `meeting` WHERE id > 935 GROUP BY mobile HAVING count > 1
```

### 导出

```
SELECT id,username,mobile,email FROM `meeting` where id > 935;
```

### wordpress 查询文章字符串
```
SELECT * FROM wp_posts WHERE post_content LIKE '%old_url%';
```
### 替换文章字符串
```
UPDATE wp_posts SET post_content = REPLACE(post_content, 'old_url', 'new_url');
```