<script>
  import {sum} from '$lib/stores.js'
</script>

{#if $sum === undefined}
    <div class="sum" id="added">Sum of two numbers is</div>
{:else}
    <div class="sum" id="added">Sum of two numbers is {$sum} </div>
{/if}
<style>
    .sum {
        grid-area: sum;
        background-color: #ebecee;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: Verdana;
        font-size: 18px;
    }
</style>
