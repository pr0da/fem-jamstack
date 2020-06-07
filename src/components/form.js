import React from "react"
import cn from "classnames"
import { useForm } from "react-hook-form"
import styles from "./form.module.css"

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    errors,
    setError,
  } = useForm()
  const { isSubmitted, isSubmitting } = formState
  const onSubmit = data => {
    return fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => {
        setError(
          "server",
          "serverError",
          "Oh oh! Something went wrong. Please try again later."
        )
      })
  }

  if (isSubmitted && !Object.keys(errors).length) {
    return (
      <p className={styles.success}>
        Message sent!
        <button
          type="reset"
          onClick={reset}
          className={cn(styles.button, styles.centered)}
        >
          Reset
        </button>
      </p>
    )
  }

  return (
    <form
      className={cn(styles.form, { [styles.pending]: isSubmitting })}
      onSubmit={handleSubmit(onSubmit)}
    >
      {isSubmitted && Object.keys(errors).length && (
        <p className={styles.error}>Something went wrong please try again!</p>
      )}
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          ref={register}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          className={styles.input}
          ref={register}
        />
      </label>
      <label className={styles.label}>
        Subject
        <input
          type="text"
          name="subject"
          className={styles.input}
          ref={register}
        />
      </label>
      <label className={styles.label}>
        Subject
        <textarea name="body" className={styles.input} ref={register} />
      </label>
      <button className={styles.button}>Send</button>
    </form>
  )
}

export default Form
