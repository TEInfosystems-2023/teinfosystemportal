
import { Link } from "react-router-dom";
import sf from "../assets/sf.mp4";

function SoftDev() {
    const services  = [{
        id:1,
        icon:"✦",
        title:"Web Development",
        description:"High-performance single page applications (SPA) and server-side rendered (SSR) web interfaces. Optimized for lightning-fast speeds and responsive mobile styling.",
        features:[
            "Frontend Development",
      "Backend Development",
      "E-commerce Websites",
      "Responsive Design"
        ]

    },{
        id:2,
        icon:"📱",
        title:"Mobile App Development",

        description:"Native mobile apps that run natively on iOS and Android. Built with robust local storage engines and push notification queues.",
        features:[
            "Custom Application Development",
        "Enterprise Software",
        "API Development",
        "Native Android Applications"
        ]

    },{
        id:3,
        icon:"🤝",
        title:"Custom CRM & ERP Portals",
        description:"Tailored management software configured around your company's workflows. Consolidate client records, billing ledgers, and inventories under one dashboard.",
        features:[
            "Custom Internal CRM Dashboards",
        "Role-Based Access Control (RBAC)",
        "Inventory & Order Syncing Modules"
        ]

    }]
  return (
    <div className="">

      <section className="relative p-6 items-start w-full h-125 overflow-hidden">

        {/* Background Video */}
        <video
          src={sf}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

       
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start text-white">

          <span className="inline-flex  items-center w-fit h-8 relative rounded-2xl py-3.5 px-3 text-sm  md:text-base  font-bold border-[0.1px] tracking-wider mb-6">
            Services
          </span>

          <h1 className="text-5xl md:text-7xl font-bold">
            Software Development
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-4xl">
            Crafting robust, scalable, and secure custom applications
            designed to streamline operations, automate business logic,
            and drive productivity.
          </p>

        </div>
 
      </section>
      <section className="min-h-screen p-7 flex flex-col justify-center items-center  mx-auto max-w-7xl sm:py-28">
        <h1 className="w-full flex 
        justify-center items-center text-4xl font-bold text-black">Our core Specification</h1>
        <p className="text-gray-400">We deliver state-of-the-art engineering across the entire software development spectrum.</p>
        <div className="grid grid-cols-1 grid-rows-3w-full mt-12 gap-10 sm:grid-cols-1 lg:grid-cols-3">
            {services.map((item)=>(
                <div key={item.id} className="shadow p-6 rounded-xl transition-all duration-300 ease-in-out
                hover:scale-101 hover:shadow-xl">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 text-2xl text-black-300">{item.icon}</span>
                    <h2 className="mt-2 text-xl font-bold" >
                        {item.title}
                    </h2>
                    <p className="text-gray-500 mt-3">
                        {item.description}
                    </p>
                    <ul className="list-disc pl-5 mt-4 marker:text-blue-500">
                        {
                        item.features.map((features,index)=>(
                            <li key={index}>{
                                features
                            }</li>
                        ))
                        }
                    </ul>

                </div>
            ))}
            
        </div>


      </section>

      <section
          
          aria-labelledby="cta-heading"
          className={`mx-auto max-w-7xl px-6 pb-24 sm:pb-28`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#111F40] via-[#0E1730] to-[#0A1020] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Let's Build Together
                </p>

                <h2
                  id="cta-heading"
                  className="mt-4 text-3xl text-white font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Have a technology challenge?
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  Tell us about your goals, your challenges, and the solution
                  you want to build. Let's start a conversation.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Start a Conversation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}

export default SoftDev;
