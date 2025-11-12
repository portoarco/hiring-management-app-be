-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('RECRUITER', 'APPLICANT');

-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "VACANCY_TYPE" AS ENUM ('FULLTIME', 'PARTTIME', 'CONTRACT', 'FREELANCE', 'INTERNSHIP');

-- CreateEnum
CREATE TYPE "VACANCY_STATUS" AS ENUM ('ACTIVE', 'INACTIVE', 'DRAFT');

-- CreateEnum
CREATE TYPE "REQUIREMENT_STATUS" AS ENUM ('MANDATORY', 'OPTIONAL', 'OFF');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "role" "USER_ROLE" NOT NULL DEFAULT 'APPLICANT',
    "date_of_birth" TEXT,
    "gender" "GENDER",
    "domicile" TEXT,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "linkedin_url" TEXT,
    "avatar" TEXT,
    "company_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applications" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "vacancy_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacancies" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "type" "VACANCY_TYPE" NOT NULL,
    "jobdesc" TEXT NOT NULL,
    "placement" TEXT NOT NULL,
    "min_salary" INTEGER NOT NULL,
    "max_salary" INTEGER NOT NULL,
    "status" "VACANCY_STATUS" NOT NULL DEFAULT 'DRAFT',
    "started_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vacancies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requirements" (
    "id" SERIAL NOT NULL,
    "vacancy_id" INTEGER NOT NULL,
    "field_name" TEXT NOT NULL,
    "status" "REQUIREMENT_STATUS" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Requirements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_vacancy_id_fkey" FOREIGN KEY ("vacancy_id") REFERENCES "Vacancies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacancies" ADD CONSTRAINT "Vacancies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requirements" ADD CONSTRAINT "Requirements_vacancy_id_fkey" FOREIGN KEY ("vacancy_id") REFERENCES "Vacancies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
