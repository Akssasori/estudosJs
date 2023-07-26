alter table users 
add password varchar(50) check(length(password) >= 8)