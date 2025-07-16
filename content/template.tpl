<html lang="en">
  <head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QMAC</title>
    <link rel="stylesheet" href="/static/styles.css" />
    <link rel="icon" type="image/x-icon" href="/static/images/qmac-logo.jpg" />
  </head>
  <body>

    <header>
        <a class="logo" href="index.html">
          <img src="/static/images/qmac-logo.jpg" alt="QMAC Logo"/>
        </a>
      <h1 class="title">Queen Mary Archery Club</h1>
    <nav class="navbar">
      <ul class="nav-links" >
    
        <!-- Added id for JS toggle -->
        <li class="nav-dropdown">
          <a href=".">INDEX</a>       
        </li>
        <li class="nav-dropdown">
          <a href=".">Rankings</a>

          <ul class="nav-content-dropdown"> 
          <li><a href="">ASD</a></li>
          <li><a href="">ASD</a></li>
          </ul>
        </li>
  



<!--
        <div class="ranking">
          <!-- This div is the container for the dropdown --
          <a href="index.html" 
          aria-haspopup="true" aria-expanded="false">
          Rankings
        </a>
          <!-- Main "Rankings" link --
          <ul class="ranking-dropdown">
            <!-- Dropdown content --
            <li><a href="meet-the-committee.html">Committee</a></li>  
            <li><a href="rankings/24-25.html">Rankings 24-25</a></li>  
          </ul>
        </ul>
      </div>
      <div class="navbar-toggle" id="navbarToggle">
        <span>ASD</span>
        <span>ASD</span>
        <span></span>
      </div> -->
    </nav>
    </header>


    <!-- Navigation Bar -->

    <section class="main-content">
      {{.}}
    </section>

    <footer class="screen-bar">
    </footer>
  </body>
</html>
