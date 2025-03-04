import GetStartedButton from "@/components/landing/GetStartedButton"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { FaSeedling, FaTractor, FaLeaf, FaCloudSun, FaChartLine, FaHandHoldingWater } from "react-icons/fa"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 overflow-y-auto">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Farm landscape"
            
            className="object-cover brightness-[0.7]"

          />
        </div>
        <header className="relative z-10 text-center flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-[80vh] text-white">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-400">
            AI AgroNexus
          </h1>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-400">
            Revolutionizing farming with cutting-edge technology and sustainable practices.
          </p>
          <GetStartedButton />
        </header>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Agricultural Solutions</h2>

          <div className="grid md:grid-cols-6 gap-4 mt-8">
            <Card className="p-6 col-span-2 text-center shadow-lg transform hover:scale-[102%] hover:bg-gray-100/80 dark:hover:bg-gray-700/60 cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <FaSeedling className="text-green-600 dark:text-green-400 text-4xl mx-auto mb-4" />
              <CardTitle className="text-xl">Smart Seeding</CardTitle>
              <CardContent className="text-gray-600 dark:text-gray-300">
                Precision planting technology that optimizes seed placement and spacing for maximum yield.
              </CardContent>
            </Card>

            <Card className="p-6 col-span-2 text-center shadow-lg transform hover:scale-[102%] hover:bg-gray-100/80 dark:hover:bg-gray-700/60 cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <FaTractor className="text-yellow-600 dark:text-yellow-400 text-4xl mx-auto mb-4" />
              <CardTitle className="text-xl">Automated Machinery</CardTitle>
              <CardContent className="text-gray-600 dark:text-gray-300">
                GPS-guided equipment that reduces labor costs and increases operational efficiency.
              </CardContent>
            </Card>

            <Card className="p-6 col-span-2 text-center shadow-lg transform hover:scale-[102%] hover:bg-gray-100/80 dark:hover:bg-gray-700/60 cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <FaLeaf className="text-green-600 dark:text-green-400 text-4xl mx-auto mb-4" />
              <CardTitle className="text-xl">Organic Solutions</CardTitle>
              <CardContent className="text-gray-600 dark:text-gray-300">
                Sustainable farming practices that maintain soil health and biodiversity.
              </CardContent>
            </Card>

            <Card className="p-6 col-span-3 text-center shadow-lg transform hover:scale-[102%] hover:bg-gray-100/80 dark:hover:bg-gray-700/60 cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <FaCloudSun className="text-blue-600 dark:text-blue-400 text-4xl mx-auto mb-4" />
              <CardTitle className="text-xl">Weather Analytics</CardTitle>
              <CardContent className="text-gray-600 dark:text-gray-300">
                Advanced forecasting tools to help plan farming activities and mitigate weather-related risks.
              </CardContent>
            </Card>

            <Card className="p-6 col-span-3 text-center shadow-lg transform hover:scale-[102%] hover:bg-gray-100/80 dark:hover:bg-gray-700/60 cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <FaHandHoldingWater className="text-blue-600 dark:text-blue-400 text-4xl mx-auto mb-4" />
              <CardTitle className="text-xl">Smart Irrigation</CardTitle>
              <CardContent className="text-gray-600 dark:text-gray-300">
                Water-efficient systems that deliver precise amounts of water based on soil conditions and plant needs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose AgriTech</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img src="/placeholder.svg?height=800&width=600" alt="Farmer in field" className="object-cover" />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FaChartLine className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Increased Crop Yield</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our solutions have helped farmers increase their yields by up to 30% through optimized growing
                    conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FaHandHoldingWater className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Water Usage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Smart irrigation systems can reduce water consumption by up to 40% while maintaining optimal plant
                    health.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FaTractor className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lower Operational Costs</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automation and precision agriculture techniques reduce labor costs and optimize resource usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Farmers Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-left shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Farmer portrait"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">John Peterson</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Wheat Farmer, Kansas</p>
                </div>
              </div>
              <CardContent className="text-gray-600 dark:text-gray-300 italic">
                "Since implementing AgriTech's smart irrigation system, I've seen a 25% increase in yield while using
                less water. The return on investment was realized within the first season."
              </CardContent>
            </Card>

            <Card className="p-6 text-left shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Farmer portrait"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">Maria Rodriguez</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Organic Farmer, California</p>
                </div>
              </div>
              <CardContent className="text-gray-600 dark:text-gray-300 italic">
                "The soil monitoring technology has transformed how I manage my organic crops. I can now make
                data-driven decisions that have improved soil health dramatically."
              </CardContent>
            </Card>

            <Card className="p-6 text-left shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Farmer portrait"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">Robert Johnson</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Dairy Farmer, Wisconsin</p>
                </div>
              </div>
              <CardContent className="text-gray-600 dark:text-gray-300 italic">
                "The automated feeding systems have not only saved us time but have also improved the health and
                productivity of our herd. The analytics dashboard gives us insights we never had before."
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 dark:bg-green-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg">Farms Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">30%</p>
              <p className="text-lg">Average Yield Increase</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">40%</p>
              <p className="text-lg">Water Saved</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">25+</p>
              <p className="text-lg">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of farmers who are already seeing the benefits of our agricultural technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 font-medium">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3 border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition-colors duration-300 font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AgriTech Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Empowering farmers with technology for sustainable and profitable agriculture.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Smart Irrigation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Soil Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Precision Farming
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Livestock Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Crop Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>123 Farm Road, Heartland, USA</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>info@agritech.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>(123) 456-7890</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AgroNexus. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

