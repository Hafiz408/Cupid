import './Header.css';

function Header() {
    return (
        <section id="title">
        <div class="container-fluid">
    
          <nav class="navbar  navbar-expand-ms fixed-top">
    
            <div class="navbar-nav sm-auto" id="add">
              <a class="nav-link" href="#" onclick=""><i class="far fa-plus-square"></i></a>
            </div>
    
            <div class="container">
              <a class="navbar-brand" href="#top">
                <img src="cupid.png" alt="" class="logo" />
                <p class="logo">Cupid</p>
              </a>
            </div>
    
            <ul class="navbar-nav sm-auto">
              <li class="nav-item">
                  <form id="link" action="" method="GET">
                      <a class="nav-link" href="#" onclick=""><i class="fas fa-user-alt"></i></a>
                  </form>
                  <form id="link" action="" method="GET">
                    <a class="nav-link" href="#" onclick=""><i class="fas fa-heart"></i></a>
                </form>
                <form id="link" action="" method="GET">
                  <a class="nav-link" href="#" onclick=""><i class="fas fa-home"></i></a>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
  
export default Header;