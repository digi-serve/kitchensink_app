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

LOCK TABLES `AB_JOINMN_test-kcs-Charac_test-kcs-Spells_spells` WRITE;
TRUNCATE TABLE `AB_JOINMN_test-kcs-Charac_test-kcs-Spells_spells`;
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsCharacters` WRITE;
TRUNCATE TABLE `AB_kitchensink_testkcsCharacters`;
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsSpells` WRITE;
TRUNCATE TABLE `AB_kitchensink_testkcsSpells`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcsuser` WRITE;
TRUNCATE TABLE `AB_testkcsuser`;
UNLOCK TABLES;

LOCK TABLES `AB_testkcsprocessstock` WRITE;
TRUNCATE TABLE `AB_testkcsprocessstock`;
UNLOCK TABLES;

LOCK TABLES `AB_kitchensink_testkcsComments` WRITE;
TRUNCATE TABLE `AB_kitchensink_testkcsComments`;
UNLOCK TABLES;

LOCK TABLES `AB_JOINMN_test-kcs_test-kcs2_connecttoanoth` WRITE;
TRUNCATE TABLE `AB_JOINMN_test-kcs_test-kcs2_connecttoanoth`;
UNLOCK TABLES;

SET FOREIGN_KEY_CHECKS = 1;
