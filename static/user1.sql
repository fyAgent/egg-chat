/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50639
Source Host           : localhost:3306
Source Database       : socket

Target Server Type    : MYSQL
Target Server Version : 50639
File Encoding         : 65001

Date: 2018-02-23 14:22:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '2323');
INSERT INTO `user` VALUES ('2', '23233');
INSERT INTO `user` VALUES ('3', '23232323');
INSERT INTO `user` VALUES ('4', '222');
INSERT INTO `user` VALUES ('5', '22');
INSERT INTO `user` VALUES ('6', '233333');
INSERT INTO `user` VALUES ('7', '23232333');
INSERT INTO `user` VALUES ('8', '0');
INSERT INTO `user` VALUES ('9', 'asdsadsd3');
INSERT INTO `user` VALUES ('10', 'sdsdsd');
INSERT INTO `user` VALUES ('11', 'wujiu');
INSERT INTO `user` VALUES ('12', 'ee');
INSERT INTO `user` VALUES ('13', 'dajin');
INSERT INTO `user` VALUES ('14', 'ss');
INSERT INTO `user` VALUES ('15', 'lala');
INSERT INTO `user` VALUES ('16', 'haha');
INSERT INTO `user` VALUES ('17', 'sda');
INSERT INTO `user` VALUES ('18', 'wee');
INSERT INTO `user` VALUES ('19', 'ssdd');
INSERT INTO `user` VALUES ('20', 'ha');
INSERT INTO `user` VALUES ('21', '1');
INSERT INTO `user` VALUES ('22', '2');
INSERT INTO `user` VALUES ('23', 'la');
INSERT INTO `user` VALUES ('24', 'yaya');
INSERT INTO `user` VALUES ('25', 'huahua');
SET FOREIGN_KEY_CHECKS=1;
