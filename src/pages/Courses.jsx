import React, { useState } from "react";
import courses from "../data/CourseResources";
import CourseDropdown from "../components/CourseDropdown";

const Courses = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const handleDropdownChange = (e) => {
		setSelectedCategory(e.target.value);
	};


	// Filter and deduplicate courses by title and description
	const filteredCourses = (() => {
		const filtered = selectedCategory === "All"
			? courses
			: courses.filter((course) => course.category === selectedCategory);
		const seen = new Set();
		const unique = [];
		for (const course of filtered) {
			const key = course.title + '|' + course.description;
			if (!seen.has(key)) {
				seen.add(key);
				unique.push(course);
			}
		}
		// Flatten resources for each unique course
		return unique.flatMap((course) =>
			Array.isArray(course.resources)
				? course.resources.map((resource, idx) => {
					const isObj = typeof resource === 'object' && resource !== null;
					return {
						...course,
						resource: isObj ? resource : { url: resource },
						resourceIdx: idx
					};
				})
				: []
		);
	})();

	return (
		<div className="p-6">
			<h1
				className="text-4xl font-extrabold text-center mb-10 tracking-wider bg-gradient-to-r from-blue-400 via-black to-blue-400 bg-clip-text text-transparent drop-shadow-lg uppercase"
				style={{ letterSpacing: '0.1em', textShadow: '0 2px 8px rgba(59,130,246,0.2)' }}
			>
				COURSE RECOMMENDATION
			</h1>
			
			<CourseDropdown value={selectedCategory} onChange={handleDropdownChange} />

			
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
				{filteredCourses.map((course, idx) => {
					const { resource, resourceIdx, title, description, category } = course;
					const url = resource.url;
					const type = resource.type ? resource.type : 'Free';
					return (
						<div
							key={title + '-' + resourceIdx + '-' + url}
							className="bg-gray-300 shadow-lg rounded-xl p-5 hover:shadow-2xl transition duration-300 flex flex-col"
						>
							<h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
							<span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full self-start mb-3">{category}</span>
							<p className="text-gray-600 flex-grow">{description}</p>
							<div className="mt-4 flex flex-col gap-3">
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
									style={{ display: 'inline-block', minWidth: '80px' }}
								>
									Resource {resourceIdx + 1}
									<span
										className={
											`ml-2 text-xs px-2 py-1 rounded border ` +
											(type === 'Free'
												? 'bg-green-100 text-green-800 border-green-300'
												: 'bg-yellow-100 text-yellow-800 border-yellow-300')
										}
									>
										{type}
									</span>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Courses;

