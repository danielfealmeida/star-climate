let title = "";
let information = "";

async function getData() {
    let response = await fetch("/data");
    let json = await response.json();
        
    console.table(json);

    if(await json.main.temp > 25){
        document.getElementById("background").className = "body tatooine";
        title = "Tatooine!"
        information = "Brasília tá parecendo Tatooine hoje, Hein?";
    }
    else if(await json.main.temp < 20)
    {
        document.getElementById("background").className = "body hoth";
        title = "Hoth!"
        information = "Brasília tá um gelo hoje, Hein?";
    }
    else {
        document.getElementById("background").className = "body endor";
        title = "Endor!"
        information = "Brasília tá com um clima bacana hoje, Hein?";
    }

    document.getElementById("content-title").innerHTML = await title;
    document.getElementById("information").innerHTML = await information;
    document.getElementById("temperature").innerHTML =  await json.main.temp + "°";
}

getData();