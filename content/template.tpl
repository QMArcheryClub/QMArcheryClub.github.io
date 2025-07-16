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
          <a href="/">Home</a>       
          
          <ul class="nav-dropdown-content"> 
          <li><a href="/meet-the-committee.html">Committee</a></li>
          <li><a href="/events/index.html">Events 2025</a></li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <a href="/">Rankings</a>

          <ul class="nav-dropdown-content"> 
          <li><a href="/rankings/24-25.html">24-25</a></li>
          </ul>
        </li>
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
