-- CreateTable
CREATE TABLE "tools" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "links" TEXT,
    "descriptions" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tools_pkey" PRIMARY KEY ("id")
);
