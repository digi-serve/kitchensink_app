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
LOCK TABLES `AB_testkcskeyb` WRITE;
TRUNCATE TABLE `AB_testkcskeyb`;
INSERT INTO `AB_testkcskeyb` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `user`,
  `Key A`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "Mr. Admin",
  "Record A"
);
INSERT INTO `AB_testkcskeyb` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `user`,
  `Key A`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "Mr. Admin",
  "Record B"
);
INSERT INTO `AB_testkcskeyb` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `user`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "Mr. Admin"
);
UNLOCK TABLES;
SET FOREIGN_KEY_CHECKS = 1;