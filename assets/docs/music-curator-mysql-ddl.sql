CREATE TABLE `Record` (
 `RecordNum` int(3) NOT NULL default '0',
 `ReleaseDate` date default NULL,
 `Format` enum('LP','EP','Single','Double LP','Video','Box Set') default NULL,
 `Length` int(11) default NULL,
 `SKU` varchar(20) NOT NULL,
 `RecordTitle` varchar(80) default NULL,
 PRIMARY KEY (`RecordNum`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `Lyric` (
 `LyricID` int(11) NOT NULL default '0',
 `LyricTitle` varchar(80) default NULL,
 `Words` text,
 PRIMARY KEY (`LyricID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `Song` (
 `SongID` int(11) NOT NULL default '0',
 `Tempo` float default NULL,
 `TimeSig` char(10) default NULL,
 `FileName` char(80) default NULL,
 `SongTitle` varchar(80) default NULL,
 `LyricID` int(11) default NULL,
 PRIMARY KEY (`SongID`),
 KEY `LyricID` (`LyricID`),
 CONSTRAINT `Song_ibfk_1` FOREIGN KEY (`LyricID`) REFERENCES `Lyric` (`lyricID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `Composer` (
 `ComposerID` int(7) NOT NULL default '0',
 `FirstName` varchar(20) default NULL,
 `LastName` varchar(20) default NULL,
 PRIMARY KEY (`ComposerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `TrackListing` (
 `RecordNum` int(3) default NULL,
 `SongID` int(11) default NULL,
 `TrackNum` int(4) default NULL,
 KEY `RecordNum` (`RecordNum`),
 KEY `SongID` (`SongID`),
 CONSTRAINT `TrackListing_ibfk_2` FOREIGN KEY (`SongID`) REFERENCES `Song`
(`SongID`),
 CONSTRAINT `TrackListing_ibfk_1` FOREIGN KEY (`RecordNum`) REFERENCES `Record`
(`RecordNum`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `CreditMusic` (
 `ComposerID` int(7) default NULL,
 `SongID` int(11) default NULL,
 KEY `ComposerID` (`ComposerID`),
 KEY `SongID` (`SongID`),
 CONSTRAINT `CreditMusic_ibfk_1` FOREIGN KEY (`ComposerID`) REFERENCES
`Composer` (`ComposerID`),
 CONSTRAINT `CreditMusic_ibfk_2` FOREIGN KEY (`SongID`) REFERENCES `Song`
(`SongID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `CreditLyric` (
 `ComposerID` int(7) default NULL,
 `LyricID` int(11) default NULL,
 KEY `ComposerID` (`ComposerID`),
 KEY `LyricID` (`LyricID`),
 CONSTRAINT `CreditLyric_ibfk_1` FOREIGN KEY (`ComposerID`) REFERENCES
`Composer` (`ComposerID`),
 CONSTRAINT `CreditLyric_ibfk_2` FOREIGN KEY (`LyricID`) REFERENCES `Lyric` (`LyricID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
