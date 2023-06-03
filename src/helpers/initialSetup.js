// import Role from '../models/model.roles.js';

// export const createRole = async () => {
//   try {
//     const count = await Role.estimatedDocumentCount()
//     if (count > 0) return;
//     const roles = await Promise.all([
//       new Role({ name: 'user' }).save(),
//       new Role({ name: 'admin' }).save(),
//       new Role({ name: 'moderator' }).save(),
//       new Role({ name: 'superadmin' }).save()
//     ]);
//     console.log(roles)
//   } catch (error) {
//     console.error(error)
//   }
// }