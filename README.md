### Glitz hair 
<p>
Se me pidio realizar un lading page simple, donde utilizara Html, Css y JavaScript, no se me dio un tema en concreto para la pagina, asi que elegi uno yo misma. Este contiene:
</p>

<ul>
<li>  Un html para tener una buena estructura 
<li> El Css para proporcionarle un mejor diseno /li>
<li>Un JS para darle una meojorar interactividad a la pagina</li
</ul>

#### Tienda online de productos para el cabello. 
<p>
Cree esta pagina con el fin de poder utilizarla para mi propio emprendimento,
aqui las personas podran ver los productos que estan disponbles y contactarnos. Estos podran dirigirse directamente a las redes sociales que estan implementadas a la pagina web 
</p>

#### Ej: Codigos 
<p>
Aqui esta la seccion que ayudara a los clientes a dirigirse a nuestras redes socials 
</p>
 <section class="content Contact" id="Contacto">
         <h2 class="title"> Redes </h2>
          <a href="https://www.instagram.com/loryxglitz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="btn" >Instagram</a>
          <a href="https://www.tiktok.com/@qyslore_?_t=ZS-8tmH9jjzXQz&_r=1" class="btn"> Tik tok</a>
      </section>

#### Ejemplos:
<p>
una interactividad con js, es que se implmento un boton para que cuando las personas lleguen al final de la pagina puedan subir al incio

</p>
 // Botón para volver al inicio
         const botonSubir = document.createElement('button');
         botonSubir.textContent = '↑ Subir';
         botonSubir.style.position = 'fixed';
         botonSubir.style.bottom = '20px';
         botonSubir.style.right = '20px';
         botonSubir.style.display = 'none';
         botonSubir.style.padding = '10px 15px';
         botonSubir.style.backgroundColor = 'rgb(202, 139, 110)';
         botonSubir.style.color = 'white';
         botonSubir.style.border = 'none';
         botonSubir.style.cursor = 'pointer';
         document.body.appendChild(botonSubir);
