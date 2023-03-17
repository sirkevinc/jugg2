import { useState } from "react";

export default function SubscribeForm() {
    const [status, setStatus] = useState<string | null>(null)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const FORM_URL = process.env.FORM_URL;

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        try {
            const response = await fetch(FORM_URL, {
                method: "post",
                body: data,
                headers: {
                    accept: "application/json",
                },
            })
            setEmail("");
            const json = await response.json();
            console.log(json)
            if (json.status === "success")  {
                setStatus("SUCCESS")
                return
            }
        } catch(err) {
            setStatus("FAILURE");
            console.log(err);
        }
        console.log("form submitted");
    }

    const handleFormChange = (selector, event) => {
        const { value } = event.target;
        if (selector === "email") {
            setEmail(value);
        };
        if (selector === "name") {
            setEmail(name);
        }
    }
    return (
        <>

        
        <form onSubmit={handleSubmit}>
            <h1>Subscribe to our newsletter</h1>
            {/* <input
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                onChange={(event) => handleFormChange("name", event)}
                value={name}
            /> */}
            <input
                aria-label="Your email address"
                name="email_address"
                placeholder="Your email address"
                required
                type="email"
                onChange={(event) => handleFormChange("email", event)}
                value={email}
                />
            <button type="submit">SUBSCRIBE</button>
        </form>
        </>

        
    )
}


// https://help.formspree.io/hc/en-us/articles/360036061994-Use-the-Mailchimp-Plugin-to-collect-email-addresses