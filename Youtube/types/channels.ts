type Thumbnails = {
	default: {
		width: number;
		height: number;
		url: string;
	};
	medium: {
		width: number;
		height: number;
		url: string;
	};
	high: {
		width: number;
		height: number;
		url: string;
	};
};

export type ChannelProps = {
	id: string;
	snippet: {
		title: string;
		description: string;
		customUrl: string;
		publishedAt: Date;
		thumbnails: Thumbnails;
		localized: { title: string; description: string };
		country: string;
	};
	statistics: {
		viewCount: string;
		subscriberCount: string;
		hiddenSubscriberCount: boolean;
		videoCount: string;
	};
	brandingSettings: {
		channel: {
			title: string;
			description: string;
			keywords: string;
			unsubscribedTrailer: string;
			country: string;
		};
		image: { bannerExternalUrl: string };
	};
};
