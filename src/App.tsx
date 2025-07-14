import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Baby, Lock, UserPlus, MessageSquare } from "lucide-react";

export default function MaternityClothingBlog() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comments, setComments] = useState([""]); 
  const [newComment, setNewComment] = useState("");
  const [seasonFilter, setSeasonFilter] = useState("All");

  const handleSubscribe = () => {
    alert(`Account created for ${email}`);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  const allSeasonRecommendations = [
    {
      title: "Spring Styles",
      description: "Light layers, breathable fabrics, and floral maternity dresses. Ideal for warming weather.",
      link: "https://www.motherhood.com/collections/spring-maternity",
      season: "Spring"
    },
    {
      title: "Summer Essentials",
      description: "Stay cool with sleeveless tops, maternity swimsuits, and sun hats.",
      link: "https://www.motherhood.com/collections/summer-maternity",
      season: "Summer"
    },
    {
      title: "Autumn Picks",
      description: "Sweater dresses, cardigans, and neutral-toned outfits for fall comfort.",
      link: "https://www.motherhood.com/collections/fall-maternity",
      season: "Autumn"
    },
    {
      title: "Winter Wear",
      description: "Cozy maternity coats, thermal leggings, and boots to keep warm.",
      link: "https://www.motherhood.com/collections/winter-maternity",
      season: "Winter"
    },
  ];

  const filteredRecommendations = seasonFilter === "All"
    ? allSeasonRecommendations
    : allSeasonRecommendations.filter(item => item.season === seasonFilter);

  const shopCategories = [
    { name: "Maternity Wear", image: "https://images.pexels.com/photos/1648376/pexels-photo-1648376.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { name: "Newborn Boys", image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { name: "Newborn Girls", image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { name: "Toddlers Boys", image: "https://images.pexels.com/photos/1648378/pexels-photo-1648378.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { name: "Toddlers Girls", image: "https://images.pexels.com/photos/7097890/pexels-photo-7097890.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" }
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <header className="p-6 bg-pink-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl lg:text-3xl font-bold">Maternity Moments – Pregnancy Clothing Blog, Newborn Fashion & Toddler Style Tips</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#seasons" className="hover:underline">All Seasons</a>
            <a href="#subscribe" className="hover:underline">Subscribe</a>
          </nav>
        </div>
      </header>

      {/* Three Column Layout */}
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Sidebar - All-Season Clothing Recommendations */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-pink-700">All-Season Clothing Recommendations</h2>
              
              <div className="mb-4">
                <label className="font-medium text-sm mb-2 block">Filter by Season:</label>
                <select
                  value={seasonFilter}
                  onChange={(e) => setSeasonFilter(e.target.value)}
                  className="w-full border border-pink-200 p-2 rounded-md text-sm focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                >
                  <option value="All">All Seasons</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredRecommendations.map((item, index) => (
                  <Card key={index} className="bg-pink-50 border-pink-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm mb-2 text-pink-800">{item.title}</h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-3">{item.description}</p>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-pink-700 hover:text-pink-800 underline text-xs font-medium"
                      >
                        View Recommendations →
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content - Blog Posts */}
          <main className="lg:col-span-6">
            <section id="blog" className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Pregnancy to Preschool: Your Journey – Maternity Clothing, Baby Fashion, Toddler Wear</h2>
              
              <div className="space-y-8">
                <article className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                  <img 
                    src="https://images.pexels.com/photos/7097890/pexels-photo-7097890.jpeg?auto=compress&cs=tinysrgb&h=300" 
                    alt="First Trimester" 
                    className="rounded-xl mb-4 w-full h-48 object-cover" 
                  />
                  <h3 className="text-xl font-semibold mb-3">
                    What to Wear in the First Trimester – Maternity Clothing Guide 
                    <span className='ml-2 text-sm text-pink-600 font-normal'>(Spring)</span>
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Explore comfortable and stylish outfits that support your changing body in early pregnancy. Check out{' '}
                    <a href="https://www.motherhood.com" className="text-pink-700 underline hover:text-pink-800" target="_blank" rel="noopener noreferrer">
                      Motherhood Maternity
                    </a>{' '}
                    for great options.
                  </p>
                  
                  <div className="border-t border-pink-200 pt-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <MessageSquare size={16} />
                      Discussion:
                    </h4>
                    <div className="space-y-3">
                      <Input
                        placeholder="Share your experience or ask a question..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="border-pink-200 focus:ring-pink-300"
                      />
                      <Button 
                        onClick={handleCommentSubmit} 
                        className="bg-pink-600 hover:bg-pink-700"
                        size="sm"
                      >
                        Post Comment
                      </Button>
                    </div>
                    
                    {comments.filter(comment => comment.trim()).length > 0 && (
                      <div className="mt-4 space-y-2">
                        {comments.filter(comment => comment.trim()).map((comment, i) => (
                          <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-pink-100 text-sm">
                            {comment}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>

                <article className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                  <img 
                    src="https://images.pexels.com/photos/1648376/pexels-photo-1648376.jpeg?auto=compress&cs=tinysrgb&h=300" 
                    alt="Toddler Essentials" 
                    className="rounded-xl mb-4 w-full h-48 object-cover" 
                  />
                  <h3 className="text-xl font-semibold mb-3">
                    Top 10 Toddler Essentials for Every Season (Boys & Girls) 
                    <span className='ml-2 text-sm text-pink-600 font-normal'>(All Seasons)</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    From comfy clothes to playful patterns, discover what's trending for boys and girls aged 1–5. We love{' '}
                    <a href="https://www.carters.com" className="text-pink-700 underline hover:text-pink-800" target="_blank" rel="noopener noreferrer">
                      Carter's
                    </a>{' '}
                    and{' '}
                    <a href="https://www.burtsbeesbaby.com" className="text-pink-700 underline hover:text-pink-800" target="_blank" rel="noopener noreferrer">
                      Burt's Bees Baby
                    </a>{' '}
                    for toddler wear.
                  </p>
                </article>

                <article className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                  <img 
                    src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&h=300" 
                    alt="Pregnancy Snacks" 
                    className="rounded-xl mb-4 w-full h-48 object-cover" 
                  />
                  <h3 className="text-xl font-semibold mb-3">
                    Healthy Pregnancy Snacks 
                    <span className='ml-2 text-sm text-pink-600 font-normal'>(Spring)</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nourish your body and baby with these delicious and nutritious snack ideas perfect for every trimester.
                  </p>
                </article>

                <article className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                  <img 
                    src="https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&h=300" 
                    alt="DIY Baby Clothes" 
                    className="rounded-xl mb-4 w-full h-48 object-cover" 
                  />
                  <h3 className="text-xl font-semibold mb-3">
                    DIY Baby Clothes 
                    <span className='ml-2 text-sm text-pink-600 font-normal'>(Autumn)</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create adorable, personalized outfits for your little one with these simple DIY projects and patterns.
                  </p>
                </article>
              </div>
            </section>
          </main>

          {/* Right Sidebar - Shopping Suggestions */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-pink-700">Suggestions – Best Baby Clothes, Maternity Fashion Trends, Kidswear Deals</h2>
              
              <div className="space-y-4">
                {shopCategories.map((category, i) => (
                  <Card key={i} className="bg-pink-50 border-pink-200 hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-sm mb-2 text-pink-800">{category.name}</h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        Find stylish, safe, and season-appropriate outfits for all stages of motherhood and early childhood.
                      </p>
                      <Button 
                        size="sm" 
                        className="w-full bg-pink-600 hover:bg-pink-700 text-xs"
                      >
                        Shop Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Subscribe Section */}
      <section id="subscribe" className="p-8 bg-pink-100 mt-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Create an Account or Subscribe</h2>
          <div className="flex flex-col gap-4">
            <Input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="border-pink-200 focus:ring-pink-300"
            />
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="border-pink-200 focus:ring-pink-300"
            />
            <Button 
              onClick={handleSubscribe} 
              className="bg-pink-600 hover:bg-pink-700"
            >
              Sign Up
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Your information is safe and used only for account-related communication.
          </p>
        </div>
      </section>

      <footer className="p-6 bg-pink-700 text-white text-center mt-6">
        <Baby className="mx-auto mb-2" />
        <p>Celebrating motherhood from bump to baby steps</p>
        <p className="mt-2">&copy; 2025 Maternity Moments. All rights reserved.</p>
      </footer>
    </div>
  );
}