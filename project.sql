use project;

drop table user ;
CREATE table user(
id bigint(50) primary key auto_increment,
userName varchar(50) not null unique,
password varchar(32) not null,
firstName varchar(50) null default null,
lastName varchar(50) null default null,
mobile varchar(15) unique null,
email varchar(50) unique null,
registeredAt DATETIME not null,
lastLogin DATETIME null default null,
srcAvatar varchar(100) not null unique,
index idx_username (userName asc)
)

drop table role ;
create table role(
id bigint(20) primary key auto_increment,
roleName varchar(50) not null unique
);

drop table user_role ;
CREATE table user_role(
userId bigint(20) not null unique,
roleId bigint(20) not null unique,
constraint fk_role_user foreign key (userId) references user(id) ,
constraint fk_user_role foreign key (roleId) references role(id) 
);

drop table post;
CREATE table post(
id bigint primary key auto_increment,
userId bigint(20) not null,
title varchar(75) not null unique,
publishedStatus tinyint(1) not null default 0,
publishTime datetime,
createdAt datetime not null,
updatedAt datetime null default null,
content text null default null,
index (userId asc),
constraint fk_post_user foreign key (userId) references user(id) 
  ON DELETE NO ACTION
  ON UPDATE NO ACTION
);

drop table tag;
create table tag(
id bigint primary key auto_increment,
tagname varchar(50) not null unique);


drop table post_tag;
create table post_tag(
tagId bigint(50) not null,
postId bigint(50) not null,
constraint fk_post_tag_post foreign key (postId) references post(id)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
constraint fk_post_tag_tag foreign key (tagId) references tag(id)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION
  );
 
drop table comment;
create table comment(
id bigint(20) primary key auto_increment,
userId bigint(20) not null,
postId bigint(20) not null,
parentId bigint(20) null default null,
createdAt datetime not null,
updatedAt datetime null default null,
content text null default null,
index idx_comment_post(postId asc),
index idx_comment_parent (parentId asc),
constraint fk_comment_post foreign key (postId) references post (id)
on delete no action
on update no action,
constraint fk_comment_user foreign key (userId) references user (id)
on delete no action
on update no action,
constraint fk_comment_comment foreign key (parentId) references comment (id)
on delete no action
on update no action
);
 
drop table category;
create table category(
id bigint(20) primary key auto_increment,
parentId bigint(20),
name varchar(75) not null unique,
constraint fk_category_category foreign key (parentId) references category (id)
on delete no action 
on update no action
);

drop table post_category;
create table post_category(
postId bigint not null,
categoryId bigint not null,
primary key (postId,categoryId),
index idx_pc_category (categoryId asc),
index idx_pc_post (postId asc),
constraint fk_pc_post foreign key (postId) references post (id) 
on delete no action 
on update no action,
constraint fk_pc_category foreign key (categoryId) references category (id) 
on delete no action 
on update no action
);

drop table post_like;
create table post_like(
id bigint(50) primary key,
postId bigint(50) not null,
userId bigint(50) not null,
constraint fk_post_like_post foreign key (postId)references post(id),
constraint fk_post_like_user foreign key (userId) references user(id)
);

drop table media;
create table media(
id bigint primary key auto_increment,
srcMedia varchar(100) not null unique,
userId bigint not null,
constraint fk_media_user foreign key (userId) references user (id)
	on delete no action 
    on update no action
);
