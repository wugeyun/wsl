# 跨域设置
### 允许所有域名访问资源
```
add_header 'Access-Control-Allow-Origin' '*' always;
```
### 允许多域名访问资源
```
add_header 'Access-Control-Allow-Origin' 'http://example.com https://example.org' always;
```
### 允许泛域名访问资源
```
if ($http_origin ~* '^https?://[^/]+\.example\.com(:[0-9]+)?$') {
  add_header 'Access-Control-Allow-Origin' $http_origin always;
}
```