import React from 'react';

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    
    return <footer className="h-96 px-8">
        <section className="h-3/4 flex py-5">
          <div className='flex flex-col justify-between'>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Shipping & Return Policy</p>
          </div>
        </section>
        <section className="h-1/4 text-sm border-t flex items-center">
          © ShopBay LTD. All Rights Reserved | Webiste designed and created
          by Bruce Audo.
        </section>
      </footer>;
}
export default Footer;