/* eslint-disable react/prop-types */
import React from 'react'
import { useForm } from "react-hook-form"

import styles from './form.module.css';
import loader from '../../assets/icons/loader.gif'


const Form = ({createUser, creating}) => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  return (
      <form onSubmit={handleSubmit(createUser)} className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.form_group}>
            <label className={styles.label} htmlFor='first_name'>First Name</label>
            <input {...register("first_name", { required: true, maxLength: 50 })} className={styles.input} />
            <span className={styles.error}>{errors.firstName?.type === 'required' && "First name is required"}</span>
          </div>
          <div className="form-group">
            <label className={styles.label} htmlFor='last_name'>First Name</label>
            <input {...register("last_name", { required: true, maxLength: 50 })} className={styles.input} />
            <span className={styles.error}>{errors.last_name?.type === 'required' && "Last name is required"}</span>
          </div>
          <div className="form-group">
            <label className={styles.label} htmlFor='username'>Username</label>
            <input {...register("username", { required: true, maxLength: 50 })} className={styles.input} />
            <span className={styles.error}>{errors.username?.type === 'required' && "Username is required"}</span>
          </div>
          <div className="form-group">
            <label className={styles.label} htmlFor='date_of_birth'>Date of Birth</label>
            <input 
              {...register("date_of_birth", 
              { required: true, pattern: /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/i })}
              className={styles.input} 
              placeholder="DD-MM-YYYY"
            />
            <span className={styles.error}>{errors.date_of_birth?.type === 'required' && "Date of Birth is required"}</span>
            <span className={styles.error}>{errors.date_of_birth?.type === 'pattern' && "Date of Birth must be in DD-MM-YYY"}</span>
          </div>
        </div>

        {creating ? <img src={loader} alt="loader" className={styles.img} /> : <input type="submit" className={styles.submit_btn} />}
      </form>
  );
}

export default Form;
