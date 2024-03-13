<div class="container">
    <div class="header">
        Hello, this is my simple SvelteKit application. Choose an app which you want to see:
    </div>
    <div class="content">
        <div class="choose">
            <a href="/array">Array</a>
            <a href="/reservation">Reservation</a>
        </div>
    </div>
</div>

<style>
    .container {
        box-sizing: border-box;
        width: 90%;
        height: 100%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 100px;
        background-color: white;
        overflow-y: scroll;
        display: grid;
        grid-gap: 10px;
        grid-template-rows: 150px 150px;
        grid-template-areas:
                'header'
                'content';
    }

    .header {
        background-color: #c9ceca;
        grid-area: header;
        font-family: Verdana;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        padding: 7px;
    }

    .content {
        grid-area: content;
        background-color: aliceblue;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 15px;
    }

    .choose {
        flex-direction: column;
        display: flex;
        flex-wrap: wrap;
        width: 250px;
    }

    a {
        flex: 1;
        color: black;
        font-size: 20px;
        margin: 5px 5px 5px 5px;
        white-space: nowrap;

    }

    @media (max-width: 600px) {
        .choose {
            flex-direction: column;
            width: 60%;
        }
    }
</style>
