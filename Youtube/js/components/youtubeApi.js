export default function youtubeApi() {
	// Get This ID From https://console.cloud.google.com/
	let myKey = "AIzaSyCagEKN3rMcmRv2Re7Hlhgh8cxnjZCV7Pk";

	(async function getVideosApi() {
		// Get Videos Api From Youtube Developer Documentation
		let videoHttp = "https://www.googleapis.com/youtube/v3/videos?";
		let urlSearchParamater = new URLSearchParams({
			key: myKey,
			part: "snippet",
			chart: "mostPopular",
			maxResults: 0,
		});

		await fetch(
			"https://www.googleapis.com/youtube/v3/videos?" +
				new URLSearchParams({
					key: myKey,
					part: "snippet",
					chart: "mostPopular",
					maxResults: 0,
				})
		)
			.then((result) => result.json())
			.then((data) => console.log(data))
			.then((data) => data.items.map((item) => getChannelsApi(item)))
			.catch((err) => console.error(err));
	})();

	async function getChannelsApi(channelApi) {
		// Get Channel Api From Youtube Developer Documentation
		let channelHttp = "https://www.googleapis.com/youtube/v3/channels?";
		let urlSearchParamater = new URLSearchParams({ key: myKey, part: "snippet", id: channelApi.snippet.channelId });

		await fetch(channelHttp + urlSearchParamater)
			.then((result) => result.json())
			.then((data) => {
				data.channelTitle = channelApi.snippet.channelTitle;
				data.VIDEOID = channelApi.id;
				homePage(data);
			})
			.catch((err) => console.error(err));
	}

	function homePage(item) {
		let youtubeWatchHttp = "https://www.youtube.com/watch?v=";
		let container = document.querySelector(".videos-container");

		let template = `
			<a href="${youtubeWatchHttp + item.VIDEOID}" class="video" target="_blank	">
				<div class="cover-img">
					<img src="${item.items[0].snippet.thumbnails.high.url}" alt="video avatar" />
				</div>
				<div class="content">
					<div class="channel-img">
						<img src="${item.items[0].snippet.thumbnails.high.url}" alt="channel-logo" />
					</div>
					<div class="video-details">
						<h4 class="video-title">${item.items[0].snippet.title}</h4>
						<p class="channel-name">${item.channelTitle}</p>
						<div class="target">
							<span class="views">15M</span>
							<span class="ago">2 Years Ago</span>
						</div>
					</div>
				</div>
			</a>
		`;

		container.innerHTML += template;
	}
}
