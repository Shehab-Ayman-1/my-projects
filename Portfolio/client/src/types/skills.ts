type WorkExperience = {
	name: string;
	company: string;
	description: string;
};

export type SkillsProps = {
	name: string;
	icon: string;
	bgColor: string;
};

export type ExperiencesProps = {
	year: string;
	works: WorkExperience[];
};
