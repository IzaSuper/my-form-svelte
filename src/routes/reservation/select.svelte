<script>
  import {prices, selectedHotel, adultPrice, childrenPrice} from "$lib/stores.js";

  let selected
  let message = ""

  $: {
    selected = $prices.find(element => element.name === $selectedHotel);

    if (selected) {
      message = selected.message;
      $adultPrice = selected.cost.adults;
      console.log($adultPrice, 'cena adult')
      $childrenPrice = selected.cost.children;
    } else {
      message = "";
      $adultPrice = 0
      $childrenPrice = 0
    }
  }
</script>

<div class="form-group">
    <label class="form-label fw-bolder mb-1 ms-2" for="hotels">Your Destination</label>
    <select bind:value={$selectedHotel} id="hotels" class="form-select" name="hotels" required>
        <option value="" disabled hidden>--Please choose a hotel--</option>
        <option value="Jumeirah">Five Jumeirah Village</option>
        <option value="TRYP">TRYP by Wyndham Dubai</option>
    </select>
    <div class="message p-2 mt-3 align-items-center" id="message" bind:this={message}>{message}</div>
</div>

<style>
    .message {
        background-color: #ebecee;
        border-radius: 4px;
        border: none;
        height: 50px;
        color: #3e485c;
        font-size: 14px
    }
</style>