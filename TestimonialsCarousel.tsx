import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maya",
    age: 14,
    text: "The AI chat was amazing! It helped me find the perfect coral lip shade. I never thought I'd love makeup this much. My confidence has grown so much since getting my kit.",
    color: "from-pink-400 to-purple-500",
    initial: "M"
  },
  {
    name: "Sophia", 
    age: 16,
    text: "I LOVE my cotton candy scented lip balm! The whole kit made me feel so special. Thank you for helping me discover my style and feel beautiful inside and out.",
    color: "from-purple-400 to-blue-500",
    initial: "S"
  },
  {
    name: "Aria",
    age: 12,
    text: "The AI was so cool! It understood exactly what I wanted. Now I feel confident at school and love my self-care routine. Best surprise ever!",
    color: "from-blue-400 to-teal-500",
    initial: "A"
  },
  {
    name: "Emma",
    age: 15,
    text: "Getting my kit felt like Christmas morning! Everything was perfect for my style. The lipstick color matches my personality perfectly. I feel so much more confident now.",
    color: "from-teal-400 to-green-500",
    initial: "E"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Girls Are Saying</h2>
          <p className="text-xl text-gray-600">Real stories from girls who've received their Swervy Cares kits</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-12">
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6`}>
                      {testimonial.initial}
                    </div>
                    <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-center items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}, {testimonial.age}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-swervy-pink scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}