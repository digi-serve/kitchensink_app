SET FOREIGN_KEY_CHECKS = 0;
LOCK TABLES `AB_testkcs` WRITE;

SET @LinkVal = (SELECT `uuid` FROM `AB_testkcs2` LIMIT 1);

UPDATE `AB_testkcs` SET `connecttoanotherrecordom` = @LinkVal
WHERE `checkbox` = "1" OR `checkbox` IS TRUE;

UNLOCK TABLES;
SET FOREIGN_KEY_CHECKS = 1;
