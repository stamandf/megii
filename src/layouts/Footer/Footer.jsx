import React from 'react';

function Footer() {
  const today = new Date();

    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="text-white h5 mb-3">Maison Eros Greatti Immobilier</h3>
              </div>
              <div className="col-md-3">
                <h3 className="text-white h5 mb-3">Site Links</h3>
                <ul className="list-unstyled menu-arrow">
                  {/* <li><a href="#">Properties</a></li> */}
                  <li><a href="#brokers">Brokers</a></li>
                  {/* <li><a href="#">Testimonials</a></li> */}
                  <li><a href="#brokers">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="text-white h5 mb-3">Socials</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolores deserunt, obcaecati fuga quo. Autem explicabo sapiente, maiores.</p>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                {/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a> */}
                Copyright &copy; {today.getFullYear()} All rights reserved | MEGII
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
                </div>
              </div>
    
            </div>
          </div>
      </footer>
  
    );
}

export default Footer;