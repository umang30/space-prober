const randomPlanet = ['https://media.giphy.com/media/jJOLvhvbIHRqdrR9cc/giphy.gif', 'https://media.giphy.com/media/MFyHCp8W6envM8Eiaf/giphy.gif', 'https://media.giphy.com/media/FNhQ0cWcsVXCLQ7Kr1/giphy.gif', 'https://media.giphy.com/media/xT0GqeC1zE0IGVYVry/giphy-downsized-large.gif'];
function generate(){
    let name = document.getElementById("name").value;
    let radius = Number(document.getElementById("radius").value) * 10 ** Number(document.getElementById("radius-exp").value);
    let mass = Number(document.getElementById("mass").value) * 10 ** Number(document.getElementById("mass-exp").value);

    if(name == ""){
        alert("Please enter a name for the planet");
        return;
    }
    if(radius == 0){
        alert("Please enter a radius for the planet");
        return;
    }
    if(mass == 0){
        alert("Please enter a mass for the planet");
        return;
    }

    let grav=((6.67408*(10**(-11)))*mass)/(radius*radius);
    let volume = (4/3)*Math.PI*(radius**3);
    let density = mass/volume;
    let surface = 4*Math.PI*(radius**2);

    let main = document.getElementById("mainDiv");

    console.log(grav);
    let prev = document.getElementById("result-div");
    if(prev!=null){
        document.getElementById("result-div").remove();
    }
    let resultDiv = document.createElement("div");
    resultDiv.setAttribute('id','result-div');
    let h1 = document.createElement("h1");
    h1.innerHTML = name;

    let planetdata = ["Radius", "Mass", "Surface Area", "Volume", "Density", "Gravity"];

    radius = String(radius);
    mass = String(mass);
    grav = String(grav);
    volume = String(volume);
    density = String(density);
    surface = String(surface);

    if(radius.search('e')!=-1){
        radius = radius.replace('e',' &times; 10 <sup>');
        radius = radius.replace('+','');
        radius = radius+"</sup>";
    }
    if(mass.search('e')!=-1){
        mass = mass.replace('e',' &times; 10 <sup>');
        mass = mass.replace('+','');
        mass = mass+"</sup>";
    }
    if(grav.search('e')!=-1){
        grav = grav.replace('e',' &times; 10 <sup>');
        grav = grav.replace('+','');
        grav = grav+"</sup>";
    }
    if(volume.search('e')!=-1){
        volume = volume.replace('e',' &times; 10 <sup>');
        volume = volume.replace('+','');
        volume = volume+"</sup>";
    }
    if(density.search('e')!=-1){
        density = density.replace('e',' &times; 10 <sup>');
        density = density.replace('+','');
        density = density+"</sup>";
    }
    if(surface.search('e')!=-1){
        surface = surface.replace('e',' &times; 10 <sup>');
        surface = surface.replace('+','');
        surface = surface+"</sup>";
    }
    
    let data = [radius + " m",mass + " kg", surface + " m<sup>2</sup>", volume + " m<sup>3</sup>", density + " <sup>kg</sup>&frasl;<sub>m<sup>3</sup></sub>",grav + " <sup>m</sup>&frasl;<sub>s<sup>2</sup></sub>"];
    let table = document.createElement("table");
    table.setAttribute("border", "1");
    for(let i = 0; i < planetdata.length; i++){
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.textContent = planetdata[i];
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.innerHTML = data[i];
        row.appendChild(cell);
        table.appendChild(row);
    }
    let img = document.createElement("img");
    img.setAttribute("src", randomPlanet[Math.floor(Math.random()*randomPlanet.length)]);
    img.setAttribute("height", "150px");
    resultDiv.appendChild(img);
    resultDiv.appendChild(h1);
    resultDiv.appendChild(table);
    main.appendChild(resultDiv);

}