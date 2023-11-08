import { motion } from "framer-motion"

const HowItWorksForBuyer = () => {
    const steps = [
        {id: 1,title: 'Login', description: "Login thorough your email or google account"},
        {id: 2,title: 'Add Job', description: "To add your job click on Add job page in Navbar.And then fill up the form and submit"},
        {id: 3,title: 'Your Posted Jobs', description: "After adding your job ,it will automatically redirect in 'My posted jobs' page. Here you can see all your posted jobs . If you want to make any changes(update, delete) , you can do it here"},
        {id: 4,title: 'Check Bid Requests', description:"If any job seeker bid in your job, you can see it in 'Bid requests' page.And if you are satisfied with the bidder you can assign him/her the work to click the accept button.Or if you're not satisfied you can reject the request"},
        {id: 5,title: ' Work Finished', description: "After finishing your work  the bidder simply press complete button and it will show you: your work is done by the progress bar."}
     ]
     return (
             <div className="lg:max-w-6xl mx-auto md:max-w-2xl max-w-xs">
                 <h2 className="text-center text-3xl mt-10 font-black text-yellow-600">How it Works for Job Owners:</h2>
         <div className="lg:max-w-6xl mx-auto px-4 py-8 bg-blue-600 mt-10 rounded-xl">
             <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 mt-8 text-white">
                 {
                     steps.map((step )=> (
                        <motion.div key={step.id} whileHover={{scale: 1.1}} whileTap={{scale:0.8}}
                        className="border px-2 py-4">
                         <h4 className="text-center text-2xl font-bold mb-2">{step.title}</h4>
                         <p>{step.description}</p>
                        </motion.div>
                     ))
                 }
             </div>
         </div>
             </div>
     );
};

export default HowItWorksForBuyer;