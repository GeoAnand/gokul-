import React from "react";
// import 'https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css'
// import 'https://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'
// import 'https://code.jquery.com/jquery-1.11.1.min.js'
// import 'https://code.jquery.com/jquery-3.2.1.js'

function Contact() {
    return (
      <>
      <div class="About-hero">
      <div class="advcard-head">
        <h1 class="text-black">Get in touch today!</h1>
      </div>
      <div class="py-5 text-justify container about">
        <div class="row py-lg-5 ">
        <div className="container-fluid">
  <div className="container">
    <div className="formBox">
      <form>
        <div className="row">
          <div className="col-sm-6">
            <div className="inputBox ">
              <div className="inputText">First Name</div>
              <input type="text" name="" className="input" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="inputBox">
              <div className="inputText">Last Name</div>
              <input type="text" name="" className="input" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="inputBox">
              <div className="inputText">Email</div>
              <input type="text" name="" className="input" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="inputBox">
              <div className="inputText">Mobile</div>
              <input type="text" name="" className="input" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="inputBox">
              <div className="inputText">Email</div>
              <textarea className="input" defaultValue={""} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input
              type="submit"
              name=""
              className="button"
              defaultValue="Send Message"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


        </div>
      </div>
      </div>

      <script>
        
      </script>
      </>
  )
}

export default Contact;