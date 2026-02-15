"use server";

import { prisma } from "../lib/prisma";
import { auth } from "../auth";

export async function getMembers() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  try {
    return prisma.member.findMany({
      where: {
        NOT: {
          userId: session.user.id,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching members:", error);
    throw error;
  }
}

export async function getMemberbyUserId(userId: string) {
  if (!userId) return null;

  try {
    return prisma.member.findUnique({
      where: { userId },
    });
  } catch (error) {
    console.error("Error fetching member:", error);
    return null;
  }
}

export async function getMemberPhotosByUserId(userId: string) {
  if (!userId) return null;

  try {
    const member = await prisma.member.findUnique({
      where: { userId },
      select: {
        photos: true,
      },
    });

    if (!member) return null;
    return member.photos;
  } catch (error) {
    console.error("Error fetching member photos:", error);
    return null;
  }
}
