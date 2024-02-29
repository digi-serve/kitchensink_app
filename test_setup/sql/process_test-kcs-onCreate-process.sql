SET FOREIGN_KEY_CHECKS = 0;
LOCK TABLES `AB_testkcsuser` WRITE;
TRUNCATE TABLE `AB_testkcsuser`;
INSERT INTO `AB_testkcsuser` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `label`,
  `user`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "Mr. Admin",
  "admin"
);
UNLOCK TABLES;
SET FOREIGN_KEY_CHECKS = 1;