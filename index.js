let nome = "Clove";
    let experiencia = 10001;
    let nivel = "";
 
for (let i = 0; i < 1; i++)
{
    if (experiencia < 1000) 
    {
        nivel = "Ferro";
    }

    else if (experiencia >= 1001 && experiencia <= 2000) 
    {
        nivel = "Bronze";
    }

    else if (experiencia >= 2001 && experiencia <= 5000) 
    {
        nivel = "Prata";
    }

    else if (experiencia >= 5.001 && experiencia <= 7000) 
    {
        nivel = "Ouro";
    }

    else if (experiencia >= 7.001 && experiencia <= 8000) 
    {
        nivel = "Platina";   
    }

    else if (experiencia >= 8.001 && experiencia <= 9000) 
    {
        nivel = "Ascendente";   
    }

    else if (experiencia >= 9.001 && experiencia <= 10000) 
    {
        nivel = "Imortal";   
    }
    else 
    {
      nivel = "Radiante";   
    }
}

 console.log("O herói de nome, " + nome + ", está no nível de: " + nivel);