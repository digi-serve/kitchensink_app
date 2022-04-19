LOCK TABLES `AB_testkcsscopeddata` WRITE;
INSERT INTO `AB_testkcsscopeddata` (`uuid`, `Scope`, `Name`) VALUES (UUID(), 'B', 'Banana');
INSERT INTO `AB_testkcsscopeddata` (`uuid`, `Scope`, `Name`) VALUES (UUID(), 'A', 'Apple');
UNLOCK TABLES;
