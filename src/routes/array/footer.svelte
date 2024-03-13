<script>
  import {time} from '$lib/stores.js'

  const formatter = new Intl.DateTimeFormat(
    'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
  );

  $: formattedTime = formatter.format($time)
</script>

<div class="footer" id="timer" data-date="{formattedTime}">
    Today is {formattedTime}
</div>

<style>
    .footer {
        grid-area: footer;
        background-color: #c9ceca;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: Verdana Tahoma;
    }
</style>
