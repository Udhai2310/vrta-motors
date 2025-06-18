function EnquiryForm(){
    return <>
        <div className="bg-gray-100 p-8 rounded-2xl shadow-lg space-y-6">
      <h3 className="text-2xl font-bold mb-4">Enquire Now</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="human" className="w-4 h-4" />
          <label htmlFor="human" className="text-gray-700">I am human</label>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
    </>
}

export default EnquiryForm;