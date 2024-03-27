export default function SignupForm() {
    return (
        <form>
            <div>
                <label htmlFor="firstname">FIRST NAME<sup>*</sup></label>
                <input type="text" name="firstname" id="firstname" required/>
            </div>
            <div>
                <label htmlFor="lastname">LAST NAME<sup>*</sup></label>
                <input type="text" name="lastname" id="lastname" required/>
            </div>
            <div>
                <label htmlFor="email">EMAIL<sup>*</sup></label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div>
                <label htmlFor="phone">PHONE NUMBER<sup>*</sup></label>
                <input type="tel" name="phone" id="phone" required/>
            </div>
            <div>
                <label htmlFor="password">PASSWORD<sup>*</sup></label>
                <input type="password" name="passwort" id="password" required/>
            </div>
            <div>
                <label htmlFor="confirm-password">CONFIRM PASSWORD<sup>*</sup></label>
                <input type="password" name="confirm-password" id="confirm-password" required/>
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}