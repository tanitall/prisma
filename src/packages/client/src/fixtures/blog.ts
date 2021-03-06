export const blog = /* GraphQL */ `
datasource db {
  provider = "postgresql"
  url      = "postgresql://localhost:5432/db"
}

generator client {
  provider  = "prisma-client-js"
  output    = "@prisma/client"
  transpile = false
}

/// User model comment
model User {
  id    String  @default(uuid()) @id
  email String  @unique
  /// name comment
  name  String?
  posts Post[]
  json Json?
}

model Post {
  id        String   @default(cuid()) @id
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean
  title     String
  content   String?
  authorId  String?
  author    User? @relation(fields: [authorId])
  categories Category[]  @relation("MyPostCatRelationTable")
}

model Category {
  id        String   @default(cuid()) @id
  posts Post[]  @relation("MyPostCatRelationTable")
}

model NoRelations {
  id String @id @default(cuid())
  name String
}

enum Role {
  USER
  ADMIN
}
`
