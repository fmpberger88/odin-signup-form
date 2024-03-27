import SignupForm from "../components/SignupForm.jsx";
import {AsideContainer, MainContainer, SignupContainer} from "../styles/styles.js";

export default function Signup() {
    return (
        <MainContainer>
            <AsideContainer>
                <>Logo</>
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