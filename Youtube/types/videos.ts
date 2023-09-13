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

export type VideoProps = {
	id: {
		videoId?: string;
		channelId?: string;
		playlistId?: string;
	};
	snippet: {
		channelId?: string;
		channelTitle?: string;
		description: string;
		publishedAt: Date;
		title: string;
		thumbnails: Thumbnails;
	};
	statistics?: {
		viewCount: string;
		subscriberCount: string;
		hiddenSubscriberCount: boolean;
		videoCount: string;
	};
};

export type VideoIdParams = {
	params: {
		id: string;
	};
};

export type VideoDetailsProps = {
	kind: string;
	id: string;
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: Thumbnails;
		channelTitle: string;
		tags: string[];
		categoryId: string;
		liveBroadcastContent: string;
		defaultLanguage: string;
		localized: {
			title: string;
			description: string;
		};
		defaultAudioLanguage: string;
	};
	contentDetails: {
		duration: string;
		dimension: string;
		definition: string;
		caption: string;
		licensedContent: boolean;
		contentRating: {};
		projection: string;
	};
	statistics: {
		viewCount: string;
		likeCount: string;
		favoriteCount: string;
		commentCount: string;
	};
};
