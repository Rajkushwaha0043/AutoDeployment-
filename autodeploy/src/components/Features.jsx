const Features = () => {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Automatic Deployment',
            description: 'Push your code to GitHub and watch it deploy automatically. No manual intervention required.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: 'CI/CD Pipeline',
            description: 'GitHub Actions automatically builds, tests, and deploys your application with every commit.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: 'Reusable Setup',
            description: 'This CI/CD pipeline configuration can be easily adapted and reused for any of your projects.',
            color: 'from-green-500 to-teal-500'
        }
    ];

    return (
        <section id="features" className="py-24 px-6 bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Key Features</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Experience the power of modern DevOps with automated deployment workflows
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-8 card-hover group"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
