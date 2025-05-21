// src/components/sections/TestimonialsSection.tsx
'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

const testimonials = [
	{
		quote: 'Revolv36t transformed our digital presence completely. Their innovative approach and deep understanding of the Bangalore market made all the difference.',
		name: 'Rahul Sharma',
		designation: 'CEO at Bangalore Tech',
		src: '/testimonials/client1.jpg',
	},
	{
		quote: "Outstanding service and exceptional results. Their team's dedication to our success was evident throughout the project.",
		name: 'Priya Menon',
		designation: 'Marketing Director at South Innovations',
		src: '/testimonials/client2.jpg',
	},
	{
		quote: 'The level of professionalism and expertise is unmatched. They delivered beyond our expectations.',
		name: 'Anil Kumar',
		designation: 'Founder of Digital Solutions Bangalore',
		src: '/testimonials/client3.jpg',
	},
]

export const TestimonialsSection = () => {
	return (
		<section id="testimonials" className="relative py-20">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
					Client Success Stories
				</h2>
				<AnimatedTestimonials testimonials={testimonials} autoplay={true} />
			</div>
		</section>
	)
}