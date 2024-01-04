import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from '@/shared/Htext';
import {FormEvent} from 'react';




type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function ContactUs({setSelectedPage}: Props) {

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {register, trigger, formState:{ errors }} = useForm()

  const onSubmit = async (e:  FormEvent<HTMLFormElement>): Promise<void> => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();  
    }

  }
  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
        {/* Header */}
        <motion.div className='md:w-3/5'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
            hidden: {opacity: 0, x: -100},
            visible: {opacity: 1, x: 0},
        }}
        >
          <Htext>
            <span className='text-primary-500'>JOIN NOW</span> TO GO IN SHAPE
          </Htext>
          <p className='my-5'>
          Embark on your fitness journey now! Join our community and unlock a world of health, vitality, and personal achievement.
          Your path to a healthier and stronger you begins with a simple form – join now!
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0},
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              action='https://formsubmit.co/el/jizime'
              method='POST'
            >
              <input 
                className={inputStyles}
                type='text'
                placeholder='Name'
                {...register("name", { required: true, maxLength:100})}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === "required" && "this field is required."}
                  {errors.name.type === "maxLength" && "Max Length is 100 char."}
                </p>
              )}

              <input 
                className={inputStyles}
                type='text'
                placeholder='Email'
                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === "required" && "this field is required."}
                  {errors.email.type === "pattern" && "Invalid Email adress."}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder='Message'
                {...register("message", { required: true, maxLength:2000})}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === "required" && "this field is required."}
                  {errors.message.type === "maxLength" && "Max Length is 2000 char."}
                </p>
              )}

              <button className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                type='submit'
                >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div className='relative mt-16 basis-2/5 md:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
              hidden: {opacity: 0, x: -100},
              visible: {opacity: 1, x: 0},
          }}
          >
             <div 
             className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img className='w-full' alt='contact-us-page-graphic'
              src={ContactUsPageGraphic}
              />
            </div>

          </motion.div>
        </div>

      </motion.div>

    </section>
  )
}

export default ContactUs;