<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QMAC</title>
    <link rel="stylesheet" href="/static/styles.css" />
    <link rel="icon" type="image/x-icon" href="/static/images/qmac-logo.jpg" />
  </head>
  <body>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <a href="index.html">
          <img src="images/qmac-logo.jpg" alt="QMAC Logo"/>
        </a>
      </div>
      <div class="navbar-title">Queen Mary Archery Club</div>
      <div class="navbar-links" id="navbarLinks">
        <!-- Added id for JS toggle -->
        <a href="index.html">Home</a>
        <div class="ranking">
          <!-- This div is the container for the dropdown -->
          <a href="index.html" 
          aria-haspopup="true" aria-expanded="false">
            Rankings
        </a>
          <!-- Main "Rankings" link -->
          <div class="ranking-dropdown">
            <!-- Dropdown content -->
            <a href="index.html">Home</a>
            <a href="rankings/24-25.html">Rankings 24-25</a>
          </div>
        </div>
        <!-- Add other main navigation links here if needed -->
      </div>
      <div class="navbar-toggle" id="navbarToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <div class="main-content">
      {{.}}
    </div>
  </body>
</html>
