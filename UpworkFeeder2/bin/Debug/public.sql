/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 150003 (150003)
 Source Host           : localhost:5432
 Source Catalog        : upwork
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150003 (150003)
 File Encoding         : 65001

 Date: 14/07/2023 17:58:19
*/


-- ----------------------------
-- Sequence structure for tbl_message_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_message_id_seq";
CREATE SEQUENCE "public"."tbl_message_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for tbl_account
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_account";
CREATE TABLE "public"."tbl_account" (
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "profile" varchar(255) COLLATE "pg_catalog"."default",
  "state" varchar(255) COLLATE "pg_catalog"."default",
  "connects" int2,
  "rising_talent" varchar(255) COLLATE "pg_catalog"."default",
  "created_date" timestamp(0),
  "last_login_date" timestamp(0),
  "profile_title" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for tbl_application
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_application";
CREATE TABLE "public"."tbl_application" (
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "job_id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "profile" varchar(255) COLLATE "pg_catalog"."default",
  "proposal_json" json,
  "job_title" varchar(255) COLLATE "pg_catalog"."default",
  "state" varchar(255) COLLATE "pg_catalog"."default",
  "created_date" timestamp(0),
  "updated_date" timestamp(0),
  "succeed_date" timestamp(6),
  "channel" int4,
  "priority" int4,
  "job_country" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for tbl_message
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_message";
CREATE TABLE "public"."tbl_message" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_message_id_seq'::regclass),
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "job_id" varchar(255) COLLATE "pg_catalog"."default",
  "job_title" varchar(255) COLLATE "pg_catalog"."default",
  "client_name" varchar(255) COLLATE "pg_catalog"."default",
  "message_content" varchar(255) COLLATE "pg_catalog"."default",
  "message_link" varchar(255) COLLATE "pg_catalog"."default",
  "received_date" timestamp(0)
)
;

-- ----------------------------
-- Table structure for tbl_profile
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_profile";
CREATE TABLE "public"."tbl_profile" (
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "symbol" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "channel" int4,
  "script_filename" varchar(255) COLLATE "pg_catalog"."default",
  "require_count" int4,
  "min_number" int4,
  "max_number" int4,
  "state" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_message_id_seq"
OWNED BY "public"."tbl_message"."id";
SELECT setval('"public"."tbl_message_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table tbl_account
-- ----------------------------
ALTER TABLE "public"."tbl_account" ADD CONSTRAINT "tbl_account_pkey" PRIMARY KEY ("email");

-- ----------------------------
-- Primary Key structure for table tbl_application
-- ----------------------------
ALTER TABLE "public"."tbl_application" ADD CONSTRAINT "tbl_application_pkey" PRIMARY KEY ("email", "job_id");

-- ----------------------------
-- Primary Key structure for table tbl_message
-- ----------------------------
ALTER TABLE "public"."tbl_message" ADD CONSTRAINT "tbl_message_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table tbl_profile
-- ----------------------------
ALTER TABLE "public"."tbl_profile" ADD CONSTRAINT "unique_profile_symbol" UNIQUE ("symbol");

-- ----------------------------
-- Primary Key structure for table tbl_profile
-- ----------------------------
ALTER TABLE "public"."tbl_profile" ADD CONSTRAINT "tbl_profile_pkey" PRIMARY KEY ("id");
