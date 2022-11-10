---
title: Cài đặt
slug: /setup
sidebar_position: 2
---
# Cài đặt

### Bước 1: Khởi tạo project từ mẫu có sẵn bằng Git

Mở explore di chuyển tới thư mục mình muốn lưu source code. Chuột phải vào **Git Bash Here** rồi chạy lệnh sau:

```
git clone https://oauth2:glpat-TkiDPLL3qeUKUj9TjhfH@code.sphoton.com/<namespace>.git <name-project>
```

Trong đó:
- spacespace: đường dẫn đến project trên kho lưu trữ CSC (code.sphoton.com) 
- name-peoject: tên thư mục


Ví dụ:
```
git clone https://oauth2:glpat-TkiDPLL3qeUKUj9TjhfH@code.sphoton.com/template.git template
```
thì ta được 1 thư mục có tên **template** chứa toàn bộ source code

### Bước 2: Download Package
- Chạy lệnh sau để mở thư mục vừa tạo bằng **VS studio code**:

```
code <name-project>
```
Trong đó: **name-project**: là thư mục muốn mở

- Tiếp theo mở Terminal bằng tổ hợp phím: `ctrl + `\`
- Tiếp theo chạy lệnh sau để Download Package: `yarn install`

### Bước 3: Chạy Project 

- Tạo máy chủ ảo: `Yarn start`
- Để hủy: vào trình Terminal bấm `Ctrl+C`

Giao diện hiển thị như hình ảnh bên dưới thì thành công:
   ![alt](../static/img/yarn_start.png)
