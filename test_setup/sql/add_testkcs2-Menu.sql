LOCK TABLES `AB_testkcs2` WRITE;
INSERT INTO `AB_testkcs2` (`uuid`, `created_at`, `updated_at`, `number2`, `connecttoanotherrecordmo`)
VALUES
   ('64269184-673f-4cfa-92b1-c5b8f8273217', NOW(), NOW(), "7", '68d42ff6-a474-443e-8416-3f9ce2ece08d'),
   (UUID(), NOW(), NOW(), "6", NULL),
   (UUID(), NOW(), NOW(), "5", NULL),
   (UUID(), NOW(), NOW(), "9", NULL),
   (UUID(), NOW(), NOW(), "3", NULL),
   (UUID(), NOW(), NOW(), "0", NULL),
   (UUID(), NOW(), NOW(), "5", NULL);
UNLOCK TABLES;

-- Connect the first test-kcs record to the first test-kcs2 record
LOCK TABLES `AB_testkcs` WRITE;
UPDATE `AB_testkcs`
SET `connecttoanotherrecordom`='64269184-673f-4cfa-92b1-c5b8f8273217',
    `connecttoanotherrecordoo`='64269184-673f-4cfa-92b1-c5b8f8273217'
WHERE `uuid`='68d42ff6-a474-443e-8416-3f9ce2ece08d';
UNLOCK TABLES;

LOCK TABLES `AB_JOINMN_test-kcs_test-kcs2_connecttoanoth` WRITE;
INSERT INTO `AB_JOINMN_test-kcs_test-kcs2_connecttoanoth`
   (`id`, `created_at`, `updated_at`, `test-kcs`, `test-kcs2`)
VALUES (1, NOW(), NOW(), '68d42ff6-a474-443e-8416-3f9ce2ece08d', '64269184-673f-4cfa-92b1-c5b8f8273217');
UNLOCK TABLES;
