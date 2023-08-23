function Form() {
  return (
    <form method='post' action='tofu1300@gmail.com' className='contact-form'>      
      <input className='contact-form-input-name' name='name' type='text' placeholder='Name' />   
      <input className='contact-form-input-email' name='email' type='text' placeholder='Email' />
      <textarea className='contact-form-input-text' name='text' placeholder='Comment' />
      <input  className='contact-form-submit' type='submit' value='SUBMIT'/>
    </form>
  )
}

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-title'>
        CONTACT US
      </div>
      <Form />
    </div>
  )
}