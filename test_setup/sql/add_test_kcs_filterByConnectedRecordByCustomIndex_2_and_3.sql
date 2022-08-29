LOCK TABLES `AB_testkcsfilterByConnectedRecordByCustomIndex2` WRITE;
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex2` (`uuid`, `name`) VALUES ("uuid21", "testcustom1");
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex2` (`uuid`, `name`) VALUES ("uuid22", "testcustom2");
UNLOCK TABLES;

LOCK TABLES `AB_testkcsfilterByConnectedRecordByCustomIndex3` WRITE;
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex3` (`uuid`, `name`, `connectto3`) VALUES ("uuid31", "testcustom1", "testcustom1");
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex3` (`uuid`, `name`, `connectto3`) VALUES ("uuid32", "testcustom1", "testcustom1");
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex3` (`uuid`, `name`, `connectto3`) VALUES ("uuid33", "testcustom2", "testcustom2");
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex3` (`uuid`, `name`, `connectto3`) VALUES ("uuid34", "testcustom3", "testcustom2");
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex3` (`uuid`, `name`, `connectto3`) VALUES ("uuid35", "testcustom4", "testcustom2");
INSERT INTO `AB_testkcsfilterByConnectedRecordByCustomIndex3` (`uuid`, `name`, `connectto3`) VALUES ("uuid36", "testcustom4", "testcustom2");
UNLOCK TABLES;