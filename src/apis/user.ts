import $http from '@/utils/interceptors'

export async function apiGetUsers(params?: any) {
  return await $http({
    method: 'GET',
    params,
    url: `/users`
  })
}
export async function apiGetUser(userId: number) {
  return await $http({
    method: 'GET',
    url: `/users/${userId}`
  })
}
//Ayri ayri 2 parametr kimi gonderilende asagidaki kimi qebul edirik
// export async function apiEditUser(userId: any, editUser: any) {
//   return await $http({
//     method: 'PUT',
//     data: editUser,
//     url: `/users/${userId}`
//   })
// }
//Iki parametr 1 obyekt kimi gonderilende bele qebul edirik
export async function apiEditUser(userId: any,editUser:any) {
  return await $http({
    method: 'PUT',
    data: editUser,
    url: `/users/${userId}`
  })
}
export async function apiCreateUser(creatingUser: any) {
  return await $http({
    method: 'POST',
    data: creatingUser,
    url: `/users`
  })
}
export async function apiDeleteUser(userId: number) {
  return await $http({
    method: 'DELETE',
    url: `/users/${userId}`
  })
}
