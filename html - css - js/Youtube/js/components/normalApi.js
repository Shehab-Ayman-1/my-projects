export default function normalVideos() {
	let videosContainer = document.querySelector(".videos-container");

	// Append The Videos
	for (let i = 1; i <= 100; i++) {
		videosContainer.innerHTML += createVideo(i);
	}

	// Create Videos In The Page
	function createVideo(index) {
		return `
			<div class="video">
				<div class="cover-img">
					<img src="../assests/video${
						index <= 10
							? index
							: index <= 20
							? index - 10
							: index <= 30
							? index - 20
							: index <= 40
							? index - 30
							: index <= 50
							? index - 40
							: index <= 60
							? index - 50
							: index <= 70
							? index - 60
							: index <= 80
							? index - 70
							: index <= 90
							? index - 80
							: index <= 100
							? index - 90
							: ""
					}.jpeg" alt="${index}" />
				</div>
				<div class="content">
					<div class="channel-img">
						<img src="../assests/channel-logo.jpg" alt="channel-logo" />
					</div>
					<div class="video-details">
						<h4 class="video-title">My mobile got stolen!</h4>
						<p class="channel-name">Codezilla</p>
						<div class="target">
							<span class="views">15M</span>
							<span class="ago">2 Years Ago</span>
						</div>
					</div>
				</div>
			</div>
		`;
	}
}
