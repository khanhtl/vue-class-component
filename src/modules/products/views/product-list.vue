<template>
    <div>
        <h1>Product list</h1>
        <button @click="handleClick">Detail</button>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator';
import { useRouter } from 'vue-router';

@Component({})
export default class ProductList extends Vue {
    router = useRouter()
    handleClick() {
        this.router.push({ name: 'product', params: {id: 12}})
    }
}
</script>