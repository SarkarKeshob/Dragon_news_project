import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    const date=moment().format("dddd,MMMM D, YYYY,")
    return (

        <div>
            <div className='w-full md:w-2/5 mx-auto'>
                <img src={logo} alt="" className='w-full'/>
                <p className='text-xl text-center my-6 font-bold'>Journalism Without Fear or Favour</p>
                <p className='text-xl text-center '>{date}</p>
            </div>
        </div>
    );
};

export default Header;