
const ContactForm = () => {
  return (
    <div className="my-28 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 bg-white rounded-lg">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 gap-7">
          <h2 className="text-3xl font-bold">
            Reach Out to Us: Let's Connect and Explore Opportunities Together
          </h2>
          <div>
            <h3 className="text-lg font-bold">Address</h3>
            <p>1686 Geraldine Lane New York, NY 10013</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>hello@wireframes.org</p>
            <p>+7-843-672-431</p>
          </div>
        </div>

        {/* Right Section */}
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Your Message..."
            className="textarea textarea-bordered w-full h-32"
          ></textarea>
          <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 text-white w-full">
            Action
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
