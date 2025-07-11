const calculate = () =>{
    let temperature=document.getElementById("ip").value;
    let ip_unit=document.getElementById("ip_unit").value;
    let op_unit=document.getElementById("op_unit").value;
    let result;
    let unit1;
    let unit2;
    temperature=Number(temperature);

    switch(ip_unit)
    {
        case "celsius":
            unit1 = "°C" ;
            break;
        case "fahrenheit":
            unit1 = "°F" ;
            break;
        case "kelvin":
            unit1 = "K";
            break;
    }

     switch(op_unit)
    {
        case "celsius":
            unit2 = "°C" ;
            break;
        case "fahrenheit":
            unit2 = "°F" ;
            break;
        case "kelvin":
            unit2 = "K";
            break;
    }
   
    if(ip_unit === "celsius" && op_unit === "fahrenheit")
    {
        result = (temperature * 9/5) + 32;
    }
    else if(ip_unit === "fahrenheit" && op_unit === "celsius")
    {
        result = (temperature - 32) * 5/9;
    }
    else if(ip_unit === "celsius" && op_unit === "kelvin")
    {
        result = temperature + 273.15;
    }
    else if(ip_unit === "kelvin" && op_unit === "celsius")
    {
        result = temperature - 273.15;
    }
    else if (ip_unit === "fahrenheit" && op_unit === "kelvin")
    {
        result = (temperature - 32) * 5/9 + 273.15;
    }
    else if (ip_unit === "kelvin" && op_unit === "fahrenheit")
    {
        result =  (temperature - 273.15) * 9/5 + 32;
    }
    document.getElementById("result").innerHTML = `${temperature} ${unit1} = ${result.toFixed(2)} ${unit2}`; 
}