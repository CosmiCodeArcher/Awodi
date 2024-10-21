function Contact() {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="mb-4">I&apos;m always open to new opportunities and collaborations. Feel free to reach out!</p>
            <ul className="list-disc list-inside">
                <li className="mb-2">
                Email: <span className="text-blue-500 select-all">awodiomale@gmail.com</span>
                <a href="mailto:awodiomale@gmail.com" className="ml-2 text-sm text-blue-500 hover:underline">(Click to email)</a>
                </li>
                <li className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/awodi-ochiponu-b10126204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/awodi-ochiponu</a></li>
                <li className="mb-2">GitHub: <a href="https://github.com/Ochiponu-Awodi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/Ochiponu-Awodi</a></li>
            </ul>
            <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
                <form name="contact" method="POST" data-netlify="true" className="space-y-4">
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label htmlFor="name" className="block mb-1">Name:</label>
                        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1">Email:</label>
                        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1">Message:</label>
                        <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded-md" rows="4"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact