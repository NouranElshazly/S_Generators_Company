document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Generator Sales",
            description:
                `Supplying new generators with high quality and various specifications to meet residential and industrial needs.   <br></br>
                      • Partnerships with globally recognized brands (Alimar)<br></br>
                     • Technical consultations for optimal generator selection <br></br>
                     • Tailored solutions for major projects (airports, cities, transportation)`,
            imageUrl: "/assests/images/image(7).png"
        },
        {
            title: "Generator Rental",
            description: `Temporary power solutions for construction sites, events, and emergencies:  <br></br>
    • Wide range of capacities available  <br></br>
    • 24/7 technical support during rental  <br></br>
    • Specialized maintenance teams`,
            imageUrl: "/assests/images/generators1.png"
        },
        {
            title: "Installation & Commissioning",
            description: `Professional generator installation services:  <br></br>
    • Site-specific installation  <br></br>
    • Grid connection services  <br></br>
    • Performance testing & optimization`,
            imageUrl: "/assests/images/generators1.png"
        },
        {
            title: "Maintenance & Support",
            description: `Comprehensive after-sales services:  <br></br>
    • Preventive maintenance programs  <br></br>
    • Emergency repair services  <br></br>
    • Genuine spare parts supply <br></br>
    • 24/7 technical support`,
            imageUrl: "/assests/images/generators1.png"
        },
        {
            title: "Custom Energy Solutions",
            description: `Tailored power systems for:  <br></br>
    • Hospitals & healthcare facilities  <br></br>
    • Commercial complexes  <br></br>
    • Industrial plants  <br></br>
    • Energy efficiency optimization`,
            imageUrl: "/assests/images/generators1.png"
        },
        {
            title: "Remote Monitoring & Control",
            description: `Advanced IoT-based solutions for generator management:  <br></br>
    • Real-time performance monitoring  <br></br>
    • Remote diagnostics and troubleshooting  <br></br>
    • Predictive maintenance alerts`,
            imageUrl: "/assests/images/generators1.png"
        },
        {
            title: "Hybrid Power Systems",
            description: `Integration of generators with renewable energy sources:  <br></br>
    • Solar-generator hybrid systems  <br></br>
    • Wind-generator hybrid systems  <br></br>
    • Energy storage solutions`,
            imageUrl: "/assests/images/generators1.png"
        },
        {
            title: "Energy Audits & Consulting",
            description: `Expert energy assessment and advisory services:  <br></br>
    • Energy consumption analysis  <br></br>
    • Cost-saving recommendations  <br></br>
    • Customized energy management plans`,
            imageUrl: "/assests/images/generators1.png"
        },
        {
            title: "Training & Workshops",
            description: `Technical training programs for clients and staff:  <br></br> 
    • Generator operation and maintenance  <br></br>
    • Safety protocols and best practices  <br></br>
    • Energy efficiency workshops`,
            imageUrl: "/assests/images/generators1.png"
        }
    ];
    const servicesPerPage = 1; // Items per page
    let currentPage = 1;

    const serviceList = document.getElementById("service-list");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageNumber = document.getElementById("page-number");

    function createServiceCard(service) {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
            <div class="card-image">
                <img src="${service.imageUrl}" alt="${service.title}">
            </div>
            <div class="card-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <button>See More >></button>
            </div>
        `;
        return card;
    }

    function displayServices() {
        serviceList.innerHTML = "";
        const startIndex = (currentPage - 1) * servicesPerPage;
        const endIndex = startIndex + servicesPerPage;
        const currentServices = services.slice(startIndex, endIndex);

        currentServices.forEach(service => {
            serviceList.appendChild(createServiceCard(service));
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