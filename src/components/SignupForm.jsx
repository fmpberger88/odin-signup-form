import {useState} from "react";
export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            setShowError(true);
            return;
        }
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long!");
            setShowError(true);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Invalid email address!");
            setShowError(true);
            return;
        }
        // Success case
        const successMessage = `Sign up successful:, Name: ${firstName} ${lastName}, EMail: ${email}, Phone: ${phone}, Password: ${password}, Password Confirmation: ${confirmPassword}`;
        alert(successMessage.replace(/, /g, "\n")); // Replaces commas with newlines for alert readability, though not all environments may display this correctly.
    };


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstname">FIRST NAME<sup>*</sup></label>
                <input type="text" name="firstname" id="firstname" required onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="lastname">LAST NAME<sup>*</sup></label>
                <input type="text" name="lastname" id="lastname" required onChange={e => setLastName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">EMAIL<sup>*</sup></label>
                <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="phone">PHONE NUMBER<sup>*</sup></label>
                <input type="tel" name="phone" id="phone" required onChange={e => setPhone(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">PASSWORD<sup>*</sup></label>
                <input type="password" name="password" id="password" required onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="confirm-password">CONFIRM PASSWORD<sup>*</sup></label>
                <input type="password" name="confirm-password" id="confirm-password" required onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
            {showError && (
                <div style={{
                    position: 'fixed', // Overlay über den Inhalt legen
                    top: -100,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                }}>
                    <div style={{
                        padding: '20px',
                        backgroundColor: 'rgba(255, 0, 0, 0.7',
                        borderRadius: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '80%',
                        maxWidth: '400px',
                    }}>
                        <p style={{
                            margin: '10px',
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                        }}>{errorMessage}</p>
                        <button onClick={() => setShowError(false)}>Schließen</button>
                    </div>
                </div>
            )}
        </form>
    )
}