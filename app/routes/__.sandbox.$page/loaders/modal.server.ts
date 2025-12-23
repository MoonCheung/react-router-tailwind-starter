import { prisma } from '~/.server/lib/prisma-client';

export async function getModalData() {
  const count = await prisma.contact.count();
  const contact = await prisma.contact.findFirst({
    orderBy: { id: "asc" },
    skip: Math.floor(Math.random() * count),
  });

  if (!contact) {
    throw new Response("Contact not found", { status: 404 });
  }

  return { contact };
}