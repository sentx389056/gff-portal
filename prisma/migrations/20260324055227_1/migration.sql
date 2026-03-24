-- CreateTable
CREATE TABLE "public"."service_bookings" (
    "id" BIGSERIAL NOT NULL,
    "service_type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "preferred_date" TEXT NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_bookings_pkey" PRIMARY KEY ("id")
);
