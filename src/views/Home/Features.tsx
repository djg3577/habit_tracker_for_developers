export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "🏆",
            title: "Track your goals",
            description: "Keep track of your achievements and stay motivated.",
          },
          {
            icon: "⏰",
            title: "Optimize your time",
            description: "Manage your time efficiently and boost productivity.",
          },
          { icon: "💪", title: "Stay healthy", description: "Maintain a healthy lifestyle while working hard." },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <i className="text-4xl mb-4 block">{feature.icon}</i>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
