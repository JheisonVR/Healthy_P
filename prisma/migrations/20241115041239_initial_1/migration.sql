-- CreateEnum
CREATE TYPE "emotions" AS ENUM ('Happy', 'Sad', 'Fear', 'Rage', 'Disgust');

-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "index" INTEGER NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" TEXT NOT NULL,
    "index" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
