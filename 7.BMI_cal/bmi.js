const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height <= 0 || height === "" || isNaN(height)) {
    results.innerHTML = "invalid height";
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = "invalid weight";
  }
  else{
    const r=(weight/(height*height)).toFixed(2);
    results.innerHTML =`<span><br>BMI is ${r} </br></span>`;
    let a=document.createElement('span');
    if(r<18.6){
        a.innerHTML="Underweight";
    }
    else if(r<24.9){
        a.innerHTML ="Normal Range";
    }
    else{
        a.innerHTML ="Overweight";
    }
    results.appendChild(a);
  }
});
