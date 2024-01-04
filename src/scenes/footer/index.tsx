
import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
        <footer className="bg-primary-100 py-16">
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
              <img alt="logo" src={Logo} />
              <p className="my-5">
              Discover EvoGym – where innovation meets fitness excellence. 
              Elevate your wellness journey with cutting-edge facilities and expert guidance for a healthier, 
              stronger you.
              </p>
              <p>© Evogym 2023.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Links</h4>
              <p className="my-5">Coming Soon</p>
              <p className="my-5">Coming Soon</p>
              <p>Coming Soon</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Contact Us</h4>
              <img alt="logo" src={Logo}/>
              <p className='pt-3'>(333)425-6825</p>
            </div>
          </div>
        </footer>
      );
    }

export default Footer;