<script>
  import {array, sum} from '$lib/stores.js'

  let number1
  let number2

  const checkSubmit = (e) => {
    if (e.key && e.key === 'Enter') {
      e.preventDefault()
      return;
    }

    if (e.submitter && e.submitter.name) {
      if (e.submitter.name === 'createArray') {
        createArray()
      } else if (e.submitter.name === 'createSum') {
        createSum()
      }
    }
  }
  const createArray = () => {
    const start = Math.min(Number(number1), Number(number2))
    const end = Math.max(Number(number1), Number(number2))
    $array = Array.from({length: end - start + 1}).map((_, key) => key + start);
  }
  const clearArray = () => {
    $array = undefined
  }
  const createSum = () => {
    $sum = number1 + number2
  }
  const clearData = () => {
    $array = undefined
    $sum = undefined
  }
  const resetInput1 = () => {
    number1 = undefined
  }
  const resetInput2 = () => {
    number2 = undefined
  }


</script>

<form on:submit={checkSubmit}>
    <div class="content">
        <div class="inputs">
            <input type="number"
                   bind:value={number1}
                   placeholder="Enter number 1"
                   id="num1"
                   min="-10"
                   max="10"
                   required
                   on:click={resetInput1}
                   on:keydown={checkSubmit}>

            <input type="number"
                   bind:value={number2}
                   placeholder="Enter number 2"
                   id="num2"
                   min="-10"
                   max="10"
                   required
                   on:click={resetInput2}
                   on:keydown={checkSubmit}>
        </div>
    </div>
    <div class="submit">
        <div class="buttons">
            <button type="submit" id="createArray" name="createArray">Create an array</button>
            <button type="button" id="clear" on:click={clearArray}>Clear an array</button>
            <button type="submit" id="createSum" name="createSum">Sum 2 numbers</button>
            <button type="reset" id="reset" on:click={clearData}>Clear all data</button>
        </div>
    </div>
</form>

<style>
    .content {
        grid-area: content;
        background-color: aliceblue;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    .inputs {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    input {
        width: 220px;
        flex: 1;
        color: black;
        font-size: 21px;
        border-style: groove;
        margin: 5px 5px 5px 5px;
        white-space: nowrap;
        text-align: center;
    }

    @media (max-width: 600px) {
        .inputs {
            flex-direction: row;
            width: 100%;
        }
    }

    .submit {
        grid-area: submit;
        background-color: aliceblue;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 15px;
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
    }

    button {
        flex: 1;
        background-color: antiquewhite;
        color: black;
        font-size: 21px;
        border-style: groove;
        margin: 5px 5px 5px 5px;
        white-space: nowrap;
    }
</style>
