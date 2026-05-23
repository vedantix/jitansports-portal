import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import moment from 'moment';

const FALLBACK_POSTS = [
  { id: "1", title: "Voordelen van Massage en Personal Training", slug: "voordelen-van-massage-en-personal-training", excerpt: "Wil jij je meer ontspannen voelen, fitter en met een sterker lichaam? Dan is de combinatie van massage en personal training het gouden duo!", featured_image: "https://media.base44.com/images/public/6a115e447a3ac96774309014/f2afe8ff0_generated_c71cfae0.png", category: "Lifestyle", created_date: "2025-01-15" },
  { id: "2", title: "Sportscholen open", slug: "sportscholen-open", excerpt: "Gelukkig mogen sportscholen weer open gaan. Maar buitentrainen blijft geweldig!", featured_image: "https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png", category: "Nieuws", created_date: "2022-01-14" },
  { id: "3", title: "Sportscholen gesloten, maar buiten sporten kan wel", slug: "sportscholen-gesloten", excerpt: "Sportscholen gesloten? Geen probleem! Buiten sporten kan altijd en is super effectief.", featured_image: "https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png", category: "Personal Training", created_date: "2021-12-01" },
  { id: "4", title: "Sporten in coronatijd", slug: "sporten-in-coronatijd", excerpt: "Zelf sporten in coronatijd is lastig. JitanSports helpt je graag verder, coronaproof.", featured_image: "https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png", category: "Personal Training", created_date: "2021-02-01" },
  { id: "5", title: "Get in shape op anderhalve meter", slug: "get-in-shape-op-anderhalve-meter", excerpt: "JitanSports biedt trainingen op anderhalve meter. Juist nu is het belangrijk om fit te blijven.", featured_image: "https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png", category: "Personal Training", created_date: "2020-06-01" },
  { id: "6", title: "Welkom bij JitanSports!", slug: "welkom-bij-jitansports", excerpt: "Met trots presenteren wij ons bedrijf. Wil jij graag fitter worden, gespierder of strakker in je vel?", featured_image: "https://media.base44.com/images/public/6a115e447a3ac96774309014/115f006bd_generated_a407f042.png", category: "Nieuws", created_date: "2020-02-01" },
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Blog.filter({ status: 'gepubliceerd' }, '-created_date').then(data => {
      setPosts(data?.length ? data : FALLBACK_POSTS);
    }).catch(() => setPosts(FALLBACK_POSTS)).finally(() => setLoading(false));
  }, []);

  const displayPosts = posts.length ? posts : FALLBACK_POSTS;

  return (
    <div>
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Blog</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{"Inzichten & Tips"}</h1>
            <p className="text-secondary-foreground/70 text-lg">De laatste artikelen over training, voeding en welzijn.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden bg-white border border-border/50 hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img src={post.featured_image || "https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png"} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-6">
                      {post.category && (
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                      )}
                      <h2 className="text-lg font-bold text-secondary mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {moment(post.created_date).format('D MMMM YYYY')}
                        </span>
                        <span className="text-primary text-sm font-medium flex items-center gap-1">
                          Lees meer <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}