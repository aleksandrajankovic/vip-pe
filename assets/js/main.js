let data = {
    licniAsistent: [
      {
        title: "BONO",
        desc: "Un recompensa especial cada mes disponible para que siga disfrutando la plataforma.",
        image: "assets/icons/bonos.svg"
      },
    ],
    specijalniBonusi: [
      {
        title: "Tecnología",
        desc: "Nuestra opción de canje de elementos tecnológicos por puntos gracias a ser parte de <a href='https://promo.meridianbet.pe/es/category/474/page/10505'>VIP</a>",
        image: "assets/icons/tecnologia.svg"
      },
    ],
    limiti: [
        {
          title: "Casa",
          desc: "Vales de consumo para mejorar todo en casa y seguir disfrutando de donde estes.",
          image: "assets/icons/casa.svg"
        },
      ],
      rezervacijeAvion: [
        {
          title: "Regalos",
          desc: "Una lista de regalos por cumpleaños, aniversario y Navidad exclusivamente disponibles para ti.",
          image: "assets/icons/regalos.svg"
        },
      ],
      rezervacijeUlaznice: [
        {
          title: "TICKETS",
          desc: "Cada mes disponible en sorteo interno entre integrantes de sala VIP tickets para conciertos, teatros y más.",
          image: "assets/icons/tickets.svg"
        },
      ],
      dodatneNagrade: [
        {
          title: "VIAJES",
          desc: "Un viaje anual posible de reclamar solo para Sala VIP.",
          image: "assets/icons/viaje.svg"
        },
      ],
      rankingSystem: {
      
        platinum: {
          head : "VIP ORO",
          bulletOne: "Retiro inmediato hasta de 50 mil por solicitud ",
          bulletTwo: "Cashback semanal efectivo mayor ",
          bulletThree: "Bonificaciones mensuales de S/.200 puntos",
          bulletFour: "Agente personalizado al 985412060",
          bulletFive: "Premios personalizados por fidelidad",
          bulletSix: "Canje de puntos por premios de su interés <u> más exclusivos para ORO.</u>",
          bulletSeven: "Gestión y solución de dudas inmediatas ",
          bulletEight: "Asesoría constante en el uso de la plataforma y sobre los productos de novedad ",
          bulletNine: "Línea abierta para comunicarse con su agente y resuelva sus inquietudes ",
        },
        gold: {
          head : "VIP PLATA",
         
          bulletOne: "Retiro inmediato hasta de 30 mil por solicitud",
          bulletTwo: "Cashback semanal efectivo mayor ",
          bulletThree: "Bonificaciones mensuales de S/.150 puntos",
          bulletFour: "Agente personalizado al 985412060",
          bulletFive: "Premios personalizados por fidelidad",
          bulletSix: "Canje de puntos por premios de su interés",
          bulletSeven: "Gestión y solución de dudas inmediatas ",
          bulletEight: "Asesoría constante en el uso de la plataforma y sobre los productos de novedad ",
          bulletNine: "Línea abierta para comunicarse con su agente y resuelva sus inquietudes ",
        },
        silver: {
          head : "VIP",
          bulletOne: "Retiro inmediato hasta de 20 mil por solicitud ",
          bulletTwo: "Cashback semanal efectivo mayor ",
          bulletThree: "Bonificaciones mensual de S/.100 puntos",
          bulletFour: "Agente personalizado al 985412060",
          bulletFive: "Premios personalizados por fidelidad",
          bulletSix: "Canje de puntos por premios de su interés",
          bulletSeven: "Gestión y solución de dudas inmediatas  ",
          bulletEight: "Asesoría constante en el uso de la plataforma y sobre los productos de novedad ",
        },
        
    
        
      }
  };
  /*POPUP*/
  function generateHTML(contentData, id) {
    return `<div class="popup-box" id="${id}">
  <img class="popup-icon" src="${contentData.image}"/>
      <h2 class="about-naslov">${contentData.title}</h2>
      <p>${contentData.desc}</p>
    </div>`;
  }
  

  function renderContent(content, id, buttonClass) {
    const popup = document.querySelector(".popup-active");
    const popupContent = document.querySelector(".popup-content-active");
  
    document.querySelector(`.${buttonClass}`).addEventListener("click", function (event) {
      event.preventDefault();
  
      if (popup.classList.contains("show")) {
        return;
      }
  
      popup.style.display = "block";
      popupContent.style.display = "flex";
  
      let contentData = data[content][0];
      let contentHTML = generateHTML(contentData, id);
      popupContent.innerHTML = contentHTML;
  
      var closeBtn = document.createElement("img");
      closeBtn.id = "close-btn";
      closeBtn.src = "assets/icons/CLOSE-03 1.png"; 
      popupContent.appendChild(closeBtn);
  
      closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
  
        setTimeout(function() {
          popup.style.display = "none";
        }, 300);
  
        setTimeout(function() {
          popup.classList.remove("show");
          popupContent.classList.remove("show");
        }, 10);
      });
  
      setTimeout(function() {
        popup.classList.add("show");
        popupContent.classList.add("show");
      }, 10);
    });
  
    popup.addEventListener("click", function () {
      setTimeout(function() {
        popup.style.display = "none";
      }, 300);
  
      setTimeout(function() {
        popup.classList.remove("show");
        popupContent.classList.remove("show");
      }, 10);
    });
  
    popupContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    renderContent("licniAsistent", "licniAsistent", "asisstent-btn");
    renderContent("specijalniBonusi", "specijalniBonusi", "bonus-btn");
    renderContent("limiti", "limiti", "limit-btn");
    renderContent("rezervacijeAvion", "rezervacijeAvion", "rezervacije-btn");
    renderContent("rezervacijeUlaznice", "rezervacijeUlaznice", "ulaznice-btn");
    renderContent("dodatneNagrade", "dodatneNagrade", "nagrade-btn");
  });

  function generateHTMLRanking(rankingData) {
    let html = '';
    
    for (let rank in rankingData) {
        html += `<div class="box">
            <div class="head"><h4>${rankingData[rank].head}</h4></div>
            <div class="body-box">
                <div class="list">
                    <ul>`;
        
        // Generate the first four bullets
        if (rankingData[rank].bulletOne !== undefined) {
            html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletOne}</p></li>`;
        }
        if (rankingData[rank].bulletTwo !== undefined) {
            html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletTwo}</p></li>`;
        }
        if (rankingData[rank].bulletThree !== undefined) {
            html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletThree}</p></li>`;
        }
        if (rankingData[rank].bulletFour !== undefined) {
            html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletFour}</p></li>`;
        }
        if (rankingData[rank].bulletFive !== undefined) {
          html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletFive}</p></li>`;
      }
      if (rankingData[rank].bulletSix !== undefined) {
          html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletSix}</p></li>`;
      }
        // Start hidden bullets section
        html += `<div class="more-bullets" style="display: none;">`;
        
       
        if (rankingData[rank].bulletSeven !== undefined) {
            html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletSeven}</p></li>`;
        }
        if (rankingData[rank].bulletEight !== undefined) {
            html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletEight}</p></li>`;
        }
        if (rankingData[rank].bulletNine !== undefined) {
            html += `<li class="list-box"><img src="/vip/assets/icons/bullet.svg" alt="Icon"><p>${rankingData[rank].bulletNine}</p></li>`;
        }
        
        // End hidden bullets section
        html += `</div>`;
        
        // Add "Mostrar más" button
        html += `<a class="show-more-btn" onclick="toggleBullets(this)">Mostrar más</a>`;
        
        html += `</ul></div>
            </div>
        </div>`;
    }
    
    return html;
}

function toggleBullets(button) {
    const currentBox = button.closest('.box');
    const moreBullets = currentBox.querySelector('.more-bullets');
    const allBoxes = document.querySelectorAll('.box .more-bullets');

    // Close all other boxes
    allBoxes.forEach((box) => {
        if (box !== moreBullets) {
            box.style.display = 'none';
            box.nextElementSibling.textContent = 'Mostrar más'; // Update the button text to "Mostrar más"
        }
    });

    // Toggle current box
    if (moreBullets.style.display === 'none') {
        moreBullets.style.display = 'block';
        button.textContent = 'Mostrar menos';
    } else {
        moreBullets.style.display = 'none';
        button.textContent = 'Mostrar más';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const rankingSystemContainer = document.querySelector(".ranking-system");
    rankingSystemContainer.innerHTML = generateHTMLRanking(data.rankingSystem);
});

  
