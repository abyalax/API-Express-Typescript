import prisma from "./prisma.js";
// CREATE
const user = await prisma.user.create({
    data: {
        email: 'elsa@prisma.io',
        name: 'Elsa Prisma',
    },
});
const createMany = await prisma.user.createMany({
    data: [
        { name: 'Bob', email: 'bob@prisma.io' },
        { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
        { name: 'Yewande', email: 'yewande@prisma.io' },
        { name: 'Angelique', email: 'angelique@prisma.io' },
    ],
    skipDuplicates: true, // Skip 'Bobo'
});
const usersCreatMany = await prisma.user.createMany({
    data: [
        { name: 'Alice', email: 'alice@prisma.io' },
        { name: 'Bob', email: 'bob@prisma.io' },
    ],
});
//   READ
const readUser = await prisma.user.findUnique({
    where: {
        email: 'elsa@prisma.io',
    },
});
// By ID
const readUserByID = await prisma.user.findUnique({
    where: {
        id: 99,
    },
});
//   const findUser = await prisma.user.findFirst({
//     where: {
//       posts: {
//         some: {
//           likes: {
//             gt: 100,
//           },
//         },
//       },
//     },
//     orderBy: {
//       id: 'desc',
//     },
//   })
const usersFiltered = await prisma.user.findMany({
    where: {
        email: {
            endsWith: 'prisma.io',
        },
    },
});
//# sourceMappingURL=db.js.map