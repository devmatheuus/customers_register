-- CreateTable
CREATE TABLE "customer" (
    "id" UUID NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" UUID NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "customerId" UUID NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customer_phone_key" ON "customer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "contact_email_key" ON "contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contact_phone_key" ON "contact"("phone");

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
