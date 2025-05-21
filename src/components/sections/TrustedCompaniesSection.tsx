'use client';

import { Logos3 } from '@/components/ui/logos3';

const companies = [
	{
		id: 'company-1',
		description: 'Infosys - Bangalore IT Services',
		image: '/companies/company1.svg',
	},
	{
		id: 'company-2',
		description: 'Wipro - Bangalore IT Services',
		image: '/companies/company2.svg',
	},
	{
		id: 'company-3',
		description: 'Flipkart - Bangalore E-commerce',
		image: '/companies/company3.svg',
	},
	{
		id: 'company-4',
		description: 'Biocon - Bangalore Biotech',
		image: '/companies/company4.svg',
	},
	{
		id: 'company-5',
		description: 'Canara Bank - Bangalore Banking',
		image: '/companies/company5.svg',
	},
	{
		id: 'company-6',
		description: 'Mindtree - Bangalore IT Services',
		image: '/companies/company6.svg',
	},
];

export const TrustedCompaniesSection = () => {
	return (
		<section id="trusted-companies" className="relative py-20">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
				Trusted by Bangalore’s Leading Companies
			</h2>
			<Logos3
				logos={companies.map(company => ({
					...company,
					className: 'h-7 w-auto',
				}))}
			/>
		</section>
	);
};