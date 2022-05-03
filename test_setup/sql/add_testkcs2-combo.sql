LOCK TABLES `AB_testkcskeya` WRITE;
INSERT INTO `AB_testkcskeya` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `label`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "Record A"
);
INSERT INTO `AB_testkcskeya` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `label`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "Record B"
);
INSERT INTO `AB_testkcskeya` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `label`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "Record C"
);
UNLOCK TABLES;
LOCK TABLES `AB_testkcskeyb` WRITE;
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