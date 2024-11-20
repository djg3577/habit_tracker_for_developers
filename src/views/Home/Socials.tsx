export const Socials = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Feel Free To Connect With Me :</h2>
      <div className="flex justify-center space-x-4 mt-8">
        <div className="flex justify-center space-x-4">
          {[
            { name: "Github", url: "YOUR GITHUB HERE" },
            { name: "LinkedIn", url: "YOUR LINKED IN HERE" },
          ].map((platform) => (
            <a key={platform.name} href={platform.url} className="text-red-600 hover:text-red-800 text-3xl">
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
