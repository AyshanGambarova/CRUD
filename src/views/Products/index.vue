<template>
  <h1>File upload</h1>
  <v-container>
  <form>
    <v-file-input v-model="files" show-size counter label="File input"></v-file-input>
    <v-btn @click="uploadFile" depressed color="primary"> Upload </v-btn>
  </form>
  </v-container>
  <h1>Products</h1>
  <v-row class="mb-6" no-gutters style="height: 500px; overflow-y: scroll" @scroll="getProducts">
    <v-col md="3" v-for="product in products" :key="product.id">
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <v-img height="250" :src="product.images[0]"></v-img>
        <v-card-title>{{ product.brand }}</v-card-title>
        <v-card-text>
          <div class="my-4 text-subtitle-1">{{ product.price }}$</div>
          <div>{{ product.title }}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import script from './main'
export default script
</script>
