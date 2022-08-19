-- CreateTable
CREATE TABLE `hibernate_sequence` (
    `next_val` BIGINT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `life_dependant_profile` (
    `id` BIGINT NOT NULL,
    `capture_date` DATETIME(0) NULL,
    `company_code` VARCHAR(255) NULL,
    `date_joined` VARCHAR(255) NULL,
    `date_of_birth` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `first_name` VARCHAR(255) NULL,
    `gender` VARCHAR(255) NULL,
    `initials` VARCHAR(255) NULL,
    `is_capture_complete` BIT(1) NULL,
    `is_processed` BIT(1) NULL,
    `last_name` VARCHAR(255) NULL,
    `member_number` VARCHAR(255) NULL,
    `mobile` VARCHAR(255) NULL,
    `msisdn` VARCHAR(255) NULL,
    `national_id` VARCHAR(255) NULL,
    `premium` DOUBLE NULL,
    `relationship` VARCHAR(255) NULL,
    `scheme_code` VARCHAR(255) NULL,
    `scheme_name` VARCHAR(255) NULL,
    `session_id` VARCHAR(255) NULL,
    `suffix` INTEGER NULL,
    `title` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member_application` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `application_channel` CHAR(30) NULL,
    `carrier` VARCHAR(15) NULL,
    `first_name` CHAR(120) NULL,
    `last_name` CHAR(120) NULL,
    `initials` CHAR(12) NULL,
    `title` CHAR(12) NULL,
    `email` CHAR(120) NULL DEFAULT '',
    `msisdn` CHAR(30) NULL,
    `national_id` CHAR(50) NULL,
    `company_code` CHAR(50) NULL,
    `date_joined` CHAR(10) NULL,
    `date_of_birth` CHAR(10) NULL,
    `scheme_code` CHAR(12) NULL,
    `address_line1` CHAR(120) NULL,
    `address_line2` CHAR(120) NULL,
    `city` CHAR(40) NULL,
    `nok_first_name` CHAR(120) NULL,
    `nok_last_name` CHAR(120) NULL,
    `nok_initials` CHAR(12) NULL,
    `nok_msisdn` CHAR(120) NULL,
    `nok_national_id` CHAR(50) NULL,
    `nok_relationship_code` CHAR(20) NULL,
    `nok_date_of_birth` CHAR(10) NULL,
    `nok_address_line1` CHAR(160) NULL,
    `nok_address_line2` CHAR(160) NULL,
    `DateCaptured` DATETIME(0) NULL,
    `SessionId` CHAR(40) NULL,
    `member_number` CHAR(30) NULL,
    `date_processed` DATETIME(0) NULL,
    `is_processed` BIT(1) NULL,
    `status_code` CHAR(10) NULL,
    `date_captured` DATETIME(0) NULL,
    `current_dep_number` INTEGER NULL,
    `gender` VARCHAR(255) NULL,
    `session_id` VARCHAR(255) NULL,
    `agent_code` VARCHAR(255) NULL,
    `product_name` VARCHAR(255) NULL,
    `completeness` DOUBLE NULL,
    `is_rejected` BIT(1) NULL,
    `processed_by` VARCHAR(255) NULL,
    `dependants_exported_indicator` BIT(1) NULL,
    `dependant_export_date` DATETIME(0) NULL,
    `exported_indicator` BIT(1) NULL,
    `export_date` DATETIME(0) NULL,
    `export_number` INTEGER NULL,
    `marital_status` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member_number_control` (
    `id` BIGINT NOT NULL,
    `date_generated` DATETIME(0) NULL,
    `generated_member_number` VARCHAR(12) NULL,
    `length` INTEGER NULL,
    `padding_character` VARCHAR(1) NULL,
    `prefix` VARCHAR(3) NULL,
    `scheme` VARCHAR(12) NULL,
    `sequence_number` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member_relationship` (
    `relationship_id` INTEGER NOT NULL,
    `relationship` VARCHAR(15) NULL,

    PRIMARY KEY (`relationship_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member_title` (
    `title_id` INTEGER NOT NULL,
    `title` VARCHAR(15) NULL,

    PRIMARY KEY (`title_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `active` BIT(1) NULL,
    `date_created` DATETIME(0) NULL,
    `date_modified` DATETIME(0) NULL,
    `request_date` DATETIME(0) NULL,
    `version` BIGINT NULL,
    `amount` DOUBLE NULL,
    `channel` INTEGER NULL,
    `customer_number` VARCHAR(255) NULL,
    `mobile_number` VARCHAR(255) NULL,
    `reference` VARCHAR(255) NULL,
    `status` INTEGER NULL,
    `created_by` VARCHAR(50) NOT NULL,
    `created_date` DATETIME(0) NULL,
    `last_modified_by` VARCHAR(50) NULL,
    `last_modified_date` DATETIME(0) NULL,
    `customerNumber` VARCHAR(255) NULL,
    `mobileNumber` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_agent` (
    `agent_code` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `first_name` VARCHAR(255) NULL,
    `initials` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `msisdn` VARCHAR(255) NULL,
    `national_id` VARCHAR(255) NULL,
    `region` VARCHAR(255) NULL,
    `gender` VARCHAR(255) NULL,
    `suffix` INTEGER NULL,
    `unit` VARCHAR(255) NULL,
    `dob` CHAR(30) NULL,
    `Joining_Date` CHAR(30) NULL,
    `address` CHAR(255) NULL,

    PRIMARY KEY (`agent_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sms` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `date_generated` DATETIME(0) NULL,
    `date_sent` DATETIME(0) NULL,
    `destination` VARCHAR(255) NULL,
    `message_date` VARCHAR(255) NULL,
    `message_reference` VARCHAR(255) NULL,
    `message_text` VARCHAR(255) NULL,
    `msisdn` VARCHAR(255) NULL,
    `originator` VARCHAR(255) NULL,
    `sent_indicator` BIT(1) NULL,
    `source_application` VARCHAR(255) NULL,
    `status` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sms_template` (
    `template_id` BIGINT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(20) NULL,
    `is_dynamic` BIT(1) NULL,
    `node` VARCHAR(12) NULL,
    `root_module` VARCHAR(20) NULL,
    `template_text` VARCHAR(800) NULL,
    `web_service_host_address` VARCHAR(20) NULL,
    `web_service_method` VARCHAR(50) NULL,

    PRIMARY KEY (`template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `username` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `created_by` VARCHAR(50) NOT NULL,
    `created_date` DATETIME(0) NULL,
    `last_modified_by` VARCHAR(50) NULL,
    `last_modified_date` DATETIME(0) NULL,
    `version` BIGINT NOT NULL,
    `active` BIT(1) NOT NULL,
    `date_of_birth` DATE NULL,
    `device_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `first_name` VARCHAR(255) NULL,
    `gender` VARCHAR(255) NULL,
    `id_number` VARCHAR(255) NULL,
    `imei` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `marital_status` VARCHAR(255) NULL,
    `mobile_number` VARCHAR(255) NULL,
    `otp_enabled` BIT(1) NOT NULL,
    `physical_address` VARCHAR(255) NULL,
    `pin` VARCHAR(4) NULL,
    `title` VARCHAR(255) NULL,
    `user_name` VARCHAR(255) NULL,

    UNIQUE INDEX `UK_ob8kqyqqgmefl0aco34akdtpe`(`email`),
    UNIQUE INDEX `UK_893geq5bxk3o6gh642gh6cyic`(`id_number`),
    UNIQUE INDEX `UK_lt2b8ocin3hdnm9q6fm4o8xnr`(`mobile_number`),
    UNIQUE INDEX `UK_lqjrcobrh9jc8wpcar64q1bfh`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_role` (
    `user_id` BIGINT NOT NULL,
    `role_id` BIGINT NOT NULL,

    INDEX `FKa68196081fvovjhkek5m97n3y`(`role_id`),
    PRIMARY KEY (`user_id`, `role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ussd_menu` (
    `menu_id` BIGINT NOT NULL AUTO_INCREMENT,
    `application_id` VARCHAR(255) NULL,
    `menu_prompt` CHAR(160) NULL,
    `parent_menu_id` BIGINT NULL,
    `node` VARCHAR(12) NULL,
    `node_root` INTEGER NULL,
    `node_trunk` INTEGER NULL,
    `node_branch` INTEGER NULL,
    `is_dynamic` BIT(1) NULL,
    `web_service_host_address` VARCHAR(20) NULL,
    `web_service_method` VARCHAR(50) NULL,
    `header` VARCHAR(15) NULL,
    `footer` VARCHAR(15) NULL,

    PRIMARY KEY (`menu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ussd_session` (
    `session_id` VARCHAR(255) NOT NULL,
    `application_id` VARCHAR(80) NULL,
    `application_name` VARCHAR(50) NULL,
    `claim_member_mobile` VARCHAR(15) NULL,
    `claim_member_number` VARCHAR(15) NULL,
    `claim_member_suffix` VARCHAR(2) NULL,
    `current_handler` VARCHAR(100) NULL,
    `current_member_name` VARCHAR(80) NULL,
    `current_node` VARCHAR(12) NULL,
    `current_payment_amount` DOUBLE NULL,
    `current_payment_narration` VARCHAR(120) NULL,
    `current_suffix` INTEGER NULL,
    `end_date` DATETIME(0) NULL,
    `end_reason` VARCHAR(255) NULL,
    `entity_id` VARCHAR(15) NULL,
    `menu_id` BIGINT NULL,
    `menu_text` VARCHAR(180) NULL,
    `mno` VARCHAR(15) NULL,
    `msisdn` VARCHAR(24) NOT NULL,
    `session_active` BIT(1) NULL,
    `session_date` DATETIME(0) NULL,

    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
