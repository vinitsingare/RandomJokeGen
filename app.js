async function getRandomJoke() {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const res_json = await response.json();
        console.log(res_json);
        let getSetup = document.getElementById('getSetup');
        let getPunchline = document.getElementById('getPunchline');
        getSetup.innerHTML = res_json.setup;
        getPunchline.innerHTML = res_json.punchline;

    }
getRandomJoke();