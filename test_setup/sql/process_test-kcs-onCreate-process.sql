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
  "ae071b2a-0370-4dc7-bced-43e1d37171f3",
  NOW(),
  NOW(),
  "Mr. Admin",
  "admin"
);
UNLOCK TABLES;
SET FOREIGN_KEY_CHECKS = 1;