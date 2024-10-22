/* eslint-disable */

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(form)).toString()
        })
        .then(() => {
            window.location.href = '/success';
        })
        .catch((error) => alert(error));
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-karla">Contact Me</h2>
            <p className="text-sm md:text-base mb-6">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            {/* Contact Information */}
            <div className="bg-white/5 rounded-lg p-4 md:p-6 mb-8 backdrop-blur-sm">
                <ul className="space-y-4">
                    <li className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base">
                        <span className="font-semibold min-w-[80px] mb-1 sm:mb-0">Email:</span>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 select-all">awodiomale@gmail.com</span>
                            <a 
                                href="mailto:awodiomale@gmail.com" 
                                className="text-modern-coral hover:text-modern-teal transition-colors duration-300"
                            >
                                (Click to email)
                            </a>
                        </div>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base">
                        <span className="font-semibold min-w-[80px] mb-1 sm:mb-0">LinkedIn:</span>
                        <a 
                            href="https://www.linkedin.com/in/awodi-ochiponu-b10126204" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-modern-coral hover:text-modern-teal transition-colors duration-300"
                        >
                            linkedin.com/in/awodi-ochiponu
                        </a>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base">
                        <span className="font-semibold min-w-[80px] mb-1 sm:mb-0">GitHub:</span>
                        <a 
                            href="https://github.com/Ochiponu-Awodi" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-modern-coral hover:text-modern-teal transition-colors duration-300"
                        >
                            github.com/Ochiponu-Awodi
                        </a>
                    </li>
                </ul>
            </div>
            {/* Contact Form */}
            <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 font-karla">Send me a message</h3>
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                >
                    <input type="hidden" name="form-name" value="contact" />
        
                    <div className="space-y-2">
                        <label 
                            htmlFor="name" 
                            className="block text-sm md:text-base font-medium"
                        >
                            Name:
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-4 py-2 border rounded-md bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-modern-coral"
                        />
                    </div>

                    <div className="space-y-2">
                        <label 
                            htmlFor="email" 
                            className="block text-sm md:text-base font-medium"
                        >
                            Email:
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-2 border rounded-md bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-modern-coral"
                        />
                    </div>

                    <div className="space-y-2">
                        <label 
                            htmlFor="message" 
                            className="block text-sm md:text-base font-medium"
                        >
                            Message:
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            rows="4"
                            className="w-full px-4 py-2 border rounded-md bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-modern-coral resize-none"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full sm:w-auto px-6 py-2 bg-modern-coral text-white rounded-md hover:bg-modern-teal transition-colors duration-300 text-sm md:text-base font-medium"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )}


export default Contact