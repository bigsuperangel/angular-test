angular-test
============

oracle sql

create table t_msg (id number(10) ,sender varchar2(20),subject varchar2(20),message varchar2(20))
truncate table t_msg;

begin 
  for i in 1..100 loop 
    insert into t_msg values(i,'aaa'|| i,'bbb' || i,'ccc'|| i);
  end loop;
  commit;
end;

test for angular