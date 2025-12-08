-- CreateTable
CREATE TABLE "public"."logs" (
    "id" SERIAL NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "details" JSONB,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Documents" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT,
    "type_id" BIGINT NOT NULL,
    "description" TEXT,
    "file_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DocumentsTypes" (
    "id" BIGSERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "DocumentsTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."News" (
    "id" BIGSERIAL NOT NULL,
    "type_id" BIGINT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NewsTypes" (
    "id" BIGSERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "NewsTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RolesTypes" (
    "id" BIGSERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "RolesTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StatusesTypes" (
    "id" BIGSERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "StatusesTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" BIGSERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role_id" BIGINT NOT NULL DEFAULT 1,
    "status_id" BIGINT NOT NULL DEFAULT 1,
    "last_activity" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentsTypes_type_key" ON "public"."DocumentsTypes"("type");

-- CreateIndex
CREATE UNIQUE INDEX "NewsTypes_type_key" ON "public"."NewsTypes"("type");

-- CreateIndex
CREATE UNIQUE INDEX "RolesTypes_role_key" ON "public"."RolesTypes"("role");

-- CreateIndex
CREATE UNIQUE INDEX "StatusesTypes_status_key" ON "public"."StatusesTypes"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "public"."Users"("username");

-- AddForeignKey
ALTER TABLE "public"."logs" ADD CONSTRAINT "logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Documents" ADD CONSTRAINT "Documents_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "public"."DocumentsTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."News" ADD CONSTRAINT "News_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "public"."NewsTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."RolesTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "public"."StatusesTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
