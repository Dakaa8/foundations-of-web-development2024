function fetchChefs() {
    $.ajax({
        url: "/assets/json/data.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            let html = "";
            data.forEach(function (chef) {
                html += `<div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="chef-member">
                        <div class="member-img">
                            <img src="${chef.image}" class="img-fluid" alt="">
                            <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mt-2">
                            <button type="button" class="btn text-secondary" data-bs-toggle="modal" data-bs-target="#editChefModal" onclick="editchef(${chef.chef_id})"><i class="fas fa-edit" aria-hidden="true"></i></button>
                            <button type="button" class="btn text-danger" onclick="deletechef(${chef.chef_id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                        <div class="member-info">
                            <h4>${chef.name}</h4>
                            <span>${chef.role}</span>
                            <p>${chef.description}</p>
                        </div>
                    </div>
                </div>`;
            });
            $("#daka").html(html);
        },
        error: function (xhr, status, error) {
            console.error("Error fetching chefs:", error);
        },
    });
}

fetchChefs()
