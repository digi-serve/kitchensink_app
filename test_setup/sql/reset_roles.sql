SET FOREIGN_KEY_CHECKS = 0;
LOCK TABLES `AB_JOINMN_ROLE_USER_users` WRITE;
TRUNCATE TABLE `AB_JOINMN_ROLE_USER_users`;

INSERT INTO `appbuilder-admin`.`AB_JOINMN_ROLE_USER_users` (`id`, `USER`, `ROLE`) VALUES ('1', 'admin', 'dd6c2d34-0982-48b7-bc44-2456474edbea');
INSERT INTO `appbuilder-admin`.`AB_JOINMN_ROLE_USER_users` (`id`, `USER`, `ROLE`) VALUES ('2', 'admin', '6cc04894-a61b-4fb5-b3e5-b8c3f78bd331');

UNLOCK TABLES;
SET FOREIGN_KEY_CHECKS = 1;