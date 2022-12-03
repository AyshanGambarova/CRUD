<template>
  <div>
    <v-container>
      <h1>User info</h1>
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-center">Full name</th>
            <th class="text-center">Email</th>
            <th class="text-center">Gender</th>
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
<script lang="ts">
import script from './main'
export default script
</script>
