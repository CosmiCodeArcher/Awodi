function Success() {
    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto text-center">
            <div className="bg-white/5 rounded-lg p-6 md:p-8 backdrop-blur-sm">
                <svg 
                    className="w-16 h-16 mx-auto text-green-500 mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-karla">Message Sent Successfully!</h2>
                <p className="text-sm md:text-base mb-6">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-2 bg-modern-coral text-white rounded-md hover:bg-modern-teal transition-colors duration-300 text-sm md:text-base font-medium"
                >
                    Return Home
                </button>
            </div>
        </div>
    );
}

export default Success;