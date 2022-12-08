import $http from '@/utils/interceptors'

export async function apiGetUserPosts(params?: any) {
  return await $http({
    method: 'GET',
    params: params.query,
    url: `/users/${params.userId}/posts`
  })
}
export async function apiCreateUserPost(userId: any, creatingPost: any) {
  return await $http({
    method: 'POST',
    data: creatingPost,
    url: `/users/${userId}/posts`
  })
}
export async function apiEditUserPost(postId: any, editPost: any) {
  return await $http({
    method: 'PUT',
    data: editPost,
    url: `/posts/${postId}`
  })
}
