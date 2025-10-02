import '../styles/backgroun-moon.css';

export default function BackgroundMoon() {
    return (
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
            <div className="background-container">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="moon" className='imgMoon'/>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </div>
        </div>
    )
}
