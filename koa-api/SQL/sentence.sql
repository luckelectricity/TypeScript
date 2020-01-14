/*
 Navicat Premium Data Transfer
 Source Server         : island
 Source Server Type    : MySQL
 Source Server Version : 50505
 Source Host           : localhost
 Source Database       : island
 Target Server Type    : MySQL
 Target Server Version : 50505
 File Encoding         : utf-8
 Date: 05/17/2019 16:47:25 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS
= 0;

-- ----------------------------
--  Table structure for `sentence`
-- ----------------------------
DROP TABLE IF EXISTS `sentence`;
CREATE TABLE `sentence`
(
  `created_at` datetime DEFAULT NULL,
  `status` smallint
(6) DEFAULT NULL,
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `image` varchar
(64) DEFAULT NULL,
  `content` varchar
(300) DEFAULT NULL,
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint
(6) DEFAULT NULL,
  `title` varchar
(50) DEFAULT NULL,
  `type` int
(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY
(`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;
