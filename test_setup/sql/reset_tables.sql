SET FOREIGN_KEY_CHECKS = 0;
LOCK TABLES `AB_testkcs` WRITE;
TRUNCATE TABLE `AB_testkcs`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcs2` WRITE;
TRUNCATE TABLE `AB_testkcs2`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcsforms` WRITE;
TRUNCATE TABLE `AB_testkcsforms`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcskeya` WRITE;
TRUNCATE TABLE `AB_testkcskeya`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcskeyb` WRITE;
TRUNCATE TABLE `AB_testkcskeyb`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcs` WRITE;
TRUNCATE TABLE `AB_testkcs`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcsscopeddata` WRITE;
TRUNCATE TABLE `AB_testkcsscopeddata`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcsonCreate` WRITE;
TRUNCATE TABLE `AB_testkcsonCreate`;
UNLOCK TABLES;

SET FOREIGN_KEY_CHECKS = 1;
