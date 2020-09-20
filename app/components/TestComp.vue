<template>
  <div>
    Test
    <ul>
      <li v-for="product in products" :key="product.node.handle">
        {{product.node.title}}
        <img
          class="image"
          :src="product.node.images.edges[0].node.largeSrc"
          @mouseover="hoverProductImage(product)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import testQuery from '@/graphql/shopify/queries/testQuery'

export default {
  mounted () {
    console.log(this.products)
  },
  props: {
    products: { required: true, type: Array }
  },
  methods: {
    hoverProductImage (productEdge) {
      if (productEdge.node.images.edges.length < 2) { return }
      console.log(productEdge.node.images.edges[1].node.largeSrc)
    }
  }
}
</script>

<style>
.image {
  margin: 0 auto;
  width: 200px;
}
</style>