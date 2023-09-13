export type CommentsProps = {
	items: {
		id: string;
		snippet: {
			textDisplay: string;
			textOriginal: string;
			authorDisplayName: string;
			authorProfileImageUrl: string;
			authorChannelUrl: string;
			authorChannelId: { value: string };
			canRate: boolean;
			viewerRating: string;
			likeCount: number;
			publishedAt: Date;
			updatedAt: Date;
		};
	}[];
};
