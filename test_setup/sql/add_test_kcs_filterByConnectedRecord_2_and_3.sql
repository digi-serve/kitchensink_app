LOCK TABLES `AB_testkcsfilterByConnectedRecord2` WRITE;
INSERT INTO `AB_testkcsfilterByConnectedRecord2` (`uuid`, `name`) VALUES ("uuid21", "test1");
INSERT INTO `AB_testkcsfilterByConnectedRecord2` (`uuid`, `name`) VALUES ("uuid22", "test2");
UNLOCK TABLES;

LOCK TABLES `AB_testkcsfilterByConnectedRecord3` WRITE;
INSERT INTO `AB_testkcsfilterByConnectedRecord3` (`uuid`, `name`, `connectto3452`) VALUES ("uuid31", "test1", "uuid21");
INSERT INTO `AB_testkcsfilterByConnectedRecord3` (`uuid`, `name`, `connectto3452`) VALUES ("uuid32", "test2", "uuid22");
INSERT INTO `AB_testkcsfilterByConnectedRecord3` (`uuid`, `name`, `connectto3452`) VALUES ("uuid33", "test3", "uuid22");
INSERT INTO `AB_testkcsfilterByConnectedRecord3` (`uuid`, `name`, `connectto3452`) VALUES ("uuid34", "test4", "uuid22");
UNLOCK TABLES;