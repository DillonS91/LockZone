insert into master (name, password) values('dan', 'root'); 
insert into master (name, password) values('howard', 'root');

insert into website (urlname, master_id) values ('http://soup.io', 1);
insert into website (urlname, master_id) values ('http://yellowbook.com', 2);
insert into website (urlname, master_id) values ('https://purevolume.com', 2);
insert into website (urlname, master_id) values ('http://nationalgeographic.com', 2);
insert into website (urlname, master_id) values ('https://lulu.com', 2);
insert into website (urlname, master_id) values ('http://gmpg.org', 2);
insert into website (urlname, master_id) values ('https://wsj.com', 2);
insert into website (urlname, master_id) values ('http://google.com.br', 2);
insert into website (urlname, master_id) values ('http://timesonline.co.uk', 2);
insert into website (urlname, master_id) values ('http://cbc.ca', 1);

insert into accounts (accnames, accpassword, website_Id) values ('Kerby', 'LYc5a5gaNCE', 1);
insert into accounts (accnames, accpassword, website_Id) values ('Glenden', '1X1GWJEm7', 2);
insert into accounts (accnames, accpassword, website_Id) values ('Jorgan', 'X87tVOrVz', 3);
insert into accounts (accnames, accpassword, website_Id) values ('Buckie', 'Rrohpgv4o4C', 4);
insert into accounts (accnames, accpassword, website_Id) values ('Lauri', 'DZpFh9', 5);
insert into accounts (accnames, accpassword, website_Id) values ('Udall', 'wtlDLg7hhWxc', 6);
insert into accounts (accnames, accpassword, website_Id) values ('Beale', 'qcx08j62M', 7);
insert into accounts (accnames, accpassword, website_Id) values ('Elaina', '9WRzZXq', 8);
insert into accounts (accnames, accpassword, website_Id) values ('Mayor', 'DpZ8eoi', 9);
insert into accounts (accnames, accpassword, website_Id) values ('Rubetta', 'v9BnEQ', 10);
insert into accounts (accnames, accpassword, website_Id) values ('Daisy', 'LLearq', 1);
insert into accounts (accnames, accpassword, website_Id) values ('Oran', '2IwEIFLQrX', 2);
insert into accounts (accnames, accpassword, website_Id) values ('Joanne', 'lpVsWGa1h', 3);
insert into accounts (accnames, accpassword, website_Id) values ('Willabella', 'RFbHSqpZ6hvK', 4);
insert into accounts (accnames, accpassword, website_Id) values ('Markus', 'iSZWn8ET', 5);
insert into accounts (accnames, accpassword, website_Id) values ('Filip', 'YsivQq7', 6);
insert into accounts (accnames, accpassword, website_Id) values ('Cori', 'ugSKcS2gix2', 7);
insert into accounts (accnames, accpassword, website_Id) values ('Emiline', 'IctfZjIMzO', 8);
insert into accounts (accnames, accpassword, website_Id) values ('Cullen', 'uo4t9C80o', 9);
insert into accounts (accnames, accpassword, website_Id) values ('Salaidh', 'zkedBULCV2n', 10);


insert into Users(username,password,enabled,master_id) values('dan','$2a$10$cdgz.UZwwTnvQsjGLgJ98./0FGov/rvmXJH2et2mRZy.SZYiDpgWa', true,1);
insert into Users(username,password,enabled,master_id) values('howard','$2a$10$cdgz.UZwwTnvQsjGLgJ98./0FGov/rvmXJH2et2mRZy.SZYiDpgWa',true,2);

insert into authorities values('dan', 'ROLE_USER');
insert into authorities values('howard', 'ROLE_USER');
