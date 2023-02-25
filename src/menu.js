export default function menu() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML = `<header>
      <a href="index.html">
        ARGANTINA.</a>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="contact.html">Contact us</a></li>
        </ul>
      </nav>
    </header>

    <main class="menu">
      <p>
        MENU
      </p>
      <img src="barista.jpg" alt="Café" height="220px">
      <div class="description">
        <p>GREAT
        </p>
        <p class="emphasis">COFFEE</p>
        <p>SERVED</p>
        <p>EVERYDAY</p>
      </div>

      <div id="our-menu">
        <section class="drink">
          <div class="title">ESPRESSO</div>
          <div class="drinks">
            <div class="drink-names">
              Normal<br>Talian<br>Nss Nss<br>Special<br>Americano<br>Cappuccino<br>Macchiato<br>Chocolate milk
            </div>
            <div class="prices">
              7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>
            </div>
          </div>
        </section>
        <section class="drink">
          <div class="title">ICE BLENDED</div>
          <div class="drinks">
            <div class="drink-names">
              Caramel<br>Coffee Jelly<br>Cookies and Cream<br>Hazelnut Mocha<br>Matcha Cream<br>Mint Chocolate<br>Strawberry Cream<br>Vanilla Bean
            </div>
            <div class="prices">
              7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>
            </div>
          </div>
        </section>
        <section class="drink">
          <div class="title">TEA</div>
          <div class="drinks">
            <div class="drink-names">
              Mint Flavored Tea<br>Green Tea<br>Northern Tea<br>Herbal Tea
            </div>
            <div class="prices">
              8.00<br>8.00<br>8.00<br>8.00
            </div>
          </div>
        </section>
        <section class="drink">
          <div class="title">BAKERY</div>
          <div class="drinks">
            <div class="drink-names">
              Pastries<br>Bagels<br>Muffins<br>Biscotto
            </div>
            <div class="prices">
              3.00<br>5.00<br>4.00<br>2.00
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer>
      <p>created by Humaminho</p>
    </footer>`;

  content.classList.remove('home');
  content.classList.remove('about');
  content.classList.add('menu');
}