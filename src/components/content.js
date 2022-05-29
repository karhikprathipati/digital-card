import '../index.css';

export default function Content() {
    return (
        <div className='content'>
            <div className="image">
            </div>
            <div className='contact'>
                <h3 className='name item'>Laurie Whitwell</h3>
                <h4 className='role item'> FrontEnd Developer</h4>
                <h5 className='website item'>My Website</h5>
            </div>
            <div className='button'>
                <button className='btn github'>Github</button>
                <button className='btn linkedIn'>LinkedIn</button>
            </div>
            <div className='about'>
                <h4 className='element'>About</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic</p>
                <h4> Interests</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

            </div>
            <div className='footer'>
            </div>
        </div>
    );
}