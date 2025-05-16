import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Share2, Star, Sparkles } from "lucide-react"
import events from "./EventsData"

// Utility function to generate slug from event title
const createSlug = (title) => title.toLowerCase().replace(/ /g, "-")

const EventDetail = () => {
  const { slug } = useParams() // Get the slug from the route
  const [activeTab, setActiveTab] = useState("about")
  const [isLoaded, setIsLoaded] = useState(false)

  // Find event based on the slug
  const event = events.find((event) => createSlug(event.title) === slug)

  useEffect(() => {
    // Set loaded state after component mounts for animations
    setIsLoaded(true)
  }, [])

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white p-8 bg-zinc-900 rounded-lg shadow-xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </div>
      </div>
    )
  }

  // Get description sections from the event data
  const descriptionSections = event.descriptionSections || {
    about: event.description,
    vision: "",
    callout: "",
    review: "",
    conclusion: "",
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: `Check out this event: ${event.title}`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error))
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Could not copy text: ", err))
    }
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6">
      <div className="max-w-7xl  mx-auto">
        {/* Back Button */}
        <Link
          to="/events"
          className={`inline-flex mt-10 items-center text-yellow-500 hover:text-yellow-400 mb-8 transition-colors ${
            isLoaded ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        {/* Bento Grid Layout - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          {/* Event Info Block - 5 columns */}
          <div
            className={`md:col-span-5 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl flex flex-col justify-between h-[300px] hover:border-zinc-700 transition-all duration-300 ${
              isLoaded ? "animate-slideInLeft" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-black/60 rounded-full border border-zinc-800 mb-4">
                <Sparkles className="h-3 w-3 text-yellow-500 mr-2" />
                <span className="text-yellow-500 font-medium text-xs">FEATURED EVENT</span>
              </div>

              <h1 className="text-3xl font-bold mb-3">
                <span className="text-yellow-500">{event.title.split(" ").slice(0, 2).join(" ")} </span>
                <span className="text-white">{event.title.split(" ").slice(2).join(" ")}</span>
              </h1>

              <div className="flex items-center text-zinc-400 mb-4">
                <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                <span>{event.date}</span>
              </div>

              <p className="text-zinc-400 text-sm line-clamp-3">{descriptionSections.about.substring(0, 120)}...</p>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-white transition-colors self-start text-sm"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share Event
            </button>
          </div>

          {/* Event Image Block - 7 columns */}
          <div
            className={`md:col-span-7 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl h-[300px] hover:shadow-2xl transition-all duration-300 ${
              isLoaded ? "animate-slideInRight" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Event Content */}
        <div
          className={`bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 ${
            isLoaded ? "animate-slideInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {/* Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-zinc-800">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                activeTab === "about"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              About Event
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                activeTab === "vision"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Vision
            </button>
            <button
              onClick={() => setActiveTab("review")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                activeTab === "review"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Review
            </button>
            <button
              onClick={() => setActiveTab("conclusion")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                activeTab === "conclusion"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Conclusion
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {activeTab === "about" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">About The Event</h2>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{descriptionSections.about}</p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Our Vision</h2>
                <div className="bg-black/40 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <p className="text-zinc-300 leading-relaxed italic">
                    {descriptionSections.callout}
                  </p>
                </div>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{descriptionSections.vision}</p>
              </div>
            )}

            {activeTab === "review" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Event Review</h2>
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="ml-2 text-zinc-300">Outstanding Experience</span>
                </div>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{descriptionSections.review}</p>
              </div>
            )}

            {activeTab === "conclusion" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Conclusion</h2>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{descriptionSections.conclusion}</p>
                <div className="mt-8 p-4 bg-black/40 rounded-lg border border-zinc-800">
                  <p className="text-white font-medium">
                    <span className="text-yellow-500">Stay tuned</span> for our next event! Follow us on social media
                    for updates.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
