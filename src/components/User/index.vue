<template>
  <div>
    <v-container>
      <h1>User info</h1>
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th>Full name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ getUser.name }}</td>
            <td>{{ getUser.email }}</td>
            <td>{{ getUser.gender }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>
<script>
import script from './main.js'
export default script
</script>

<style scoped>
@import 'style.css'
</style>