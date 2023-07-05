import "./styles/reserve.scss";

export const Reserve = ({ price }) => {
	return (
		<section className="reserve-section">
			<div className="description">
				<h1 className="title">Stay In A Heart Of The City</h1>
				<p className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit eligendi voluptas aut, nobis libero, animi quibusdam corrupti natus iusto culpa veniam enim molestiae maxime eos
					excepturi, cupiditate et ex!
				</p>
				<p className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit eligendi voluptas aut, nobis libero, animi quibusdam corrupti natus iusto culpa veniam enim molestiae maxime eos
					excepturi, cupiditate et ex!
				</p>
			</div>
			<div className="reserve">
				<h3 className="title">Perfect For 9 Nights-Stay</h3>
				<p className="desc">Located In The Real Heart Of Krakow.</p>
				<p className="desc">This Property Has An Excellent Location Score Of 9.8</p>
				<div className="flex-start">
					<h1 className="price">${price}</h1>
					<p className="nights">(9 Nights)</p>
				</div>
				<button className="mybtn" data-varient="fill">
					Reserve OR Book Now!
				</button>
			</div>
		</section>
	);
};
