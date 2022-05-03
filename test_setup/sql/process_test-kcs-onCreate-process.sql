LOCK TABLES `AB_testkcsuser` WRITE;
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
  "mr. admin",
  "admin"
);
UNLOCK TABLES;
