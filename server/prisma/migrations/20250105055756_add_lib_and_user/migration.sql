-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "libraryId" TEXT,
ADD COLUMN     "pageType" TEXT NOT NULL DEFAULT 'image',
ALTER COLUMN "image" DROP NOT NULL;

-- CreateTable
CREATE TABLE "library" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "library_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "paswd" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "library"("id") ON DELETE SET NULL ON UPDATE CASCADE;
