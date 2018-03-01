/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50639
Source Host           : localhost:3306
Source Database       : socket

Target Server Type    : MYSQL
Target Server Version : 50639
File Encoding         : 65001

Date: 2018-02-28 17:57:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat` (
  `time` varchar(255) DEFAULT NULL COMMENT '时间戳',
  `nickName` varchar(255) NOT NULL COMMENT '昵称',
  `msg` varchar(255) DEFAULT '',
  `vip` int(255) DEFAULT '0',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
