<script>
  import {array} from '$lib/stores.js'
</script>

{#if $array === undefined}
    <div class="equal" id="created">Your array is</div>
{:else}
    <div class="equal" id="created">{$array}</div>
{/if}

<style>
    .equal {
        grid-area: equal;
        background-color: aliceblue;
        display: flex;
        word-break: break-all;
        flex-wrap: wrap;
        text-align: center;
        padding-top: 15px;
        justify-content: center;
        font-size: 21px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>
