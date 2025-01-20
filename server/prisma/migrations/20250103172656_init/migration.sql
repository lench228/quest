-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
