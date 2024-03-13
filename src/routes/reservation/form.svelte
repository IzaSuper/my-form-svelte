<script>
  import {adultPrice, childrenPrice, total, selectedHotel, hotelMap} from "$lib/stores.js"
  import Select from './select.svelte'

  let adults = 1
  let children = 0
  const currentDate = new Date()
  const today = currentDate.toISOString().split('T')[0]
  currentDate.setDate(currentDate.getDate() + 1)
  const tomorrow = currentDate.toISOString().split('T')[0]

  let checkIn = today
  let checkOut
  let minCheckOut


  $: {
    if (checkIn !== today) {
      const edit = new Date(checkIn)
      edit.setDate(edit.getDate() + 1)
      minCheckOut = edit.toISOString().split('T')[0]
      checkOut = minCheckOut

    } else {
      checkOut = tomorrow
      minCheckOut = tomorrow

    }
  }

  $: {
    const a = new Date(checkIn)
    const b = new Date(checkOut)
    const timeDiff = b - a
    const diff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    console.log(diff, 'diff')
    $total = (diff * adults * $adultPrice) + (diff * children * $childrenPrice)
    console.log($total, 'total')
  }

  const clearData = () => {
    $selectedHotel = ""
    adults = 1
    children = 0
    checkIn = today
    $total = 0

  }
  const createLink = () => {

    const baseUrl = "https://www.booking.com/"
    const hotelUrl = baseUrl + $hotelMap[$selectedHotel]
    console.log(hotelUrl)
    if ($selectedHotel) {
      window.open(hotelUrl, '_blank')
    } else {
      alert('Please choose a hotel')
    }
  }
</script>


<div class="bg-body p-4 mb-2 bg-color">
    <form id="form">
        <div class="d-grid mb-3">
            <button class="btn btn-secondary btn-lg"><a href="../">Back to main</a></button>
        </div>
        <Select/>
        <br>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group mb-3">
                    <span class="form-label fw-bolder mb-1 ms-2">Check In</span>
                    <input bind:value={checkIn} class="form-control" type="date" required id="from" min="{today}">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group mb-3">
                    <span class="form-label fw-bolder mb-1 ms-2">Check out</span>
                    <input bind:value={checkOut} class="form-control" type="date" required id="to" min="{minCheckOut}">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group mb-3">
                    <label for="adults" class="form-label fw-bolder mb-1 ms-2">Adults</label>
                    <input type="number" bind:value={adults} id="adults" min="1" max="40" class="form-control"
                           placeholder="1" required on:focus={() => (adults = '')}>
                    <span class="select-arrow"></span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group mb-3">
                    <label for="children" class="form-label fw-bolder mb-1 ms-2">Children</label>
                    <input type="number" bind:value={children} id="children" min="0" max="40" class="form-control"
                           placeholder="0" on:focus={() => (children = '')} >
                    <span class="select-arrow"></span>
                </div>
            </div>
        </div>
        <div class="d-grid gap-3">
            {#if $total === 0}
                <button class="btn btn-success btn-lg" id="total">Check total cost $</button>
            {:else}
                <button class="btn btn-success btn-lg" id="total">Total cost is {$total}$</button>
            {/if}
            <button on:click={createLink} class="btn btn-success btn-lg">Make reservation</button>
            <button on:click={clearData} class="btn btn-success btn-lg" id="clear">Clear parameters
            </button>
        </div>
    </form>
</div>

<style>

    a {
        color: white;
    }
</style>