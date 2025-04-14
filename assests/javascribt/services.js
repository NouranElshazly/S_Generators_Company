document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Generator Sales",
            description:
                `Supplying new generators with high quality and various specifications to meet residential and industrial needs.   <br></br>
                      • Partnerships with globally recognized brands (Alimar)<br></br>
                     • Technical consultations for optimal generator selection <br></br>
                     • Tailored solutions for major projects (airports, cities, transportation)`,
            imageUrl: "../assests/images/image(7).png"
        },
        {
            title: "Generator Rental",
            description: `Temporary power solutions for construction sites, events, and emergencies:  <br></br>
    • Wide range of capacities available  <br></br>
    • 24/7 technical support during rental  <br></br>
    • Specialized maintenance teams`,
            imageUrl: "../assests/images/generators1.png"
        },
        {
            title: "Installation & Commissioning",
            description: `Professional generator installation services:  <br></br>
    • Site-specific installation  <br></br>
    • Grid connection services  <br></br>
    • Performance testing & optimization`,
            imageUrl: "../assests/images/generators1.png"
        },
        {
            title: "Maintenance & Support",
            description: `Comprehensive after-sales services:  <br></br>
    • Preventive maintenance programs  <br></br>
    • Emergency repair services  <br></br>
    • Genuine spare parts supply <br></br>
    • 24/7 technical support`,
            imageUrl: "../assests/images/generators1.png"
        },
        {
            title: "Custom Energy Solutions",
            description: `Tailored power systems for:  <br></br>
    • Hospitals & healthcare facilities  <br></br>
    • Commercial complexes  <br></br>
    • Industrial plants  <br></br>
    • Energy efficiency optimization`,
            imageUrl: "../assests/images/generators1.png"
        } 
    ];
    const servicesPerPage = 1; // Items per page
    let currentPage = 1;

    const serviceList = document.getElementById("service-list");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageNumber = document.getElementById("page-number");

    function createServiceCard(service) {
        return `
            <div class="service-row">
                <div class="service-image">
                    <img src="${service.imageUrl}" alt="${service.title}">
                </div>
                <div class="service-info">
                    <h3>${service.title}</h3>
                    <div class="service-description">
                        ${service.description}
                    </div>
                    <div class="service-features">
                        <div class="feature">
                            <i class="fas fa-check"></i>
                            <span>Expert Installation</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check"></i>
                            <span>Quality Service</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check"></i>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                    <a href="service-detail.html?id=${encodeURIComponent(service.title)}" 
                       class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    }

    function displayServices() {
        serviceList.innerHTML = "";
        const startIndex = (currentPage - 1) * servicesPerPage;
        const endIndex = startIndex + servicesPerPage;
        const currentServices = services.slice(startIndex, endIndex);

        currentServices.forEach(service => {
            serviceList.innerHTML += createServiceCard(service);
        });

        pageNumber.textContent = `Page ${currentPage}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = endIndex >= services.length;
    }

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayServices();
        }
    });

    nextBtn.addEventListener("click", () => {
        const endIndex = currentPage * servicesPerPage;
        if (endIndex < services.length) {
            currentPage++;
            displayServices();
        }
    });

    displayServices();
});
window.addEventListener('beforeunload', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loadingSpinner').style.display = 'block';
});

window.addEventListener('load', function () {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'none';
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetUrl = this.href;

        document.getElementById('overlay').style.display = 'block';
        document.getElementById('loadingSpinner').style.display = 'block';

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1500); // set timer for loading pages
    });
});