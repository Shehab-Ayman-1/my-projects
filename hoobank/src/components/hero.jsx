import { styles } from "assets/styles";
import { discount, robot, arrowUp } from "assets/images";

export const Hero = () => (
	<section id="home" className={`${styles.boxWidth} ${styles.paddingY} flex sm:flex-row flex-col`}>
		<div className={`${styles.flexStart} ${styles.paddingX} flex-1 flex-col xl:px-0`}>
			<div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
				<img className="w-[32px] h-[32px]" src={discount} alt="discount" />
				<p className={`${styles.paragraph} text-dimWhite ml-2`}>
					<span className="text-white">20%</span> Discount For <span className="text-white px-2">1 Month</span> Account
				</p>
			</div>
			<div className="w-full flex flex-row justify-between items-center">
				<h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] sm:text-start text-center">
					The Next <br className="sm:block hidden" /> <span className="text-gradient">Generation</span>
				</h1>
				<div
					className={`${styles.flexCenter} sm:flex hidden md:mr-4 mr-0 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] cursor-pointer`}>
					<div className={`${styles.flexCenter} bg-primary flex-col w-full h-full rounded-full`}>
						<div className={`flex flex-wrap`}>
							<p className={`text-gradient text-[18px] font-semibold leading-[23px] mr-3`}>GET</p>
							<img className="w-8 h-8" src={arrowUp} alt="arrow" />
						</div>
						<p className="text-gradient text-[18px] font-semibold pt-1">STARTED</p>
					</div>
				</div>
			</div>
			<h1
				className={`w-full font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] sm:text-start text-center`}>
				Payment Method.
			</h1>
			<p className={`${styles.paragraph} mt-5 sm:max-w-[470px] sm:text-start text-center`}>
				Out Team Of Experts Uses A methodolofy To Identify the credit card s most likely to fit your needs. we exami ne annual
				percentage rates, annual fees.
			</p>
		</div>
		<div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
			<img className="w-full h-full relative z-[5]" src={robot} alt="robot" />
			<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
			<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
			<div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient" />
		</div>
	</section>
);
