$("#editChefForm").validate({
    submitHandler: (form, event) => {
      event.preventDefault();
      let data = serializeForm(form);
      console.log("Data sent successfully:", data);
      toastr.success("Chef data updated successfully!");
    },
  });
  
  serializeForm = (form) => {
    let jsonResult = {};
    $(form).serializeArray().forEach((field) => {
      jsonResult[field.name] = field.value;
    });
    return jsonResult;
  };
  
  editchef = (id) => {
    let data = {
      chef_id: id,
      chef_name: "Example Chef",
      chef_description: "Example description",
      chef_salary: "$10.99",
      chef_image: "example.jpg",
    };
    $("#edit_chef_id").val(data.chef_id);
    $("#chef_name").val(data.chef_name);
    $("#chef_description").val(data.chef_description);
    $("#chef_salary").val(data.chef_salary);
    $("#chef_image").val(data.chef_image);
    console.log(data);
  };
  
  deletechef = (id) => {
    if (confirm("Do you want to delete the user with the id: " + id + "?")) {
      console.log("Successfully deleted chef with ID:", id);
      toastr.success("Chef deleted successfully!");
    }
  };
  