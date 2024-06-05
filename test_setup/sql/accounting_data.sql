SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `AB_AccountingApp_Account`;
TRUNCATE TABLE `AB_AccountingApp_FiscalYear`;
TRUNCATE TABLE `AB_Profile_MinistryTeam`;
TRUNCATE TABLE `AB_Profile_Operations`;
TRUNCATE TABLE `AB_MyTeamFinance_ResponsibilityCenter`;
TRUNCATE TABLE `AB_AccountingApp_MCC`;
TRUNCATE TABLE `AB_Profile_Person`;
TRUNCATE TABLE `AB_AccountingApp_Journal`;
TRUNCATE TABLE `AB_AccountingApp_Batch`;
TRUNCATE TABLE `AB_Profile_Role`;
TRUNCATE TABLE `AB_Profile_Assignments`;
TRUNCATE TABLE `AB_ExpenseSource`;
TRUNCATE TABLE `AB_AccountingApp_FiscalMonth`;
TRUNCATE TABLE `AB_AccountingApp_JournalEntry`;

SET FOREIGN_KEY_CHECKS = 1;

DROP PROCEDURE IF EXISTS `GENERATE_SERIES`;
DELIMITER $$
CREATE PROCEDURE `GENERATE_SERIES`(
	IN NUM INT
)
BEGIN
	DROP TEMPORARY TABLE IF EXISTS SERIES;
	CREATE TEMPORARY TABLE SERIES (Num INT);
	SET @i = 1;  
    WHILE @i <= NUM DO
		INSERT INTO SERIES (Num) VALUES (@i);
		SET @i = @i + 1;
	END WHILE;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS `MAKE_1_TO_M_RELATION`;
DELIMITER $$
CREATE PROCEDURE `MAKE_1_TO_M_RELATION`(
	IN SourceTableName NVARCHAR(128),
    IN TargetTableName NVARCHAR(128),
    IN LinkColumnName NVARCHAR(128),
    IN TargetColumnName NVARCHAR(128)
)
BEGIN
	SET SourceTableName = CONCAT_WS('', '`', SourceTableName, '`');
    SET TargetTableName = CONCAT_WS('', '`', TargetTableName, '`');
    SET LinkColumnName = CONCAT_WS('', '`', LinkColumnName, '`');
    SET TargetColumnName = CONCAT_WS('', '`', TargetColumnName, '`');

	SET @sqlCheck = CONCAT_WS(' ', 
						'SELECT COUNT(*) < 1 FROM', SourceTableName, 
                        'WHERE', LinkColumnName, 'IS NULL', 
                        'INTO @isDone');
	PREPARE execCheck FROM @sqlCheck;
	EXECUTE execCheck;
    
    WHILE @isDone != TRUE DO
		-- FIND a record that no relation
		SET @sqlFind = CONCAT_WS(' ', 
						'SELECT `uuid` FROM', SourceTableName, 
                        'WHERE', LinkColumnName, 'IS NULL', 
                        'ORDER BY RAND()',
                        'LIMIT 1 INTO @sourceRowId');
		PREPARE execFind FROM @sqlFind;
		EXECUTE execFind;

		-- GET a target record by random
		SET @sqlTarget = CONCAT_WS(' ', 
						'SELECT', TargetColumnName, 'FROM', TargetTableName,
                        'ORDER BY RAND()', 
                        'LIMIT 1 INTO @targetRowId');
		PREPARE execTarget FROM @sqlTarget;
		EXECUTE execTarget;
        
        -- MAKE the relation
		SET @sqlRelate = CONCAT_WS(' ', 'UPDATE', SourceTableName, 'SET', LinkColumnName, '=', QUOTE(@targetRowId), 'WHERE `uuid` =', QUOTE(@sourceRowId));
		PREPARE execRelate FROM @sqlRelate;
		EXECUTE execRelate;
        
        EXECUTE execCheck;
	END WHILE;

	DEALLOCATE PREPARE execCheck;
	DEALLOCATE PREPARE execFind;
    DEALLOCATE PREPARE execTarget;
    DEALLOCATE PREPARE execRelate;
END$$
DELIMITER ;

/* DROP PROCEDURE IF EXISTS `MAKE_M_TO_N_RELATION`;
DELIMITER $$
CREATE PROCEDURE `MAKE_M_TO_N_RELATION`(
	IN SourceTableName NVARCHAR(128),
    IN TargerTableName NVARCHAR(128),
    IN JoinTableName NVARCHAR(128)
)
BEGIN
END$$
DELIMITER ; */

SET @NUMBER_OF_MinistryTeam = 100;
SET @NUMBER_OF_QXCenter = 20;
SET @NUMBER_OF_ResponsibilityCenter = 30;
SET @NUMBER_OF_MCC = 50;
SET @NUMBER_OF_PersonProfile = 50;
SET @NUMBER_OF_App_Journal = 10;
SET @NUMBER_OF_Batch = 20;
SET @NUMBER_OF_Role = 10;
SET @NUMBER_OF_Assignments = 2;
SET @NUMBER_OF_ExpenseSource = 20;
SET @NUMBER_OF_FiscalMonth = 10;
SET @NUMBER_OF_JournalEntry = 10;

DROP TABLE IF EXISTS ACCOUNT_NUMBER;
CREATE TEMPORARY TABLE ACCOUNT_NUMBER (Num INT, Category VARCHAR(255));
INSERT INTO ACCOUNT_NUMBER (Num, Category)
VALUES
  -- ASSETS '1585806356532'
  (1000, "1585806356532"),
  (1221, "1585806356532"),
  (1222, "1585806356532"),
  (1231, "1585806356532"),
  (1232, "1585806356532"),
  (1241, "1585806356532"),
  (1251, "1585806356532"),
  (1291, "1585806356532"),
  (1491, "1585806356532"),
  (1591, "1585806356532"),
  (1611, "1585806356532"),
  (1721, "1585806356532"),
  (11101, "1585806356532"),
  (11102, "1585806356532"),
  (11103, "1585806356532"),
  (11121, "1585806356532"),
  -- LIABILITIES '1585806356570'
  (2111, "1585806356570"),
  (2211, "1585806356570"),
  (2221, "1585806356570"),
  (2231, "1585806356570"),
  (2241, "1585806356570"),
  (2291, "1585806356570"),
  -- EQUITY '1585806356643'
  (3500, "1585806356643"),
  (3991, "1585806356643"),
  -- INCOME '1590392412833'
  (4391, "1590392412833"),
  (4411, "1590392412833"),
  (4911, "1590392412833"),
  (4912, "1590392412833"),
  (4921, "1590392412833"),
  (4991, "1590392412833"),
  (5111, "1590392412833"),
  (5611, "1590392412833"),
  (5621, "1590392412833"),
  (9111, "1590392412833"),
  (9121, "1590392412833"),
  (9191, "1590392412833"),
  -- EXPENSE '1585806356789'
  (6111, "1590392412833"),
  (6611, "1590392412833"),
  (6621, "1590392412833"),
  (7111, "1590392412833"),
  (7131, "1590392412833"),
  (7211, "1590392412833"),
  (8111, "1590392412833"),
  (8121, "1590392412833"),
  (8491, "1590392412833"),
  (8611, "1590392412833"),
  (8711, "1590392412833"),
  (8721, "1590392412833"),
  (8911, "1590392412833"),
  (8921, "1590392412833"),
  (8941, "1590392412833"),
  (8991, "1590392412833"),
  (9511, "1590392412833"),
  (9591, "1590392412833");

INSERT INTO `AB_AccountingApp_Account` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `Acct Num`,
  `Active`,
  `translations`,
  `Category`
)
SELECT
  UUID(),
  NOW(),
  NOW(),
  Num,
  "1",
  CAST(CONCAT("[{ \"language_code\": \"en\",\"Description\": \"Account ", Num, "\", \"Type\":\"\"}]") AS CHAR),
  Category
FROM ACCOUNT_NUMBER;

-- Fiscal Year
INSERT INTO `AB_AccountingApp_FiscalYear` (`uuid`, `created_at`, `updated_at`, `FYear`, `Start`, `End`, `Status`)
VALUES
  (UUID(), NOW(), NOW(), "FY2023", "2022-07-01", "2023-06-30", "1594114975138"), -- status: closed
  (UUID(), NOW(), NOW(), "FY2024", "2023-07-01", "2024-06-30", "1594114974934");  -- status: active


-- Ministry Teams
DROP TEMPORARY TABLE IF EXISTS TEAM_TYPE;
DROP TEMPORARY TABLE IF EXISTS MCC_TYPE;
CREATE TEMPORARY TABLE TEAM_TYPE (`Type` VARCHAR(255));
CREATE TEMPORARY TABLE MCC_TYPE (`MCC` VARCHAR(255));
INSERT INTO TEAM_TYPE(`Type`) VALUES ("GCM"),("其他"),("国家"),("行政"),("城市"),("禾场");
INSERT INTO MCC_TYPE(`MCC`) VALUES ("1612509311164"), ("1612509311257"), ("1612509311344"), ("1612509311592"), ("1612509311638");
CALL `GENERATE_SERIES`(@NUMBER_OF_MinistryTeam);
INSERT INTO `AB_Profile_MinistryTeam` (`uuid`, `created_at`, `updated_at`, `Name`, `Type`, `MCC`)
SELECT 
	UUID() AS `uuid`,
	NOW() AS `created_at`,
	NOW() AS `updated_at`,
	CONCAT('Team ', Num) AS Name,
	(SELECT `Type` FROM TEAM_TYPE ORDER BY RAND() LIMIT 1) AS `Type`,
	(SELECT `MCC` FROM MCC_TYPE ORDER BY RAND() LIMIT 1) AS `MCC`
FROM
	SERIES;

-- QX Center
CALL `GENERATE_SERIES`(@NUMBER_OF_QXCenter);
INSERT INTO `AB_Profile_Operations` (`uuid`, `created_at`, `updated_at`, `QX Code`, `Ops Title`)
SELECT
	UUID() AS `uuid`,
	NOW() AS `created_at`,
	NOW() AS `updated_at`,
	CONCAT('QX Code ', Num) AS `QX Code`,
    CONCAT('Ops ', Num) AS `Ops Title`
FROM
	SERIES;

-- Responsibility Center
DROP TEMPORARY TABLE IF EXISTS RC_TYPE;
DROP TEMPORARY TABLE IF EXISTS RC_CPR;
CREATE TEMPORARY TABLE RC_TYPE(`Type` VARCHAR(255));
CREATE TEMPORARY TABLE RC_CPR(`CPR` VARCHAR(255));
INSERT INTO RC_TYPE(`Type`) VALUES ("1586864550294"), ("1586864550332"), ("Advance"), ("Control");
INSERT INTO RC_CPR(`CPR`) VALUES ("1587546198443"), ("1587546198555"), ("1587546198628");
CALL `GENERATE_SERIES`(@NUMBER_OF_ResponsibilityCenter);
INSERT INTO `AB_MyTeamFinance_ResponsibilityCenter` 
(`uuid`, `created_at`, `updated_at`, `Active`, `RC Name`, `Description`, `Type`, `CPR Designation`, `Subaccount Code`)
-- TODO: Number
-- `availablefunds`, `Pending JE`, `Pending SW2`, `GL Balance`
SELECT
	UUID() AS `uuid`,
	NOW() AS `created_at`,
	NOW() AS `updated_at`,
	1 AS `Active`,
    CONCAT('RC ', Num) AS `RC Name`,
    CONCAT('Description ', Num) AS `Description`,
    (SELECT `Type` FROM RC_TYPE ORDER BY RAND() LIMIT 1) AS `Type`,
    (SELECT `CPR` FROM RC_CPR ORDER BY RAND() LIMIT 1) AS `CPR Designation`,
    CONCAT('Subaccount ', Num) AS `Subaccount Code`
FROM
	SERIES;

-- MCCcode
CALL `GENERATE_SERIES`(@NUMBER_OF_MCC);
INSERT INTO `AB_AccountingApp_MCC` 
(`uuid`, `created_at`, `updated_at`, `MCC Num`, `MCC Name`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
    CONCAT('MCC ', Num) AS `MCC Num`,
	CONCAT('MCCName ', Num) AS `MCC Name`
FROM
    SERIES;


-- Person - Profile
DROP TEMPORARY TABLE IF EXISTS PERSON_TYPE;
CREATE TEMPORARY TABLE PERSON_TYPE (`Type` VARCHAR(255));
INSERT INTO PERSON_TYPE(`Type`) VALUES ("1578883884352"),("1578883884425"),("1578883884498"),("1578883884571"),("1578883884644"),("1578883884717"),("1600735854064"),("1600921729237"),("1600921729296");
DROP TEMPORARY TABLE IF EXISTS GENDERS;
CREATE TEMPORARY TABLE GENDERS (`Type` VARCHAR(255));
INSERT INTO GENDERS(`Type`) VALUES ("1578883884926"),("1578883884999");
DROP TEMPORARY TABLE IF EXISTS MARITAL;
CREATE TEMPORARY TABLE MARITAL (`TYPE` VARCHAR(255));
INSERT INTO MARITAL(`TYPE`) VALUES ("1578883885505"),("1578883885578"),("1578883885657"),("1578883885730"),("1582105688263");
CALL `GENERATE_SERIES`(@NUMBER_OF_PersonProfile);

INSERT INTO `AB_Profile_Person` 
(`uuid`, `created_at`, `updated_at`, `Given Name`, `Surname`,`Birth Date`,`Person Type`,`Gender`,`Marital Status`,`Preferred Name`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
	CONCAT('Name', Num) AS `Given Name`,
	CONCAT('Surname', Num) AS `Surname`,
	CURRENT_DATE - INTERVAL FLOOR(RAND() * 14) DAY AS `Birth Date`,
	(SELECT `Type` FROM PERSON_TYPE ORDER BY RAND() LIMIT 1) AS `Person Type`,
	(SELECT `Type` FROM GENDERS ORDER BY RAND() LIMIT 1) AS `Gender`,
	(SELECT `Type` FROM MARITAL ORDER BY RAND() LIMIT 1) AS `Marital Status`,
	CONCAT('Preferred Name', Num) AS `Preferred Name`
FROM
    SERIES;


-- Journal
CALL `GENERATE_SERIES`(@NUMBER_OF_App_Journal);
INSERT INTO `AB_AccountingApp_Journal` 
(`uuid`, `created_at`, `updated_at`, `Jrn Code`, `Date`,`Description`,`Active`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
	CONCAT('JrnCode', Num) AS `Jrn Code`,
	CURDATE() AS `Date`,
    CONCAT('Description', Num) AS `Description`,
    ROUND(RAND(), 0) AS `Active`
FROM
    SERIES;
    

-- Batch
DROP TEMPORARY TABLE IF EXISTS BATCH_STATUS;
CREATE TEMPORARY TABLE BATCH_STATUS (`TYPE` VARCHAR(255));
INSERT INTO BATCH_STATUS(`TYPE`) VALUES ("1586248358699"),("1586248358737"),("1586248358810");
CALL `GENERATE_SERIES`(@NUMBER_OF_Batch);
INSERT INTO `AB_AccountingApp_Batch` 
(`uuid`, `created_at`, `updated_at`, `Status`, `Note`,`date`,`Process Use`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
	(SELECT `TYPE` FROM BATCH_STATUS ORDER BY RAND() LIMIT 1) AS `Status`,
	CONCAT('Note', Num) AS `Note`,
	CURDATE() AS `date`,
    CONCAT('Process Use', Num)  AS `Process Use`
FROM
    SERIES;

-- Role
CALL `GENERATE_SERIES`(@NUMBER_OF_Role);
INSERT INTO `AB_Profile_Role` 
(`uuid`, `created_at`, `updated_at`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`
FROM
    SERIES;
    
-- Assignments
CALL `GENERATE_SERIES`(@NUMBER_OF_Assignments);
INSERT INTO `AB_Profile_Assignments` 
(`uuid`, `created_at`, `updated_at`,`Assignment Start`,`Assignment End`,`Is Primary Assignment`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
    CURDATE() AS `Assignment Start`,
    CURDATE() AS `Assignment End`,
	ROUND(RAND(), 0) AS `Is Primary Assignment`
FROM
    SERIES;
    
    
-- ExpenseSource
CALL `GENERATE_SERIES`(@NUMBER_OF_ExpenseSource);
INSERT INTO `AB_ExpenseSource` 
(`uuid`, `created_at`, `updated_at`,`Expense Source`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
    CONCAT('Description', Num) AS `Expense Source`
FROM
    SERIES;
    
-- FiscalMonth
DROP TEMPORARY TABLE IF EXISTS FiscalMonth_STATUS;
CREATE TEMPORARY TABLE FiscalMonth_STATUS (`TYPE` VARCHAR(255));
INSERT INTO FiscalMonth_STATUS(`TYPE`) VALUES ("1592549785894"),("1592549785939"),("1592549786026"),("1592549786113");
DROP TEMPORARY TABLE IF EXISTS FiscalMonth_Process;
CREATE TEMPORARY TABLE FiscalMonth_Process (`TYPE` VARCHAR(255));
INSERT INTO FiscalMonth_Process(`TYPE`) VALUES ("In use"),("Closing"),("Closed"),("Next For Use");

CALL `GENERATE_SERIES`(@NUMBER_OF_FiscalMonth);
INSERT INTO `AB_AccountingApp_FiscalMonth` 
(`uuid`, `created_at`, `updated_at`,`FY Per`,`Start`,`End`,`Open`,`Status`,`Current Process`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
    CONCAT('FY Per', Num) AS `FY Per`,
	CURDATE() AS `Start`,
    CURDATE() AS `End`,
	ROUND(RAND(), 0) AS `Open`,
    (SELECT `Type` FROM FiscalMonth_STATUS ORDER BY RAND() LIMIT 1) AS `Status`,
	(SELECT `Type` FROM FiscalMonth_Process ORDER BY RAND() LIMIT 1) AS `Current Process`
FROM
    SERIES;
    
CALL `GENERATE_SERIES`(@NUMBER_OF_JournalEntry);
INSERT INTO `AB_AccountingApp_JournalEntry` 
(`uuid`, `created_at`, `updated_at`,`Date`,`Ref Name`,`Memo`,`Debit`,`Credit`,`Approval Note`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
	CURDATE() AS `Date`,
    CONCAT('Ref Name', Num) AS `Ref Name`,
    CONCAT('Memo', Num) AS `Memo`,    
	round(RAND() * (10000 - 1 + 1), 2) AS `Debit`,
    round(RAND() * (10000 - 1 + 1), 2) AS `Credit`,
    CONCAT('Approval Note', Num) AS `Approval Note`
FROM
    SERIES;   

-- Ministry Team => QX Center
CALL `MAKE_1_TO_M_RELATION`("AB_Profile_MinistryTeam", "AB_Profile_Operations", "QX Center", "QX Code");

-- RC => QX Center
CALL `MAKE_1_TO_M_RELATION`("AB_MyTeamFinance_ResponsibilityCenter", "AB_Profile_Operations", "QX Code", "QX Code");

-- RC => Ministry Team
CALL `MAKE_1_TO_M_RELATION`("AB_MyTeamFinance_ResponsibilityCenter", "AB_Profile_MinistryTeam", "Responsibility Center406", "Name");

-- RC => MCC
CALL `MAKE_1_TO_M_RELATION`("AB_MyTeamFinance_ResponsibilityCenter", "AB_AccountingApp_MCC", "MCCcode", "MCC Num");

-- Batch => Journal
CALL `MAKE_1_TO_M_RELATION`("AB_AccountingApp_Batch", "AB_AccountingApp_Journal", "Jrn Code", "Jrn Code");

-- Assignments => Ministry Team
CALL `MAKE_1_TO_M_RELATION`("AB_Profile_Assignments", "AB_Profile_MinistryTeam", "Ministry Team", "uuid");

-- Assignments => Role
CALL `MAKE_1_TO_M_RELATION`("AB_Profile_Assignments", "AB_Profile_Role", "Role195", "uuid");

-- Assignments => Person
CALL `MAKE_1_TO_M_RELATION`("AB_Profile_Assignments", "AB_Profile_Person", "personTeam", "UniquePerson");

-- ExpenseSource => Account
CALL `MAKE_1_TO_M_RELATION`("AB_ExpenseSource", "AB_AccountingApp_Account", "ExpenseCOA", "Acct Num");

-- FiscalMonth => FiscalYear
CALL `MAKE_1_TO_M_RELATION`("AB_AccountingApp_FiscalMonth", "AB_AccountingApp_FiscalYear", "FYear", "FYear");

-- JournalEntry => Batch
CALL `MAKE_1_TO_M_RELATION`("AB_AccountingApp_JournalEntry", "AB_AccountingApp_Batch", "Batch Index", "Batch Index");

-- JournalEntry => Account
CALL `MAKE_1_TO_M_RELATION`("AB_AccountingApp_JournalEntry", "AB_AccountingApp_Account", "Account", "Acct Num");

-- JournalEntry => Projectw
-- CALL `MAKE_1_TO_M_RELATION`("AB_AccountingApp_JournalEntry", "AB_Projectw", "Project", "uuid");

-- JournalEntry => Projectw
CALL `MAKE_1_TO_M_RELATION`("AB_AccountingApp_JournalEntry", "AB_MyTeamFinance_ResponsibilityCenter", "RC Code", "RC Name");
