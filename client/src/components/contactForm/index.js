import { useForm, ValidationError } from "@formspree/react";
import styles from "../../styles/Contact.module.css"

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID);

  if (state.succeeded) {
    return(
      <div className={styles.form__container}>
        <p className={styles.form_message}>Thank you for your submission.</p>
      </div>
    )
  }

  return (
    <div className={styles.form__container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <ValidationError errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}


// https://formspree.io/guides/nextjs/