import { styles } from "assets/styles";
import { logo } from "assets/images";
import { footerLinks, socialMedia } from "constants/";

export const Footer = () => {
	return (
		<footer className={`${styles.paddingY} ${styles.flexCenter} w-full flex-col`}>
			<div className="w-full">
				<div className={`${styles.flexStart} w-full flex-1 flex-col mb-8`}>
					<img className="w-[266px] h-[72px] object-contain" src={logo} alt="hoobank" />
					<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A New Way To Make The Payment Easy And Secure</p>
				</div>
				<div className="w-full flex flex-[1.5] flex-row justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map((item, i) => (
						<div className="ss:my-0 my-4 min-w-[150px]" key={i}>
							<h4 className="font-semibold text-[22px] leading-[27px] pb-5">{item.title}</h4>
							<div className="">
								{item.links.map((link) => (
									<p
										className="text-[16px] pb-5 leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
										key={link.name}>
										{link.name}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={`${styles.flexStart} w-full justify-between sm:flex-row flex-col pt-6 border-t-[1px] border-t-[#555] mt-5`}>
				<p className="text-dimWhite sm:text-[18px] text-20">
					2021 <span className="text-gradient font-semibold">HOOBANK</span>. All Rights Reserved
				</p>
				<div className="flex">
					{socialMedia.map((item, i) => (
						<img className="mr-5 w-[21px]" src={item.icon} alt="icon" key={i} />
					))}
				</div>
			</div>
		</footer>
	);
};
