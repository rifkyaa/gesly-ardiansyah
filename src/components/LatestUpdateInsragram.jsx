import { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

const LatestUpdateInsragram = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setPosts(data.data || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch Instagram posts.');
      }
    }

    fetchInstagramPosts();
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const positionSticky = useTransform(scrollYProgress, [0, 1], ["relative", "sticky"]);

  return (
    <section className='p-9 my-9  grid grid-cols-1 lg:grid-cols-2 gap-7 relative border-b-2 border-t-2 border-primaryDark dark:border-primaryLight ' ref={targetRef}>
      <motion.div style={{ position: positionSticky }} className='flex flex-col py-5 lg:w-[90%] lg:h-[70vh] gap-3 items-start bg-primaryLight dark:bg-primaryDark  lg:top-20 top-16 text-primaryDark dark:text-primaryLight z-20'>
        <h1 className="text-3xl md:text-4xl font-playfair uppercase">Latest Instagram Updates</h1>
        <p className='font-poppins text-justify'>Update terbaru dari Instagram saya menampilkan hasil kolaborasi dan eksplorasi kreatif.</p>
      </motion.div>
      {error && <p className="text-red-500">{error}</p>}

      <div className='flex flex-col gap-5 z-10 overflow-hidden'>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="flex flex-col justify-center items-center border rounded-lg p-4">
              <img
                src={post.media_url}
                alt="Instagram post"
                className="w-full object-contain mb-4 rounded"
                />
              <Link
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryDark dark:text-primaryLight"
                >
                View on Instagram
              </Link>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      <Link href='https://www.instagram.com/geslyardiansyah/' target="_blank"  className='w-36 flex justify-evenly items-center text-primaryDark dark:text-primaryLight border-2 border-primaryDark dark:border-primaryLight rounded-full p-2 font-poppins'>See More <IoMdArrowRoundForward/> </Link>
      </div>
    </section>
  )
}

export default LatestUpdateInsragram