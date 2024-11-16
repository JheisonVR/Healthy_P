/*
  Warnings:

  - You are about to drop the `Options` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Options" DROP CONSTRAINT "Options_questionId_fkey";

-- AlterTable
ALTER TABLE "Questions" ADD COLUMN     "option" TEXT[];

-- DropTable
DROP TABLE "Options";

-- CreateTable
CREATE TABLE "results" (
    "id" TEXT NOT NULL,
    "emotion" "emotions"[],
    "date" TIMESTAMP(3) NOT NULL,
    "advise" TEXT NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);
