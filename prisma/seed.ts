import { prisma } from "../app/lib/prisma";
import { membersData } from "./membersData";
import { hash } from "bcryptjs";

async function seedMembers() {
  await Promise.all(
    membersData.map(async (member) =>
      prisma.user.upsert({
        where: { email: member.username },
        update: {},
        create: {
          email: member.username,
          emailVerified: new Date(),
          name: member.name,
          passwordHash: await hash("password", 10),
          image: member.image,
          member: {
            create: {
              dateOfBirth: new Date(member.dateOfBirth),
              gender: member.gender,
              name: member.name,
              created: new Date(member.created),
              updated: new Date(member.lastActive),
              description: member.description,
              city: member.city,
              country: member.country,
              image: member.image,
              photos: {
                create: {
                  url: member.image,
                },
              },
            },
          },
        },
      })
    )
  );
}

async function main() {
  await seedMembers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
