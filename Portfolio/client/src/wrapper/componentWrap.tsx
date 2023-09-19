import { NavigationDots, SocialMedia } from "@/components";

export const componentWrap = (Component: any, sectionId: string, classNames?: string) => () => {
	return (
		<section className={`app__container ${classNames}`} id={`${sectionId}-section`}>
			<SocialMedia />
			<div className="app__wrapper app__flex">
				<Component />

				<div className="copyright">
					<p className="p-text">@2020 MICAEL</p>
					<p className="p-text">All Rights Reserved</p>
				</div>
			</div>
			<NavigationDots activeLink={sectionId} />
		</section>
	);
};
