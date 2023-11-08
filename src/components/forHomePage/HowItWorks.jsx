import { motion } from "framer-motion"

const HowItWorks = () => {
    const steps = [
       {id: 1,title: 'Login', description: "Login thorough your email or google account"},
       {id: 2,title: 'Browse Job', description: "To find your expected job browse job in job categories.There are tabs.When you click in one tab it will show you this category job"},
       {id: 3,title: 'Bid in  the Job', description: "After choosing your expected job , click 'Bid Now' button  and then fill up the form of 'Place Your Bid'. And click  'Bid On the Project' button"},
       {id: 4,title: 'Check Your Bids', description:"After bidding it will automatically redirect in 'My bids' page where you can see your bids"},
       {id: 5,title: 'Start Your Work', description: "Initially bidding status is 'pending' .After job owner accept your request it will be 'in progress'.And now you can start your work"},
       {id: 6,title: 'Complete Your Work ', description: "After finishing your work you simply press complete button and it will show your work is done"}
    ]
    return (
            <div>
                <h2 className="text-center text-3xl mt-10 font-black text-blue-600">How it Works for Job Seekers:</h2>
        <div className="lg:max-w-6xl mx-auto px-4 py-8 bg-green-500 mt-10 rounded-xl">
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

export default HowItWorks;