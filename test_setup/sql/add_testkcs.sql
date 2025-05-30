LOCK TABLES `AB_testkcs` WRITE;
INSERT INTO `AB_testkcs` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `properties`,
  `testkcsid`,
  `singlelinetext`,
  `singlelinetextrequired`,
  `longtext`,
  `longtextrequired`,
  `number`,
  `numberrequired`,
  `numberunique`,
  `numberformatdecimalsthousands`,
  `numbervalidation`,
  `date`,
  `daterequired`,
  `datetime`,
  `datetimerequired`,
  `time`,
  `checkbox`,
  `checkboxrequired`,
  `selectlist`,
  `selectlistrequired`,
  `selectlistmultiselect`,
  `selectlistmultiselectrequired`,
  `email`,
  `emailrequired`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "text",
  "10",
  "text",
  "text",
  "longtext",
  "longtext",
  "11",
  "22",
  "33",
  "1.9",
  "5",
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  "0",
  "1",
  "item2",
  "item3",
  "[{\"id\":\"item4\",\"text\":\"item4\",\"hex\":\"#673AB7\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item4\"}]},{\"id\":\"item5\",\"text\":\"item5\",\"hex\":\"#3F51B5\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item5\"}]}]",
  "[{\"id\":\"item1\",\"text\":\"item1\",\"hex\":\"#F44336\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item1\"}]},{\"id\":\"item2\",\"text\":\"item2\",\"hex\":\"#E91E63\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item2\"}]}]",
  "email@email.com",
  "admin@email.com"
);
INSERT INTO `AB_testkcs` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `properties`,
  `testkcsid`,
  `singlelinetext`,
  `singlelinetextrequired`,
  `longtext`,
  `longtextrequired`,
  `number`,
  `numberrequired`,
  `numberunique`,
  `numberformatdecimalsthousands`,
  `numbervalidation`,
  `date`,
  `daterequired`,
  `datetime`,
  `datetimerequired`,
  `time`,
  `checkbox`,
  `checkboxrequired`,
  `selectlist`,
  `selectlistrequired`,
  `selectlistmultiselect`,
  `selectlistmultiselectrequired`,
  `email`,
  `emailrequired`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "text 2",
  "20",
  "text 2",
  "text 2",
  "longtext 2",
  "longtext 2",
  "211",
  "222",
  "233",
  "21.9",
  "25",
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  "0",
  "1",
  "item1",
  "item5",
  "[{\"id\":\"item1\",\"text\":\"item1\",\"hex\":\"#F44336\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item1\"}]},{\"id\":\"item2\",\"text\":\"item2\",\"hex\":\"#E91E63\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item2\"}]},{\"id\":\"item3\",\"text\":\"item3\",\"hex\":\"#9C27B0\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item3\"}]},{\"id\":\"item4\",\"text\":\"item4\",\"hex\":\"#673AB7\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item4\"}]},{\"id\":\"item5\",\"text\":\"item5\",\"hex\":\"#3F51B5\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item5\"}]}]",
  "[{\"id\":\"item1\",\"text\":\"item1\",\"hex\":\"#F44336\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item1\"}]},{\"id\":\"item2\",\"text\":\"item2\",\"hex\":\"#E91E63\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item2\"}]},{\"id\":\"item3\",\"text\":\"item3\",\"hex\":\"#9C27B0\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item3\"}]},{\"id\":\"item4\",\"text\":\"item4\",\"hex\":\"#673AB7\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item4\"}]},{\"id\":\"item5\",\"text\":\"item5\",\"hex\":\"#3F51B5\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item5\"}]}]",
  "email2@email.com",
  "admin2@email.com"
);

# Insert more sample rows
DROP TEMPORARY TABLE IF EXISTS RUNNING_NUMBER;
CREATE TEMPORARY TABLE RUNNING_NUMBER (Num INT);

INSERT INTO RUNNING_NUMBER (Num)
VALUES (3), (4), (5), (6), (7), (8), (9), (11), (12), (13), 
(14), (15), (16), (17), (18), (19), (22), (23), (24), (25), 
(26), (27), (28), (29), (30), (31), (32), (34), (35), (36);

INSERT INTO `AB_testkcs` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `properties`,
  `testkcsid`,
  `singlelinetext`,
  `singlelinetextrequired`,
  `longtext`,
  `longtextrequired`,
  `number`,
  `numberrequired`,
  `numberunique`,
  `numberformatdecimalsthousands`,
  `numbervalidation`,
  `date`,
  `daterequired`,
  `datetime`,
  `datetimerequired`,
  `time`,
  `checkbox`,
  `checkboxrequired`,
  `selectlist`,
  `selectlistrequired`,
  `selectlistmultiselect`,
  `selectlistmultiselectrequired`,
  `email`,
  `emailrequired`
)
SELECT
  UUID(),
  NOW(),
  NOW(),
  CAST(CONCAT("text ", Num) AS CHAR),
  Num,
  CAST(CONCAT("text ", Num) AS CHAR),
  CAST(CONCAT("text ", Num) AS CHAR),
  CAST(CONCAT("longtext ", Num) AS CHAR),
  CAST(CONCAT("longtext ", Num) AS CHAR),
  Num + "101",
  Num + "202",
  Num + "303",
  "21.9",
  "25",
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  "1",
  "1",
  "item1",
  "item5",
  "[{\"id\":\"item1\",\"text\":\"item1\",\"hex\":\"#F44336\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item1\"}]},{\"id\":\"item2\",\"text\":\"item2\",\"hex\":\"#E91E63\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item2\"}]},{\"id\":\"item3\",\"text\":\"item3\",\"hex\":\"#9C27B0\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item3\"}]},{\"id\":\"item4\",\"text\":\"item4\",\"hex\":\"#673AB7\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item4\"}]},{\"id\":\"item5\",\"text\":\"item5\",\"hex\":\"#3F51B5\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item5\"}]}]",
  "[{\"id\":\"item1\",\"text\":\"item1\",\"hex\":\"#F44336\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item1\"}]},{\"id\":\"item2\",\"text\":\"item2\",\"hex\":\"#E91E63\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item2\"}]},{\"id\":\"item3\",\"text\":\"item3\",\"hex\":\"#9C27B0\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item3\"}]},{\"id\":\"item4\",\"text\":\"item4\",\"hex\":\"#673AB7\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item4\"}]},{\"id\":\"item5\",\"text\":\"item5\",\"hex\":\"#3F51B5\",\"translations\":[{\"language_code\":\"en\",\"text\":\"item5\"}]}]",
  "email2@email.com",
  "admin2@email.com"
FROM RUNNING_NUMBER;

LOCK TABLES `AB_testkcsuser` WRITE;
INSERT INTO `AB_testkcsuser` (
  `uuid`,
  `properties`,
  `created_at`,
  `updated_at`,
  `label`,
  `user`
)
VALUES (
  "ae071b2a-0370-4dc7-bced-43e1d37171f3",
  NULL,
  NOW(),
  NOW(),
  "Mr. Admin",
  "admin"
) ON DUPLICATE KEY UPDATE `updated_at`=NOW();
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsCharacters` WRITE;
INSERT INTO `AB_kitchensink_testkcsCharacters` (`uuid`, `created_at`, `updated_at`, `properties`, `name`)
VALUES
  ('348b9e13-de18-48b4-a1e5-c6426c2f8296',NOW(),NOW(),NULL,'Sproket'),
  ('77486297-b265-4cd4-87bf-200756f1b85f',NOW(),NOW(),NULL,'Morganto'),
  ('fa9705f3-7fac-4099-b4db-96c8f1873a72',NOW(),NOW(),NULL,'Lester');
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsSpells` WRITE;
INSERT INTO `AB_kitchensink_testkcsSpells` (`uuid`, `created_at`, `updated_at`, `properties`, `name`)
VALUES
  ('8f07bf6a-5c9d-47ac-8fb1-f43a4bae4f36',NOW(),NOW(),NULL,'Frostbolt'),
  ('aeaa100a-0f7e-49fb-95ca-ffb789f09dbc',NOW(),NOW(),NULL,'Arcane Blast'),
  ('c6c2c8de-4f3c-4b41-b6ef-6858297bd327',NOW(),NOW(),NULL,'Fireball');
UNLOCK TABLES;

LOCK TABLES `AB_JOINMN_test-kcs-Charac_test-kcs-Spells_spells` WRITE;
INSERT INTO `AB_JOINMN_test-kcs-Charac_test-kcs-Spells_spells` (`id`, `created_at`, `updated_at`, `test-kcs-Characters`, `test-kcs-Spells`)
VALUES
  (4,NULL,NULL,'77486297-b265-4cd4-87bf-200756f1b85f','c6c2c8de-4f3c-4b41-b6ef-6858297bd327'),
  (11,NULL,NULL,'77486297-b265-4cd4-87bf-200756f1b85f','8f07bf6a-5c9d-47ac-8fb1-f43a4bae4f36'),
  (13,NULL,NULL,'fa9705f3-7fac-4099-b4db-96c8f1873a72','aeaa100a-0f7e-49fb-95ca-ffb789f09dbc'),
  (14,NULL,NULL,'fa9705f3-7fac-4099-b4db-96c8f1873a72','c6c2c8de-4f3c-4b41-b6ef-6858297bd327'),
  (15,NULL,NULL,'348b9e13-de18-48b4-a1e5-c6426c2f8296','aeaa100a-0f7e-49fb-95ca-ffb789f09dbc'),
  (16,NULL,NULL,'348b9e13-de18-48b4-a1e5-c6426c2f8296','8f07bf6a-5c9d-47ac-8fb1-f43a4bae4f36');
UNLOCK TABLES;


LOCK TABLES `AB_kitchensink_testkcsDCNoLink` WRITE;
## For Datacollection - No Link Tests
## NOTE: keep the UUID for "One"
INSERT INTO `AB_kitchensink_testkcsDCNoLink` (`uuid`, `created_at`, `updated_at`, `properties`, `text`)
VALUES
  ('3643aa6b-5c7f-4b1d-bef2-f8369fa9b182',NOW(),NOW(),NULL,'One'),
  (UUID(),NOW(),NOW(),NULL,'Two'),
  (UUID(),NOW(),NOW(),NULL,'Three');
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsForm2` WRITE;
INSERT INTO `AB_kitchensink_testkcsForm2` (`uuid`, `created_at`, `updated_at`, `properties`, `name`)
VALUES
  ('2e3f866d-a91e-465f-98cb-f725c9008c68','2024-04-22 22:16:30','2024-04-22 22:16:30',NULL,'Two'),
  ('df22c90f-d33b-4ce5-a332-8c6fbe8d1c39','2024-04-22 22:16:14','2024-04-22 22:16:14',NULL,'One');
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsForm2Link` WRITE;
INSERT INTO `AB_kitchensink_testkcsForm2Link` (`uuid`, `created_at`, `updated_at`, `properties`, `name`)
VALUES
  ('b0ff1e8c-8257-4076-a5e9-dff84d6cfe6e','2024-04-22 22:16:43','2024-04-22 22:16:43',NULL,'Link1');
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsText` WRITE;
INSERT INTO `AB_kitchensink_testkcsText` (`uuid`, `created_at`, `updated_at`, `properties`, `longtext`, `sort`)
VALUES
  (UUID(),NOW(),NOW(),NULL,'longtext',1);
UNLOCK TABLES;



LOCK TABLES `AB_kitchensink_testkcsDCRegion` WRITE;
/*!40000 ALTER TABLE `AB_kitchensink_testkcsDCRegion` DISABLE KEYS */;

INSERT INTO `AB_kitchensink_testkcsDCRegion` (`uuid`, `created_at`, `updated_at`, `properties`, `name`)
VALUES
	('018d67ad-2270-405f-b0c9-9d194dfc93ca','2025-05-29 08:15:16','2025-05-29 08:15:16',NULL,'C'),
	('5013baa1-681b-425b-984a-05bb543390ca','2025-05-29 08:15:06','2025-05-29 08:15:06',NULL,'A'),
	('c4a5c49f-a30d-458f-9033-e588ae7b18b8','2025-05-29 08:15:11','2025-05-29 08:15:11',NULL,'B');

/*!40000 ALTER TABLE `AB_kitchensink_testkcsDCRegion` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsDirectors` WRITE;
/*!40000 ALTER TABLE `AB_kitchensink_testkcsDirectors` DISABLE KEYS */;

INSERT INTO `AB_kitchensink_testkcsDirectors` (`uuid`, `created_at`, `updated_at`, `properties`, `name`)
VALUES
	('5f4a128b-620e-4263-ba95-5224d7dcc03f','2025-05-29 08:19:29','2025-05-29 08:19:29',NULL,'Lucas'),
	('6d9d6bb1-27a5-4185-8994-9332f5c8afcd','2025-05-29 08:19:43','2025-05-29 08:19:43',NULL,'Hausman'),
	('ecc703ac-ce37-4086-84da-6559ac3742bf','2025-05-29 08:19:35','2025-05-29 08:19:35',NULL,'Spielberg');

/*!40000 ALTER TABLE `AB_kitchensink_testkcsDirectors` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsDCMovie` WRITE;
/*!40000 ALTER TABLE `AB_kitchensink_testkcsDCMovie` DISABLE KEYS */;

INSERT INTO `AB_kitchensink_testkcsDCMovie` (`uuid`, `created_at`, `updated_at`, `properties`, `name`, `region`, `movie`)
VALUES
	('2817e6e0-c074-4bc5-8285-d6930516e3c4','2025-05-29 08:16:36','2025-05-29 08:16:36',NULL,'Matrix','c4a5c49f-a30d-458f-9033-e588ae7b18b8','6d9d6bb1-27a5-4185-8994-9332f5c8afcd'),
	('3f70abf2-05da-455a-9bf2-19320d09e91f','2025-05-29 08:16:54','2025-05-29 08:16:54',NULL,'Lord Of The Rings',NULL,NULL),
	('68f535e3-c51c-4298-8cd5-a1ecc2853976','2025-05-29 08:16:24','2025-05-29 08:16:24',NULL,'Star Wars','5013baa1-681b-425b-984a-05bb543390ca','5f4a128b-620e-4263-ba95-5224d7dcc03f');

/*!40000 ALTER TABLE `AB_kitchensink_testkcsDCMovie` ENABLE KEYS */;
UNLOCK TABLES;


