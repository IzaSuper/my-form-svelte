<script>
  import Footer from './footer.svelte'
  import Form from './form.svelte'
  import Array from './array.svelte'
  import Sum from './sum.svelte'
  import Back from './back.svelte'
</script>

<main>
    <div class="main">
        <div class="container">
            <div class="header">
                Create my SUPER array from numbers from -10 to 10
            </div>
            <Back/>
            <Form/>
            <Array/>
            <Sum/>
            <Footer/>
        </div>
    </div>
</main>

<style>
    .container {
        box-sizing: border-box;
        width: 90%;
        height: 90%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
        background-color: white;
        overflow-y: scroll;
        display: grid;
        grid-gap: 10px;
        grid-template-rows: 50px 120px 0.8fr 60px 1.2fr 50px 40px;
        grid-template-areas:
                'back'
                'header'
                'content'
                'submit'
                'equal'
                'sum'
                'footer';
    }

    .header {
        background-color: #c9ceca;
        grid-area: header;
        font-family: Verdana;
        font-size: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        padding: 7px;
    }
</style>
