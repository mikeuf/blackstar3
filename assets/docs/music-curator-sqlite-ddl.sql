PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" TEXT NOT NULL CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY,
    "ProductVersion" TEXT NOT NULL
);
INSERT INTO __EFMigrationsHistory VALUES('20181111223542_InitialCreate','2.1.4-rtm-31024');
CREATE TABLE `Record` (
	`RecordID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`ReleaseDate`	NUMERIC,
	`Length`	INTEGER,
	`SKU`	TEXT,
	`RecordTitle`	TEXT
);
INSERT INTO Record VALUES(1,'2012-03-15','25 minutes','A001-01A12','Sweatin'' to the Renaissance');
INSERT INTO Record VALUES(3,'2017-10-23','47 minutes','A001-01A13','Beethoven Shmeethoven');
INSERT INTO Record VALUES(4,'2015-06-23','9 minutes','A001-01A14','Two Lyrics, One Song');
CREATE TABLE `Song` (
	`SongID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`SongTitle`	TEXT,
	`Tempo`	INTEGER,
	`TimeSignature`	TEXT
);
INSERT INTO Song VALUES(1,'Amazing Grace',60,'4/4');
INSERT INTO Song VALUES(2,'Battle Hymn of the Republic',90,'4/4');
INSERT INTO Song VALUES(3,'Greensleeves',80,'3/4');
INSERT INTO Song VALUES(4,'Eine Kleine Nachtmusik',110,'4/4');
INSERT INTO Song VALUES(5,'Ave Maria',70,'3/4');
INSERT INTO Song VALUES(6,'Misere Mei Deus',40,'4/4');
INSERT INTO Song VALUES(7,'Four Seasons',90,'4/4');
INSERT INTO Song VALUES(8,'Yankee Doodle',100,'4/4');
INSERT INTO Song VALUES(9,'Symphony No 5',120,'2/4');
INSERT INTO Song VALUES(10,'Symphony No 9',100,'4/4');
INSERT INTO Song VALUES(11,'Hallelujah',104,'4/4');
INSERT INTO Song VALUES(12,'My Country, ''Tis of Thee',80,'3/4');
INSERT INTO Song VALUES(13,'God Save the Queen',80,'3/4');
INSERT INTO Song VALUES(14,'God Save the King',80,'3/4');
CREATE TABLE `Composer` (
	`ComposerID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`FirstName`	TEXT,
	`LastName`	TEXT
);
INSERT INTO Composer VALUES(1,'Traditional','Traditional');
INSERT INTO Composer VALUES(2,'Ludwig','Beethoven');
INSERT INTO Composer VALUES(3,'George','Handel');
INSERT INTO Composer VALUES(4,'John','Newton');
INSERT INTO Composer VALUES(5,'Julia','Howe');
INSERT INTO Composer VALUES(6,'William','Steffe');
INSERT INTO Composer VALUES(7,'Gregorio','Allegri');
INSERT INTO Composer VALUES(8,'Charles','Jennens');
INSERT INTO Composer VALUES(9,'Henry','Carey');
INSERT INTO Composer VALUES(10,'Samuel','Smith');
CREATE TABLE `TrackListing` (
	`RecordID`	INTEGER,
	`SongID`	INTEGER,
	`TrackNum`	INTEGER,
  FOREIGN KEY(SongID) REFERENCES Song(SongID),
  FOREIGN KEY(RecordID) REFERENCES Record(RecordID)
);
INSERT INTO TrackListing VALUES(1,1,1);
CREATE TABLE `Credit` (
	`ComposerID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`SongID`	INTEGER,
  FOREIGN KEY(ComposerID) REFERENCES Composer(ComposerID),
  FOREIGN KEY(SongID) REFERENCES Song(SongID)
);
INSERT INTO Credit VALUES(1,1);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('Composer',10);
INSERT INTO sqlite_sequence VALUES('Song',14);
INSERT INTO sqlite_sequence VALUES('Record',4);
INSERT INTO sqlite_sequence VALUES('Credit',1);
COMMIT;
