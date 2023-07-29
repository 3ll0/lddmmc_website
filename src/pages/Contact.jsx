function Form() {
  return (
    <form method='post' action='tofu1300@gmail.com' className='contact-form'>      
      <input class='contact-form-input-name' name='name' type='text' placeholder='Name' />   
      <input class='contact-form-input-email' name='email' type='text' placeholder='Email' />
      <textarea class='contact-form-input-text' name='text' placeholder='Comment' />
      <input  class='contact-form-submit' type='submit' value='SUBMIT'/>
    </form>
  )
}

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-title'>
        Contact Us
      </div>
      <Form />
    </div>
  )
}