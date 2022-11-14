---
title: Cơ bản
slug: /basic
sidebar_position: 4
---
# Cách viết một tài liệu markdown cơ bản

> Tên file là tiếng anh, viết thường, khái quát được nội dung chính mà người viết muốn truyền đạt

### Cấu hình

> Phần cấu hình được viết nằm trong một khối `---`, nó bao gồm 3 thành phần chính: title, slug, sidebar_position 

- **title**: Tiêu đề hiển thị của sidebar. Hiển thị khái quát nội dung chính của bài viết
- **slug**: Là uri của trang web. Viết bằng tiếng anh, viết thường, các chữ được nối với nhau bằng dấu gạch  nối `-`, thường sẽ sử dụng tên file
- **sidebar_position**: Vị trí trong sidebar là số thứ tự tăng dần theo thứ tự từ bé tới lớn

Ví dụ: 
```
---
title: Cài đặt
slug: /setup
sidebar_position: 4
---
```

### Nội dung

> Người dùng thực hiện viết nội dung tài liệu markdown
