-- CreateTable
CREATE TABLE "Tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_title_key" ON "Tasks"("title");
