import React, {useState} from 'react'
import {supabase} from '../supabase/createClient'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = async () => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password
            });

            if (error) {
                throw error;
            }

            // SignUp successful
            console.log('SignUp successful:', user);
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }

    return (
        <>
            <h1>SignUp</h1>
            <form>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={signUp}>Sign Up</button>
            </form>
        </>
    );
}

export default Signup
