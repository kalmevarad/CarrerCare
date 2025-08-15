import "./Contact.css";
import { Phone , Mail , MapPin, Instagram , Linkedin , Twitter, Twitch , Youtube} from "lucide-react"
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";



const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "50ab04b6-2e87-495b-ba9e-68ccfbca50a1");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      toast.success("Message Submitted Successfully !");
      event.target.reset();
    }
  };
   
 return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-100">
       <div className=" flex justify-center items-center w-full min-h-screen"> 
          <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
            <div className="flex flex-col space-y-8 justify-between"> 
               <div>
                 <h1 className=" font-bold text-4xl tracking-wide">contact us </h1>
                  <p className="pt-3 text-cyan-400 text-sm">Got a question or need guidance?

                  <p className="text-sm text-cyan-100">The CareerCare team is just a message away. Let’s connect and grow your future together!</p>
                    
                  </p>
               </div>
               <div className="flex flex-col space-y-4">
                <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300"> <Phone /> </span>
                     <a
                    href="tel:+919123456789"
                    className="hover:underline text-white"
                     >
                    +91-9123456789
                    </a> 
                  
                </div>  
                <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300"> <Mail /> </span> 
                    <a
                   href="mailto:CarrerCare@gmail.com"
                   className="hover:underline text-white">
                   
                   <span> CarrerCare@gmail.com </span>
                    </a>
                </div>
                  <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300"> <MapPin /></span> 
                   <a
                   href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India"
                   target="_blank"
                    rel="noopener noreferrer"
                   className="hover:underline text-white">
                   Mumbai, Maharashtra, India
                   </a>
                </div>
               
               </div>
               <div className="flex space-x-4 text-lg">
                <a href="https://www.linkedin.com"><span><Linkedin /></span></a>
                <a href="https://www.instagram.com/"><span><Instagram /></span></a>
                <a href="https://x.com/"><span><Twitter /></span></a>
                <a href="https://www.youtube.com/"><span><Youtube size={28} /></span></a>
                <a href="https://www.twitch.tv/"><span><Twitch /></span></a>
               </div>
            </div> 
            <div className="relative ">
              <div className=" absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
               <div className=" absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8  text-gray-600 md:w-90" >
               <form onSubmit={onSubmit} action="flex flex-col space-y-6n">

                <div>
                  <label htmlFor="" className="text-sm">Your Name</label>
                </div>
                <div>
                  <input type="text" placeholder="your name" name="name" required className=" field  ring-1 ring-gray-300 w-full
                   rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  " />
                </div>
                 <div>
                  <label htmlFor="" className="text-sm">Email Address</label>
                </div>
                <div>
                  <input type="email" placeholder="Email adress" name="email" required className=" field ring-1 ring-gray-300 w-full
                   rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 border-b-gray-300 " />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">Message</label>
                </div>
                <div>
                  <textarea placeholder="Message" name="message" required rows={4} className="field mess ring-1 ring-gray-300 w-full
                   rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " />
                  
                </div>
                <button type="submit" className=" hover:bg-cyan-600 cursor-pointer inline-block bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm self-end">send message</button>
               </form>
              </div>
            </div>  
          </div>
       </div>
      </div>
      
     

    </>
  )
};

export default Contact;
