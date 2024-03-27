import SignupForm from "../components/SignupForm.jsx";
import {AsideContainer, MainContainer, SignupContainer} from "../styles/styles.js";
import odin from '/public/odin-lined.png';

export default function Signup() {
    return (
        <MainContainer>
            <AsideContainer>
                <div>
                    <img src={odin} width="100"/>
                    <h1>Odin</h1>
                </div>
            </AsideContainer>
            <SignupContainer>
                <div>
                    <p>This is not a real online service! You know you need something like this in your real life to
                        help you realize your deepest dreams. Sign up <em>now</em> to get started.</p>
                    <br />
                    <p>You <em>know</em> you want to.</p>
                </div>
                <div>
                    <SignupForm/>
                </div>
                <div className="linkContainer">
                    <p className="link-to-login">Already have an account? <a href="#">Log in</a></p>
                </div>
            </SignupContainer>
        </MainContainer>
    );
}