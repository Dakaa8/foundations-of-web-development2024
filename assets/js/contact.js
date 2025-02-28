$("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      subject: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Name should be at least 2 characters",
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      subject: {
        required: "Please enter the subject",
      },
      message: {
        required: "Please enter your message",
      },
    },
    submitHandler: function (form, event) {
      event.preventDefault();
      contactFormHandler(form);
      toastr.success("Your message was sent successfully")
    },
  });
  
  function contactFormHandler(form) {
    blockUi("#contact-form");
    let data = serializeForm(form);
  
    console.log("Contact Form Data:", data);
  
    form.reset();
  
    unblockUi("#contact-form");
  }
  
  blockUi = (element) => {
    $(element).block({
      message: '<div class="spinner-border text-primary" role="status"></div>',
      css: {
        backgroundColor: "transparent",
        border: "0",
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: 0.25,
      },
    });
  };
  
  unblockUi = (element) => {
    $(element).unblock({});
  };
  
  serializeForm = (form) => {
    let jsonResult = {};
    $.each($(form).serializeArray(), function () {
      jsonResult[this.name] = this.value;
    });
    return jsonResult;
  };